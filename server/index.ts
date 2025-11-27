import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import { config } from "dotenv";
import { z } from "zod";

// Load environment variables
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2, "Imię musi mieć minimum 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().min(9, "Nieprawidłowy numer telefonu").optional(),
  city: z.string().optional(),
  service: z.enum(["klimatyzacja", "pompa-ciepla", "rekuperacja"]).optional(),
  message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków"),
});

// Email transporter configuration
const createEmailTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️  SMTP credentials not configured. Email sending will be disabled.");
    return null;
  }

  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Rate limiting store (simple in-memory, for production use Redis)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const rateLimit = (windowMs: number, maxRequests: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const record = rateLimitStore.get(ip);

    if (!record || now > record.resetAt) {
      rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (record.count >= maxRequests) {
      return res.status(429).json({
        success: false,
        error: "Zbyt wiele żądań. Spróbuj ponownie za chwilę.",
      });
    }

    record.count++;
    next();
  };
};

async function startServer() {
  const app = express();
  const server = createServer(app);
  const emailTransporter = createEmailTransporter();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS configuration
  const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [
    "http://localhost:3000",
    "http://localhost:5173",
  ];

  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form endpoint with rate limiting
  app.post(
    "/api/contact",
    rateLimit(
      parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes
      parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "10")
    ),
    async (req: Request, res: Response) => {
      try {
        // Validate request body
        const data = contactFormSchema.parse(req.body);

        // Log contact form submission (for development)
        console.log("📧 Contact form submission:", {
          name: data.name,
          email: data.email,
          city: data.city,
          service: data.service,
          timestamp: new Date().toISOString(),
        });

        // Send email if transporter is configured
        if (emailTransporter) {
          const cityInfo = data.city ? ` z ${data.city}` : "";
          const serviceInfo = data.service ? ` (${data.service})` : "";

          const mailOptions = {
            from: `"${process.env.COMPANY_NAME} - Formularz Kontaktowy" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_TO || "info@warmandcold.pl",
            cc: process.env.EMAIL_CC,
            replyTo: data.email,
            subject: `🔥 Nowe zapytanie${cityInfo}${serviceInfo} - warm&cold`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #25344c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                  .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 20px; }
                  .label { font-weight: bold; color: #25344c; display: block; margin-bottom: 5px; }
                  .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #25344c; }
                  .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 12px; color: #666; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>🔥 Nowe Zapytanie - warm&cold</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <span class="label">👤 Imię i nazwisko:</span>
                      <div class="value">${data.name}</div>
                    </div>
                    <div class="field">
                      <span class="label">📧 Email:</span>
                      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                    </div>
                    ${
                      data.phone
                        ? `
                    <div class="field">
                      <span class="label">📱 Telefon:</span>
                      <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
                    </div>
                    `
                        : ""
                    }
                    ${
                      data.city
                        ? `
                    <div class="field">
                      <span class="label">📍 Miasto:</span>
                      <div class="value">${data.city}</div>
                    </div>
                    `
                        : ""
                    }
                    ${
                      data.service
                        ? `
                    <div class="field">
                      <span class="label">🛠️ Usługa:</span>
                      <div class="value">${data.service}</div>
                    </div>
                    `
                        : ""
                    }
                    <div class="field">
                      <span class="label">💬 Wiadomość:</span>
                      <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
                    </div>
                    <div class="footer">
                      <p><strong>Data wysłania:</strong> ${new Date().toLocaleString("pl-PL")}</p>
                      <p><strong>IP:</strong> ${req.ip || req.socket.remoteAddress || "nieznane"}</p>
                      <p>Wiadomość wysłana automatycznie z formularza kontaktowego na warmandcold.pl</p>
                    </div>
                  </div>
                </div>
              </body>
              </html>
            `,
            text: `
NOWE ZAPYTANIE - warm&cold

Imię i nazwisko: ${data.name}
Email: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}
${data.city ? `Miasto: ${data.city}` : ""}
${data.service ? `Usługa: ${data.service}` : ""}

Wiadomość:
${data.message}

---
Data wysłania: ${new Date().toLocaleString("pl-PL")}
IP: ${req.ip || req.socket.remoteAddress || "nieznane"}
            `,
          };

          await emailTransporter.sendMail(mailOptions);
          console.log("✅ Email sent successfully");
        } else {
          console.log("⚠️  Email not sent (transporter not configured)");
        }

        res.json({
          success: true,
          message: "Dziękujemy za wiadomość! Odezwiemy się wkrótce.",
        });
      } catch (error) {
        console.error("❌ Contact form error:", error);

        if (error instanceof z.ZodError) {
          return res.status(400).json({
            success: false,
            error: "Nieprawidłowe dane formularza",
            details: error.errors,
          });
        }

        res.status(500).json({
          success: false,
          error: "Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 881 515 595",
        });
      }
    }
  );

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3001;

  server.listen(port, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🔥 warm&cold Server Running                            ║
║                                                           ║
║   🌐 Server:  http://localhost:${port}                       ║
║   📧 Email:   ${emailTransporter ? "✅ Configured" : "⚠️  Not configured"}                      ║
║   🔒 Env:     ${process.env.NODE_ENV || "development"}                            ║
║                                                           ║
║   📍 Location: ul. Braci Czeskich 14, Szamotuły         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
  });
}

startServer().catch(console.error);

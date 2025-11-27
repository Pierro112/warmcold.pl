# City Landing Pages - Dokumentacja

## Przegląd

System 327 city landing pages dla SEO dominacji w Wielkopolsce.

**Struktura URL:**
- 147 × `/[city-slug]/klimatyzacja`
- 100 × `/[city-slug]/pompa-ciepla`
- 80 × `/[city-slug]/rekuperacja`

**Przykłady:**
- `https://warmandcold.pl/poznan/klimatyzacja`
- `https://warmandcold.pl/kalisz/pompa-ciepla`
- `https://warmandcold.pl/pila/rekuperacja`

## Stack Technologiczny

- **Backend:** Express + NodeJS + dotenv (environment variables)
- **Email:** Nodemailer z rate limiting
- **Frontend:** React + TypeScript + Wouter (routing)
- **SEO:** react-helmet-async + JSON-LD schema
- **UI:** Tailwind CSS + Radix UI + shadcn/ui
- **Maps:** Google Maps API z routing z Szamotuł

## Struktura Projektu

```
warmcold.pl-main/
├── .env.example                 # Template environment variables
├── .env                         # NIGDY nie commitować! (w .gitignore)
├── server/
│   └── index.ts                 # Express backend z /api/contact endpoint
├── client/
│   ├── index.html               # Google Maps API script
│   └── src/
│       ├── components/
│       │   ├── Breadcrumbs.tsx           # SEO breadcrumbs
│       │   └── GoogleMapsRoute.tsx       # Mapa z trasą z Szamotuł
│       └── pages/
│           └── city/
│               ├── PoznanKlimatyzacja.tsx    # Template example
│               └── [kolejne miasta]...
```

## Environment Variables

### Wymagane w .env

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
EMAIL_TO=info@warmandcold.pl

# Google Maps
GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Security
CORS_ORIGIN=http://localhost:3000,https://warmandcold.pl
```

**WAŻNE:** Skopiuj `.env.example` do `.env` i wypełnij prawdziwymi danymi.

## Dodawanie Nowego Miasta

### 1. Stwórz City Data Object

```typescript
const CITY_DATA = {
  name: 'Miasto',
  slug: 'miasto-slug',
  population: 50000,
  lat: 52.4064,
  lng: 16.9252,
  distanceFromSzamotuly: 35,
  county: 'powiat',
  climate: 'klimat umiarkowany przejściowy, średnia temp. roczna 8.5°C',
};
```

### 2. Skopiuj Template

```bash
cp client/src/pages/city/PoznanKlimatyzacja.tsx client/src/pages/city/NoweM iastoUsługa.tsx
```

### 3. Dostosuj Content

- Zmień `CITY_DATA` na dane nowego miasta
- Dostosuj unique content (900-1800 słów)
- Użyj lokalnych keywords (30-40x)
- Dodaj lokalne przykłady (dzielnice, ulice)

### 4. Dodaj Routing

W `client/src/App.tsx`:

```typescript
// Import
import NoweeMiastoUsluga from './pages/city/NoweMiastoUsluga';

// Route (przed 404)
<Route path="/nowe-miasto/usluga" component={NoweMiastoUsluga} />
```

## SEO Guidelines

### Meta Tags (każda strona)

```typescript
<Helmet>
  <title>Usługa z montażem {CITY} – warm&cold | Cena 2026</title>
  <meta name="description" content="⭐ Profesjonalny montaż... | Dojazd X km" />
  <meta name="keywords" content="30-40 lokalnych keywords" />
  <link rel="canonical" href="https://warmandcold.pl/{city}/{service}" />
</Helmet>
```

### Schema.org LocalBusiness

```json
{
  "@type": "LocalBusiness",
  "name": "warm&cold - Usługa {City}",
  "areaServed": { "@type": "City", "name": "{City}" },
  "geo": { "latitude": X, "longitude": Y },
  "priceRange": "3500 zł - 12000 zł"
}
```

### Content Requirements

- **Length:** 900-1800 słów unique content
- **Keywords density:** 2-3% (natural usage)
- **Local mentions:** Dzielnice, ulice, landmarks
- **Internal links:** 3-5 linków do case studies/calculator
- **Headings:** H1 → H2 → H3 (proper hierarchy)

## Backend API

### POST /api/contact

Endpoint do contact forms z city pages.

**Request Body:**
```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "phone": "881515595",
  "city": "Poznań",
  "service": "klimatyzacja",
  "message": "Proszę o wycenę..."
}
```

**Features:**
- ✅ Validation (Zod schema)
- ✅ Rate limiting (10 requests / 15 min)
- ✅ Email notification (HTML + plain text)
- ✅ CORS protection
- ✅ IP logging

### Email Template

Professional HTML email z:
- City info (🏙️)
- Service info (🛠️)
- Client data (👤 📧 📱)
- Timestamp & IP

## Development

### Local Setup

```bash
# Install dependencies
npm install --legacy-peer-deps

# Create .env from template
cp .env.example .env
# Edit .env and add your credentials

# Start dev server
npm run dev

# Server będzie na:
# - Frontend: http://localhost:5173
# - Backend: http://localhost:3001
```

### Build Production

```bash
npm run build

# Outputs:
# - client/dist/ → frontend
# - dist/ → backend
```

## Deployment (Vercel)

### Environment Variables w Vercel Dashboard

Dodaj wszystkie zmienne z `.env.example`:
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_TO`
- `GOOGLE_MAPS_API_KEY`
- `CORS_ORIGIN`

### Build Settings

```
Build Command: npm run build
Output Directory: client/dist
Install Command: npm install --legacy-peer-deps
```

## Google Maps API Setup

1. Idź do: https://console.cloud.google.com/
2. Utwórz nowy projekt lub wybierz istniejący
3. Enable APIs:
   - Maps JavaScript API
   - Directions API
   - Places API
4. Credentials → Create API Key
5. Restrict API Key:
   - HTTP referrers: `warmandcold.pl/*`, `*.warmandcold.pl/*`
   - API restrictions: Maps JavaScript API, Directions API
6. Copy key to `.env`:
   ```
   GOOGLE_MAPS_API_KEY=AIzaSy...
   VITE_GOOGLE_MAPS_API_KEY=AIzaSy...
   ```

## Content Strategy

### Unique Content per City (900-1800 słów)

**Section 1: Local Introduction (200-300 słów)**
- Distance z Szamotuł
- Lokalne dzielnice (Poznań: Grunwald, Jeżyce, Wilda)
- Specyfika zabudowy (blokowiska, domy jednorodzinne)

**Section 2: Service Benefits (300-400 słów)**
- Dlaczego warto w tym mieście
- Lokalne wyzwania klimatyczne
- Przykłady instalacji w dzielnicy X

**Section 3: Pricing (200-300 słów)**
- Tabela cen
- Faktory wpływające na cenę
- Możliwość rat 0%

**Section 4: Process (200-300 słów)**
- Jak wygląda montaż
- Czas dojazdu z Szamotuł
- Gwarancja i serwis

**Section 5: CTA (100-200 słów)**
- Wezwanie do działania
- Kontakt: telefon, email, formularz

### Keywords (30-40 per page)

**Primary (10x):**
- `klimatyzacja {miasto}`
- `montaż klimatyzacji {miasto}`

**Secondary (20x):**
- `klimatyzacja z montażem {miasto}`
- `cena klimatyzacji {miasto}`
- `serwis klimatyzacji {miasto}`

**Long-tail (10x):**
- `ile kosztuje montaż klimatyzacji {miasto}`
- `najlepsza klimatyzacja {miasto}`
- `montaż klimatyzacji {miasto} opinie`

## Monitoring & Analytics

### KPIs to Track

- ☎️ **Phone calls** z każdego miasta
- 📧 **Contact form submissions** (/api/contact)
- 🔍 **Organic traffic** per city page
- ⭐ **Rankings** dla target keywords
- 🎯 **Conversion rate** (visit → lead)

### Expected Results

**Rok 1 (2026):**
- 7000+ leads rocznie
- Top 3 rankings dla 90% target keywords w Wielkopolsce
- Dominacja w: Poznań, Gniezno, Szamotuły, Wągrowiec, Oborniki

## Support & Contact

**warm&cold**
- 📍 ul. Braci Czeskich 14, 64-500 Szamotuły
- ☎️ 881 515 595
- 📧 info@warmandcold.pl
- 🌐 https://warmandcold.pl

**Tech Lead:** Kacper Buda, Łukasz Trzeciak
**Installation Team:** 10 certified installers

---

## Status: COMPLETED ✅

- ✅ Backend z environment variables
- ✅ Email handling z rate limiting
- ✅ Breadcrumbs component
- ✅ GoogleMapsRoute component
- ✅ Template city page (Poznań/klimatyzacja)
- ✅ Routing w App.tsx
- ✅ SEO optimization (meta tags, JSON-LD)
- ✅ Google Maps integration

**Next Steps:**
1. Dodać pozostałe 326 city pages (skopiować template)
2. Wypełnić .env z prawdziwymi credentials
3. Deploy na Vercel
4. Monitor rankings & leads

**TARGET: 7000+ LEADS PER YEAR | TOTAL DOMINATION IN WIELKOPOLSKA 🔥**

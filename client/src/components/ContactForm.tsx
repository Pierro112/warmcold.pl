import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const labels = {
    pl: {
      title: 'Formularz kontaktowy',
      description: 'Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin',
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      phone: 'Numer telefonu',
      message: 'Wiadomość',
      send: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      success: 'Wiadomość wysłana pomyślnie!',
      error: 'Wystąpił błąd. Spróbuj ponownie.',
      namePlaceholder: 'Jan Kowalski',
      emailPlaceholder: 'jan@example.com',
      phonePlaceholder: '+48 123 456 789',
      messagePlaceholder: 'Opisz swoje potrzeby...',
    },
    en: {
      title: 'Contact Form',
      description: 'Fill out the form and we will contact you within 24 hours',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again.',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      phonePlaceholder: '+48 123 456 789',
      messagePlaceholder: 'Describe your needs...',
    },
    uk: {
      title: 'Контактна форма',
      description: 'Заповніть форму, і ми зв\'яжемося з вами протягом 24 годин',
      name: 'Повне ім\'я',
      email: 'Електронна адреса',
      phone: 'Номер телефону',
      message: 'Повідомлення',
      send: 'Надіслати повідомлення',
      sending: 'Надсилання...',
      success: 'Повідомлення успішно надіслано!',
      error: 'Сталася помилка. Спробуйте ще раз.',
      namePlaceholder: 'Іван Петренко',
      emailPlaceholder: 'ivan@example.com',
      phonePlaceholder: '+48 123 456 789',
      messagePlaceholder: 'Опишіть ваші потреби...',
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const l = labels[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real implementation, this would call a backend API that uses Resend
      // For now, we'll simulate the form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success
      toast.success(l.success);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error(l.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          {l.title}
        </CardTitle>
        <CardDescription>{l.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {l.name}
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={l.namePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {l.email}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={l.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {l.phone}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={l.phonePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{l.message}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={l.messagePlaceholder}
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? l.sending : l.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

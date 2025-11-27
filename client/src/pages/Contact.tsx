import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('nav.contact')}</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Dane kontaktowe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Adres</p>
                  <p className="text-muted-foreground">{t('company.address')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href={`tel:${t('company.phone').replace(/\s/g, '')}`} className="text-muted-foreground hover:underline">
                    {t('company.phone')}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${t('company.email')}`} className="text-muted-foreground hover:underline">
                    {t('company.email')}
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">{t('company.nip')}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Godziny otwarcia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Poniedziałek - Piątek</span>
                <span className="font-medium">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sobota</span>
                <span className="font-medium">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Niedziela</span>
                <span className="font-medium">Zamknięte</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

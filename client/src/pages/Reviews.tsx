import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Reviews() {
  const { i18n } = useTranslation();
  
  const content = {
    pl: { title: 'Opinie klientów', cta: 'Skontaktuj się z nami', comingSoon: 'Strona w przygotowaniu' },
    en: { title: 'Customer Reviews', cta: 'Contact us', comingSoon: 'Page under construction' },
    uk: { title: 'Відгуки клієнтів', cta: "Зв'яжіться з нами", comingSoon: 'Сторінка в розробці' },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="min-h-screen">
      <section className="navy-section section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h1 className="text-white mb-6">{c.title}</h1>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="premium-card">
              <h2 className="text-premium-navy mb-6">{c.comingSoon}</h2>
              <Button size="lg" className="premium-button" onClick={() => window.location.href = `/${lang}/kontakt`}>
                {c.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

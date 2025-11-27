import { useTranslation } from 'react-i18next';
import BrandComparison from '@/components/BrandComparison';

export default function BrandComparisonPage() {
  const { i18n } = useTranslation();

  const content = {
    pl: {
      title: 'Porównanie marek klimatyzacji',
      description: 'Porównaj specyfikacje i funkcje różnych marek klimatyzacji, aby wybrać najlepszą dla siebie',
    },
    en: {
      title: 'Air Conditioning Brand Comparison',
      description: 'Compare specifications and features of different air conditioning brands to choose the best one for you',
    },
    uk: {
      title: 'Порівняння брендів кондиціонерів',
      description: 'Порівняйте специфікації та функції різних брендів кондиціонерів, щоб вибрати найкращий для себе',
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{c.title}</h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {c.description}
        </p>
        <BrandComparison />
      </div>
    </div>
  );
}

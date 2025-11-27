import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, Calendar, User, TrendingDown, CheckCircle2, ArrowRight,
  Thermometer, Zap, DollarSign, Clock
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface CaseStudyData {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  installer: string;
  category: string;
  
  // Challenge section
  challenge: {
    title: string;
    description: string;
    problems: string[];
  };
  
  // Solution section
  solution: {
    title: string;
    description: string;
    equipment: {
      brand: string;
      model: string;
      power: string;
      quantity: number;
    }[];
    installation: string[];
  };
  
  // Results section
  results: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      icon: any;
    }[];
    savings: {
      label: string;
      before: string;
      after: string;
      savings: string;
    }[];
  };
  
  // Testimonial
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  
  // Images
  images: {
    before: string;
    after: string;
    gallery: string[];
  };
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export default function CaseStudyTemplate() {
  const { i18n } = useTranslation();
  
  // TODO: Replace with actual data for each case study
  const caseStudy: Record<'pl' | 'en' | 'uk', CaseStudyData> = {
    pl: {
      id: 1,
      title: '[TYTUŁ STUDIUM PRZYPADKU]',
      subtitle: '[KRÓTKI OPIS - 1 ZDANIE]',
      location: '[MIASTO, WOJEWÓDZTWO]',
      date: '[MIESIĄC ROK]',
      installer: '[IMIĘ INSTALATORA]',
      category: '[KATEGORIA: Klimatyzacja / Pompa ciepła / Wentylacja]',
      
      challenge: {
        title: 'Wyzwanie',
        description: '[OPIS SYTUACJI KLIENTA - 2-3 ZDANIA]',
        problems: [
          '[PROBLEM 1]',
          '[PROBLEM 2]',
          '[PROBLEM 3]',
          '[PROBLEM 4]',
        ],
      },
      
      solution: {
        title: 'Rozwiązanie',
        description: '[OPIS PROPONOWANEGO ROZWIĄZANIA - 2-3 ZDANIA]',
        equipment: [
          {
            brand: '[MARKA]',
            model: '[MODEL]',
            power: '[MOC kW]',
            quantity: 1,
          },
        ],
        installation: [
          '[KROK INSTALACJI 1]',
          '[KROK INSTALACJI 2]',
          '[KROK INSTALACJI 3]',
          '[KROK INSTALACJI 4]',
        ],
      },
      
      results: {
        title: 'Rezultaty',
        description: '[PODSUMOWANIE REZULTATÓW - 2-3 ZDANIA]',
        metrics: [
          { label: 'Czas instalacji', value: '[X] dni', icon: Clock },
          { label: 'Oszczędność energii', value: '[X]%', icon: Zap },
          { label: 'Redukcja kosztów', value: '[X]%', icon: TrendingDown },
          { label: 'Temperatura komfortu', value: '[X]°C', icon: Thermometer },
        ],
        savings: [
          {
            label: 'Zużycie energii (miesięcznie)',
            before: '[X] kWh',
            after: '[Y] kWh',
            savings: '[Z]%',
          },
          {
            label: 'Koszty ogrzewania (miesięcznie)',
            before: '[X] zł',
            after: '[Y] zł',
            savings: '[Z] zł',
          },
          {
            label: 'Emisja CO2 (rocznie)',
            before: '[X] kg',
            after: '[Y] kg',
            savings: '[Z]%',
          },
        ],
      },
      
      testimonial: {
        quote: '[CYTAT OD KLIENTA - 2-3 ZDANIA O DOŚWIADCZENIU Z WARM&COLD]',
        author: '[IMIĘ NAZWISKO]',
        role: '[WŁAŚCICIEL / INWESTOR / ZARZĄDCA]',
      },
      
      images: {
        before: '/images/case-studies/[ID]/before.jpg',
        after: '/images/case-studies/[ID]/after.jpg',
        gallery: [
          '/images/case-studies/[ID]/gallery-1.jpg',
          '/images/case-studies/[ID]/gallery-2.jpg',
          '/images/case-studies/[ID]/gallery-3.jpg',
        ],
      },
      
      seo: {
        title: '[TYTUŁ SEO - MAX 60 ZNAKÓW]',
        description: '[OPIS META - MAX 160 ZNAKÓW]',
        keywords: ['klimatyzacja', 'pompa ciepła', 'wentylacja', '[MIASTO]', 'warm&cold'],
      },
    },
    en: {
      id: 1,
      title: '[CASE STUDY TITLE]',
      subtitle: '[SHORT DESCRIPTION - 1 SENTENCE]',
      location: '[CITY, REGION]',
      date: '[MONTH YEAR]',
      installer: '[INSTALLER NAME]',
      category: '[CATEGORY: Air Conditioning / Heat Pump / Ventilation]',
      
      challenge: {
        title: 'Challenge',
        description: '[CLIENT SITUATION DESCRIPTION - 2-3 SENTENCES]',
        problems: [
          '[PROBLEM 1]',
          '[PROBLEM 2]',
          '[PROBLEM 3]',
          '[PROBLEM 4]',
        ],
      },
      
      solution: {
        title: 'Solution',
        description: '[PROPOSED SOLUTION DESCRIPTION - 2-3 SENTENCES]',
        equipment: [
          {
            brand: '[BRAND]',
            model: '[MODEL]',
            power: '[POWER kW]',
            quantity: 1,
          },
        ],
        installation: [
          '[INSTALLATION STEP 1]',
          '[INSTALLATION STEP 2]',
          '[INSTALLATION STEP 3]',
          '[INSTALLATION STEP 4]',
        ],
      },
      
      results: {
        title: 'Results',
        description: '[RESULTS SUMMARY - 2-3 SENTENCES]',
        metrics: [
          { label: 'Installation time', value: '[X] days', icon: Clock },
          { label: 'Energy savings', value: '[X]%', icon: Zap },
          { label: 'Cost reduction', value: '[X]%', icon: TrendingDown },
          { label: 'Comfort temperature', value: '[X]°C', icon: Thermometer },
        ],
        savings: [
          {
            label: 'Energy consumption (monthly)',
            before: '[X] kWh',
            after: '[Y] kWh',
            savings: '[Z]%',
          },
          {
            label: 'Heating costs (monthly)',
            before: '[X] PLN',
            after: '[Y] PLN',
            savings: '[Z] PLN',
          },
          {
            label: 'CO2 emissions (yearly)',
            before: '[X] kg',
            after: '[Y] kg',
            savings: '[Z]%',
          },
        ],
      },
      
      testimonial: {
        quote: '[CLIENT QUOTE - 2-3 SENTENCES ABOUT EXPERIENCE WITH WARM&COLD]',
        author: '[FIRST LAST NAME]',
        role: '[OWNER / INVESTOR / MANAGER]',
      },
      
      images: {
        before: '/images/case-studies/[ID]/before.jpg',
        after: '/images/case-studies/[ID]/after.jpg',
        gallery: [
          '/images/case-studies/[ID]/gallery-1.jpg',
          '/images/case-studies/[ID]/gallery-2.jpg',
          '/images/case-studies/[ID]/gallery-3.jpg',
        ],
      },
      
      seo: {
        title: '[SEO TITLE - MAX 60 CHARS]',
        description: '[META DESCRIPTION - MAX 160 CHARS]',
        keywords: ['air conditioning', 'heat pump', 'ventilation', '[CITY]', 'warm&cold'],
      },
    },
    uk: {
      id: 1,
      title: '[НАЗВА КЕЙСУ]',
      subtitle: '[КОРОТКИЙ ОПИС - 1 РЕЧЕННЯ]',
      location: '[МІСТО, РЕГІОН]',
      date: '[МІСЯЦЬ РІК]',
      installer: '[ІМ\'Я МОНТАЖНИКА]',
      category: '[КАТЕГОРІЯ: Кондиціонування / Тепловий насос / Вентиляція]',
      
      challenge: {
        title: 'Виклик',
        description: '[ОПИС СИТУАЦІЇ КЛІЄНТА - 2-3 РЕЧЕННЯ]',
        problems: [
          '[ПРОБЛЕМА 1]',
          '[ПРОБЛЕМА 2]',
          '[ПРОБЛЕМА 3]',
          '[ПРОБЛЕМА 4]',
        ],
      },
      
      solution: {
        title: 'Рішення',
        description: '[ОПИС ЗАПРОПОНОВАНОГО РІШЕННЯ - 2-3 РЕЧЕННЯ]',
        equipment: [
          {
            brand: '[БРЕНД]',
            model: '[МОДЕЛЬ]',
            power: '[ПОТУЖНІСТЬ кВт]',
            quantity: 1,
          },
        ],
        installation: [
          '[КРОК МОНТАЖУ 1]',
          '[КРОК МОНТАЖУ 2]',
          '[КРОК МОНТАЖУ 3]',
          '[КРОК МОНТАЖУ 4]',
        ],
      },
      
      results: {
        title: 'Результати',
        description: '[ПІДСУМОК РЕЗУЛЬТАТІВ - 2-3 РЕЧЕННЯ]',
        metrics: [
          { label: 'Час монтажу', value: '[X] днів', icon: Clock },
          { label: 'Економія енергії', value: '[X]%', icon: Zap },
          { label: 'Зниження витрат', value: '[X]%', icon: TrendingDown },
          { label: 'Температура комфорту', value: '[X]°C', icon: Thermometer },
        ],
        savings: [
          {
            label: 'Споживання енергії (щомісяця)',
            before: '[X] кВт·год',
            after: '[Y] кВт·год',
            savings: '[Z]%',
          },
          {
            label: 'Витрати на опалення (щомісяця)',
            before: '[X] злотих',
            after: '[Y] злотих',
            savings: '[Z] злотих',
          },
          {
            label: 'Викиди CO2 (щороку)',
            before: '[X] кг',
            after: '[Y] кг',
            savings: '[Z]%',
          },
        ],
      },
      
      testimonial: {
        quote: '[ЦИТАТА ВІД КЛІЄНТА - 2-3 РЕЧЕННЯ ПРО ДОСВІД З WARM&COLD]',
        author: '[ІМ\'Я ПРІЗВИЩЕ]',
        role: '[ВЛАСНИК / ІНВЕСТОР / КЕРУЮЧИЙ]',
      },
      
      images: {
        before: '/images/case-studies/[ID]/before.jpg',
        after: '/images/case-studies/[ID]/after.jpg',
        gallery: [
          '/images/case-studies/[ID]/gallery-1.jpg',
          '/images/case-studies/[ID]/gallery-2.jpg',
          '/images/case-studies/[ID]/gallery-3.jpg',
        ],
      },
      
      seo: {
        title: '[SEO ЗАГОЛОВОК - МАКС 60 СИМВОЛІВ]',
        description: '[МЕТА ОПИС - МАКС 160 СИМВОЛІВ]',
        keywords: ['кондиціонування', 'тепловий насос', 'вентиляція', '[МІСТО]', 'warm&cold'],
      },
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const data = caseStudy[lang];

  // JSON-LD Schema for Case Study
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.subtitle,
    "datePublished": data.date,
    "author": {
      "@type": "Organization",
      "name": "warm&cold",
      "url": "https://warmandcold.pl",
    },
    "publisher": {
      "@type": "Organization",
      "name": "warm&cold",
      "logo": {
        "@type": "ImageObject",
        "url": "https://warmandcold.pl/logo-navy.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://warmandcold.pl/${lang}/case-studies/${data.id}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{data.seo.title} | warm&cold</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="navy-section section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto fade-in-up">
              <div className="flex flex-wrap gap-4 mb-6 text-gray-300 text-sm">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {data.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {data.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {data.installer}
                </span>
              </div>
              <h1 className="text-white mb-6">{data.title}</h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">{data.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Before/After Images */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="premium-card">
                <img src={data.images.before} alt="Before" className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-center font-semibold text-lg">Przed</p>
              </div>
              <div className="premium-card">
                <img src={data.images.after} alt="After" className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-center font-semibold text-lg">Po</p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-premium-navy mb-8">{data.challenge.title}</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{data.challenge.description}</p>
              <ul className="space-y-4">
                {data.challenge.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#25344c] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-premium-navy mb-8">{data.solution.title}</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{data.solution.description}</p>
              
              <div className="premium-card mb-8">
                <h3 className="text-xl font-semibold text-premium-navy mb-6">Zainstalowane urządzenia</h3>
                <div className="space-y-4">
                  {data.solution.equipment.map((eq, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <div>
                        <p className="font-semibold text-lg">{eq.brand} {eq.model}</p>
                        <p className="text-gray-600">{eq.power}</p>
                      </div>
                      <p className="text-gray-600">Ilość: {eq.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-premium-navy mb-6">Przebieg instalacji</h3>
              <ol className="space-y-4">
                {data.solution.installation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#25344c] text-white flex items-center justify-center font-semibold">
                      {idx + 1}
                    </span>
                    <span className="text-lg text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="navy-section section-padding">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-white mb-8 text-center">{data.results.title}</h2>
              <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">{data.results.description}</p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {data.results.metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
                      <p className="text-gray-300">{metric.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="premium-card bg-white">
                <h3 className="text-2xl font-semibold text-premium-navy mb-8">Tabela oszczędności</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4">Parametr</th>
                        <th className="text-center py-4 px-4">Przed</th>
                        <th className="text-center py-4 px-4">Po</th>
                        <th className="text-center py-4 px-4">Oszczędność</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.results.savings.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-4 px-4 font-medium">{row.label}</td>
                          <td className="text-center py-4 px-4">{row.before}</td>
                          <td className="text-center py-4 px-4">{row.after}</td>
                          <td className="text-center py-4 px-4 font-semibold text-green-600">{row.savings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="premium-card text-center">
                <p className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{data.testimonial.quote}"
                </p>
                <p className="font-semibold text-lg text-premium-navy">{data.testimonial.author}</p>
                <p className="text-gray-600">{data.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="navy-section section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-6">Chcesz podobne rezultaty?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Skontaktuj się z nami i uzyskaj bezpłatną wycenę dla swojego projektu
              </p>
              <Button 
                size="lg" 
                className="premium-button bg-white text-[#25344c] hover:bg-gray-100 text-lg px-12 py-7"
                onClick={() => window.location.href = `/${lang}/kontakt`}
              >
                Bezpłatna wycena
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

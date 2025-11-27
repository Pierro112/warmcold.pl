import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, CheckCircle2, AlertCircle, TrendingUp, DollarSign,
  Clock, Shield, Award, Phone, Mail, MapPin
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

/**
 * GEO ARTICLE TEMPLATE - 7000-9000 WORDS
 * 
 * This template provides the structure for comprehensive, first-person style articles
 * about HVAC topics with local SEO focus on Wielkopolska region.
 * 
 * CONTENT STRUCTURE (for 7000-9000 words):
 * 1. Introduction (500-700 words)
 * 2. Main sections (5-7 sections × 800-1200 words each)
 * 3. FAQ section (10-15 questions × 100-150 words each)
 * 4. Conclusion + CTA (300-500 words)
 * 
 * WRITING STYLE:
 * - First person plural: "My z warm&cold z Szamotuł przy ul. Braci Czeskich 14..."
 * - Local focus: mention Wielkopolska cities, local conditions, regional specifics
 * - Expert tone: share real experience, specific numbers, case examples
 * - Tables: comparison tables, cost breakdowns, technical specifications
 * - Schema markup: Article, FAQPage, LocalBusiness
 */

interface ArticleSection {
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

interface ArticleData {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  
  // Introduction
  introduction: {
    hook: string;
    context: string[];
    thesis: string;
  };
  
  // Main content sections
  sections: ArticleSection[];
  
  // FAQ
  faq: {
    question: string;
    answer: string;
  }[];
  
  // Conclusion
  conclusion: {
    summary: string[];
    cta: string;
  };
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export default function ArticleTemplate() {
  const { i18n } = useTranslation();
  
  // TODO: Replace with actual article content for each of 12 articles
  const article: Record<'pl' | 'en' | 'uk', ArticleData> = {
    pl: {
      id: 1,
      title: '[TYTUŁ ARTYKUŁU - MAX 60 ZNAKÓW]',
      subtitle: '[PODTYTUŁ - 1-2 ZDANIA OPISUJĄCE TEMAT]',
      author: 'Zespół warm&cold',
      date: '[DATA PUBLIKACJI]',
      readTime: '[X] min czytania',
      category: '[KATEGORIA: Klimatyzacja / Pompy ciepła / Wentylacja / Poradniki]',
      
      introduction: {
        hook: '[MOCNY WSTĘP - 2-3 ZDANIA PRZYCIĄGAJĄCE UWAGĘ]',
        context: [
          '[AKAPIT 1: Kontekst problemu - dlaczego ten temat jest ważny]',
          '[AKAPIT 2: Nasza perspektywa - "My z warm&cold z Szamotuł przy ul. Braci Czeskich 14 od 6 lat zajmujemy się..."]',
          '[AKAPIT 3: Zakres artykułu - co znajdzie czytelnik w tym przewodniku]',
        ],
        thesis: '[GŁÓWNA TEZA ARTYKUŁU - 1-2 ZDANIA]',
      },
      
      sections: [
        {
          title: '[SEKCJA 1: TYTUŁ]',
          content: [
            '[AKAPIT 1: Wprowadzenie do tematu sekcji - 150-200 słów]',
            '[AKAPIT 2: Rozwinięcie z przykładami - 150-200 słów]',
            '[AKAPIT 3: Nasza perspektywa/doświadczenie - 150-200 słów]',
          ],
          subsections: [
            {
              title: '[PODSEKCJA 1.1]',
              content: [
                '[TREŚĆ PODSEKCJI - 200-300 słów]',
              ],
            },
            {
              title: '[PODSEKCJA 1.2]',
              content: [
                '[TREŚĆ PODSEKCJI - 200-300 słów]',
              ],
            },
          ],
          table: {
            headers: ['[KOLUMNA 1]', '[KOLUMNA 2]', '[KOLUMNA 3]', '[KOLUMNA 4]'],
            rows: [
              ['[WIERSZ 1 - DANE]', '[DANE]', '[DANE]', '[DANE]'],
              ['[WIERSZ 2 - DANE]', '[DANE]', '[DANE]', '[DANE]'],
              ['[WIERSZ 3 - DANE]', '[DANE]', '[DANE]', '[DANE]'],
            ],
          },
        },
        {
          title: '[SEKCJA 2: TYTUŁ]',
          content: [
            '[AKAPIT 1: 150-200 słów]',
            '[AKAPIT 2: 150-200 słów]',
            '[AKAPIT 3: 150-200 słów]',
          ],
        },
        {
          title: '[SEKCJA 3: TYTUŁ]',
          content: [
            '[AKAPIT 1: 150-200 słów]',
            '[AKAPIT 2: 150-200 słów]',
            '[AKAPIT 3: 150-200 słów]',
          ],
        },
        {
          title: '[SEKCJA 4: TYTUŁ]',
          content: [
            '[AKAPIT 1: 150-200 słów]',
            '[AKAPIT 2: 150-200 słów]',
            '[AKAPIT 3: 150-200 słów]',
          ],
        },
        {
          title: '[SEKCJA 5: TYTUŁ]',
          content: [
            '[AKAPIT 1: 150-200 słów]',
            '[AKAPIT 2: 150-200 słów]',
            '[AKAPIT 3: 150-200 słów]',
          ],
        },
      ],
      
      faq: [
        {
          question: '[PYTANIE 1]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 2]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 3]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 4]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 5]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 6]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 7]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 8]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 9]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
        {
          question: '[PYTANIE 10]',
          answer: '[ODPOWIEDŹ 100-150 SŁÓW]',
        },
      ],
      
      conclusion: {
        summary: [
          '[AKAPIT 1: Podsumowanie kluczowych punktów - 100-150 słów]',
          '[AKAPIT 2: Nasze doświadczenie i rekomendacje - 100-150 słów]',
          '[AKAPIT 3: Zachęta do działania - 100-150 słów]',
        ],
        cta: 'Potrzebujesz profesjonalnej porady? Skontaktuj się z nami już dziś!',
      },
      
      seo: {
        title: '[TYTUŁ SEO - MAX 60 ZNAKÓW]',
        description: '[OPIS META - MAX 160 ZNAKÓW]',
        keywords: ['klimatyzacja', 'pompy ciepła', 'wentylacja', 'Wielkopolska', 'Szamotuły', 'warm&cold'],
      },
    },
    en: {
      id: 1,
      title: '[ARTICLE TITLE - MAX 60 CHARS]',
      subtitle: '[SUBTITLE - 1-2 SENTENCES DESCRIBING THE TOPIC]',
      author: 'warm&cold Team',
      date: '[PUBLICATION DATE]',
      readTime: '[X] min read',
      category: '[CATEGORY: Air Conditioning / Heat Pumps / Ventilation / Guides]',
      
      introduction: {
        hook: '[STRONG INTRO - 2-3 ATTENTION-GRABBING SENTENCES]',
        context: [
          '[PARAGRAPH 1: Problem context - why this topic matters]',
          '[PARAGRAPH 2: Our perspective - "We at warm&cold from Szamotuły at ul. Braci Czeskich 14 have been dealing with... for 6 years"]',
          '[PARAGRAPH 3: Article scope - what the reader will find in this guide]',
        ],
        thesis: '[MAIN ARTICLE THESIS - 1-2 SENTENCES]',
      },
      
      sections: [
        {
          title: '[SECTION 1: TITLE]',
          content: [
            '[PARAGRAPH 1: Section topic introduction - 150-200 words]',
            '[PARAGRAPH 2: Development with examples - 150-200 words]',
            '[PARAGRAPH 3: Our perspective/experience - 150-200 words]',
          ],
        },
        {
          title: '[SECTION 2: TITLE]',
          content: [
            '[PARAGRAPH 1: 150-200 words]',
            '[PARAGRAPH 2: 150-200 words]',
            '[PARAGRAPH 3: 150-200 words]',
          ],
        },
        {
          title: '[SECTION 3: TITLE]',
          content: [
            '[PARAGRAPH 1: 150-200 words]',
            '[PARAGRAPH 2: 150-200 words]',
            '[PARAGRAPH 3: 150-200 words]',
          ],
        },
        {
          title: '[SECTION 4: TITLE]',
          content: [
            '[PARAGRAPH 1: 150-200 words]',
            '[PARAGRAPH 2: 150-200 words]',
            '[PARAGRAPH 3: 150-200 words]',
          ],
        },
        {
          title: '[SECTION 5: TITLE]',
          content: [
            '[PARAGRAPH 1: 150-200 words]',
            '[PARAGRAPH 2: 150-200 words]',
            '[PARAGRAPH 3: 150-200 words]',
          ],
        },
      ],
      
      faq: [
        {
          question: '[QUESTION 1]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 2]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 3]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 4]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 5]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 6]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 7]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 8]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 9]',
          answer: '[ANSWER 100-150 WORDS]',
        },
        {
          question: '[QUESTION 10]',
          answer: '[ANSWER 100-150 WORDS]',
        },
      ],
      
      conclusion: {
        summary: [
          '[PARAGRAPH 1: Summary of key points - 100-150 words]',
          '[PARAGRAPH 2: Our experience and recommendations - 100-150 words]',
          '[PARAGRAPH 3: Call to action - 100-150 words]',
        ],
        cta: 'Need professional advice? Contact us today!',
      },
      
      seo: {
        title: '[SEO TITLE - MAX 60 CHARS]',
        description: '[META DESCRIPTION - MAX 160 CHARS]',
        keywords: ['air conditioning', 'heat pumps', 'ventilation', 'Wielkopolska', 'Szamotuły', 'warm&cold'],
      },
    },
    uk: {
      id: 1,
      title: '[НАЗВА СТАТТІ - МАКС 60 СИМВОЛІВ]',
      subtitle: '[ПІДЗАГОЛОВОК - 1-2 РЕЧЕННЯ, ЩО ОПИСУЮТЬ ТЕМУ]',
      author: 'Команда warm&cold',
      date: '[ДАТА ПУБЛІКАЦІЇ]',
      readTime: '[X] хв читання',
      category: '[КАТЕГОРІЯ: Кондиціонування / Теплові насоси / Вентиляція / Посібники]',
      
      introduction: {
        hook: '[СИЛЬНИЙ ВСТУП - 2-3 РЕЧЕННЯ, ЩО ПРИВЕРТАЮТЬ УВАГУ]',
        context: [
          '[ПАРАГРАФ 1: Контекст проблеми - чому ця тема важлива]',
          '[ПАРАГРАФ 2: Наша перспектива - "Ми з warm&cold із Szamotuły на вул. Braci Czeskich 14 вже 6 років займаємося..."]',
          '[ПАРАГРАФ 3: Обсяг статті - що знайде читач у цьому посібнику]',
        ],
        thesis: '[ГОЛОВНА ТЕЗА СТАТТІ - 1-2 РЕЧЕННЯ]',
      },
      
      sections: [
        {
          title: '[РОЗДІЛ 1: НАЗВА]',
          content: [
            '[ПАРАГРАФ 1: Вступ до теми розділу - 150-200 слів]',
            '[ПАРАГРАФ 2: Розвиток з прикладами - 150-200 слів]',
            '[ПАРАГРАФ 3: Наша перспектива/досвід - 150-200 слів]',
          ],
        },
        {
          title: '[РОЗДІЛ 2: НАЗВА]',
          content: [
            '[ПАРАГРАФ 1: 150-200 слів]',
            '[ПАРАГРАФ 2: 150-200 слів]',
            '[ПАРАГРАФ 3: 150-200 слів]',
          ],
        },
        {
          title: '[РОЗДІЛ 3: НАЗВА]',
          content: [
            '[ПАРАГРАФ 1: 150-200 слів]',
            '[ПАРАГРАФ 2: 150-200 слів]',
            '[ПАРАГРАФ 3: 150-200 слів]',
          ],
        },
        {
          title: '[РОЗДІЛ 4: НАЗВА]',
          content: [
            '[ПАРАГРАФ 1: 150-200 слів]',
            '[ПАРАГРАФ 2: 150-200 слів]',
            '[ПАРАГРАФ 3: 150-200 слів]',
          ],
        },
        {
          title: '[РОЗДІЛ 5: НАЗВА]',
          content: [
            '[ПАРАГРАФ 1: 150-200 слів]',
            '[ПАРАГРАФ 2: 150-200 слів]',
            '[ПАРАГРАФ 3: 150-200 слів]',
          ],
        },
      ],
      
      faq: [
        {
          question: '[ПИТАННЯ 1]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 2]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 3]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 4]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 5]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 6]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 7]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 8]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 9]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
        {
          question: '[ПИТАННЯ 10]',
          answer: '[ВІДПОВІДЬ 100-150 СЛІВ]',
        },
      ],
      
      conclusion: {
        summary: [
          '[ПАРАГРАФ 1: Підсумок ключових моментів - 100-150 слів]',
          '[ПАРАГРАФ 2: Наш досвід та рекомендації - 100-150 слів]',
          '[ПАРАГРАФ 3: Заклик до дії - 100-150 слів]',
        ],
        cta: 'Потрібна професійна порада? Зв\'яжіться з нами сьогодні!',
      },
      
      seo: {
        title: '[SEO ЗАГОЛОВОК - МАКС 60 СИМВОЛІВ]',
        description: '[МЕТА ОПИС - МАКС 160 СИМВОЛІВ]',
        keywords: ['кондиціонування', 'теплові насоси', 'вентиляція', 'Wielkopolska', 'Szamotuły', 'warm&cold'],
      },
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const data = article[lang];

  // JSON-LD Schema for Article + FAQPage + LocalBusiness
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.subtitle,
    "author": {
      "@type": "Organization",
      "name": "warm&cold",
      "url": "https://warmandcold.pl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Braci Czeskich 14",
        "addressLocality": "Szamotuły",
        "postalCode": "64-500",
        "addressCountry": "PL"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "warm&cold",
      "logo": {
        "@type": "ImageObject",
        "url": "https://warmandcold.pl/logo-navy.svg"
      }
    },
    "datePublished": data.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://warmandcold.pl/${lang}/articles/${data.id}`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "warm&cold",
    "image": "https://warmandcold.pl/logo-navy.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Braci Czeskich 14",
      "addressLocality": "Szamotuły",
      "postalCode": "64-500",
      "addressCountry": "PL"
    },
    "telephone": "+48881515595",
    "email": "info@warmandcold.pl",
    "url": "https://warmandcold.pl",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>{data.seo.title} | warm&cold</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        {/* Article Header */}
        <section className="navy-section section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto fade-in-up">
              <div className="flex flex-wrap gap-4 mb-6 text-gray-300 text-sm">
                <span>{data.category}</span>
                <span>•</span>
                <span>{data.date}</span>
                <span>•</span>
                <span>{data.readTime}</span>
              </div>
              <h1 className="text-white mb-6">{data.title}</h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">{data.subtitle}</p>
              <div className="flex items-center gap-4 text-gray-300">
                <Award className="h-5 w-5" />
                <span>{data.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container">
            <article className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl font-semibold text-premium-navy leading-relaxed mb-6">
                {data.introduction.hook}
              </p>
              {data.introduction.context.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg font-medium text-premium-navy leading-relaxed mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#25344c]">
                {data.introduction.thesis}
              </p>
            </article>
          </div>
        </section>

        {/* Main Content Sections */}
        {data.sections.map((section, sectionIdx) => (
          <section 
            key={sectionIdx} 
            className={`section-padding ${sectionIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container">
              <article className="max-w-4xl mx-auto">
                <h2 className="text-premium-navy mb-8">{section.title}</h2>
                
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-lg text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}

                {section.subsections && section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="mt-10">
                    <h3 className="text-2xl font-semibold text-premium-navy mb-6">
                      {subsection.title}
                    </h3>
                    {subsection.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-lg text-gray-700 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                {section.table && (
                  <div className="premium-card mt-10 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          {section.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="text-left py-4 px-4 font-semibold">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-gray-100">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-4 px-4">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            </div>
          </section>
        ))}

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-premium-navy mb-12 text-center">Najczęściej zadawane pytania</h2>
              <div className="space-y-6">
                {data.faq.map((item, idx) => (
                  <Card key={idx} className="premium-card border-0">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-premium-navy mb-4 flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                        {item.question}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed pl-9">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <article className="max-w-4xl mx-auto">
              <h2 className="text-premium-navy mb-8">Podsumowanie</h2>
              {data.conclusion.summary.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="navy-section section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white mb-6">{data.conclusion.cta}</h2>
              <p className="text-xl text-gray-300 mb-10">
                Zespół warm&cold z Szamotuł przy ul. Braci Czeskich 14 jest do Twojej dyspozycji
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <a 
                  href="tel:881515595"
                  className="inline-flex items-center gap-3 text-white text-xl hover:text-gray-200 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-7 w-7" />
                  </div>
                  <span className="font-semibold">881 515 595</span>
                </a>
                
                <a 
                  href="mailto:info@warmandcold.pl"
                  className="inline-flex items-center gap-3 text-white text-xl hover:text-gray-200 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="h-7 w-7" />
                  </div>
                  <span className="font-semibold">info@warmandcold.pl</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-300 mb-10">
                <MapPin className="h-5 w-5" />
                <span>ul. Braci Czeskich 14, 64-500 Szamotuły</span>
              </div>
              
              <Button 
                size="lg" 
                className="premium-button bg-white text-[#25344c] hover:bg-gray-100 text-xl px-14 py-8"
                onClick={() => window.location.href = `/${lang}/kontakt`}
              >
                Bezpłatna wycena
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Streamdown } from 'streamdown';
import caseStudyData from '../../data/case-studies/case-study-17.json';

export default function CaseStudy17() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{caseStudyData.title} | warm&cold</title>
        <meta name="description" content={caseStudyData.metaDescription} />
        <meta property="og:title" content={caseStudyData.title} />
        <meta property="og:description" content={caseStudyData.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": caseStudyData.title,
            "description": caseStudyData.metaDescription,
            "datePublished": caseStudyData.date,
            "author": {
              "@type": "Organization",
              "name": "warm&cold"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article className="prose prose-lg max-w-none">
            <Streamdown>{caseStudyData.content}</Streamdown>
          </article>

          <div className="mt-12 p-6 bg-[#25344c] text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Potrzebujesz podobnego rozwiązania?</h3>
            <p className="mb-4">
              Skontaktuj się z nami, aby uzyskać bezpłatną wycenę i doradztwo techniczne.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-white text-[#25344c] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

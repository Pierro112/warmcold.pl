import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function ArticlesIndex() {
  const articles = [
    {
      id: 1,
      title: "Pompy Ciepła z Dotacją - Szamotuły, Pniewy, Obrzycko - Przewodnik 2025",
      slug: "pompy-ciepla-dotacja-szamotuly-pniewy-obrzycko-przewodnik-2025",
      excerpt: "Kompletny przewodnik po pompach ciepła w Wielkopolsce. Koszty, dotacje, ROI i porównanie marek (LG, Bosch, Daikin, Mitsubishi).",
      category: "Pompy Ciepła",
      readTime: "45 min"
    },
    {
      id: 2,
      title: "Klimatyzacja - Montaż w Poznaniu i Powiecie - Ceny, Poradnik 2026",
      slug: "klimatyzacja-montaz-poznan-powiat-ceny-poradnik-2026",
      excerpt: "Wszystko o klimatyzacji w Poznaniu i okolicach. Ceny, montaż, serwis i porównanie systemów.",
      category: "Klimatyzacja",
      readTime: "50 min"
    },
    {
      id: 3,
      title: "Rekuperacja w Wielkopolsce - Koszt, Dotacje - Przewodnik 2025",
      slug: "rekuperacja-wielkopolska-koszt-dotacje-przewodnik-2025",
      excerpt: "Wentylacja mechaniczna z rekuperacją - kompletny przewodnik dla Wielkopolski.",
      category: "Wentylacja",
      readTime: "40 min"
    },
    {
      id: 4,
      title: "Wentylacja Mechaniczna z Rekuperacją - Kompletny Przewodnik 2025",
      slug: "wentylacja-mechaniczna-rekuperacja-wielkopolska-przewodnik-2025",
      excerpt: "Szczegółowy przewodnik po systemach rekuperacji. Koszty, ROI, dofinansowania Czyste Powietrze.",
      category: "Wentylacja",
      readTime: "55 min"
    },
    {
      id: 5,
      title: "Klimatyzacja dla Firm i Biur w Szamotułach - Jak Wybrać?",
      slug: "klimatyzacja-dla-firm-biur-szamotuly-jak-wybrac",
      excerpt: "Przewodnik po klimatyzacji dla firm. Split, Multi-Split, VRF - porównanie kosztów i ROI.",
      category: "Klimatyzacja",
      readTime: "48 min"
    },
    {
      id: 6,
      title: "Pompy Ciepła vs Kotły Gazowe - Porównanie Kosztów Wielkopolska",
      slug: "pompy-ciepla-vs-kotly-gazowe-porownanie-kosztow-wielkopolska",
      excerpt: "Szczegółowa analiza kosztów: pompa ciepła czy kocioł gazowy? Koszty inwestycji, eksploatacji i ROI.",
      category: "Pompy Ciepła",
      readTime: "42 min"
    },
    {
      id: 7,
      title: "Serwis i Konserwacja Klimatyzacji w Szamotułach",
      slug: "serwis-konserwacja-klimatyzacji-szamotuly",
      excerpt: "Wszystko o serwisie klimatyzacji. Koszty, harmonogram, co obejmuje przegląd i jak przedłużyć żywotność.",
      category: "Klimatyzacja",
      readTime: "38 min"
    },
    {
      id: 8,
      title: "Ogrzewanie Podłogowe z Pompą Ciepła - Przewodnik Pniewy",
      slug: "ogrzewanie-podlogowe-pompa-ciepla-przewodnik-pniewy",
      excerpt: "Kompleksowy przewodnik po ogrzewaniu podłogowym z pompą ciepła. Koszty, montaż, dofinansowanie.",
      category: "Pompy Ciepła",
      readTime: "52 min"
    },
    {
      id: 9,
      title: "Klimatyzacja Multi-Split vs Mono-Split - Dom 150m²",
      slug: "klimatyzacja-multi-split-vs-mono-split-dom-150m2",
      excerpt: "Porównanie systemów multi-split i mono-split. Koszty, zalety, wady i kiedy wybrać który system.",
      category: "Klimatyzacja",
      readTime: "35 min"
    },
    {
      id: 10,
      title: "Dotacje na Pompy Ciepła 2025 - Maksymalne Dofinansowanie Wielkopolska",
      slug: "dotacje-pompy-ciepla-2025-maksymalne-dofinansowanie-wielkopolska",
      excerpt: "Jak uzyskać maksymalne dofinansowanie na pompę ciepła? Programy Czyste Powietrze, Mój Prąd i inne.",
      category: "Pompy Ciepła",
      readTime: "45 min"
    },
    {
      id: 11,
      title: "Chłodzenie Pasywne i Aktywne - Nowoczesne Rozwiązania Obrzycko",
      slug: "chlodzenie-pasywne-aktywne-nowoczesne-rozwiazania-obrzycko",
      excerpt: "Porównanie systemów chłodzenia pasywnego i aktywnego. Koszty, efektywność i zastosowania.",
      category: "Klimatyzacja",
      readTime: "40 min"
    },
    {
      id: 12,
      title: "Pompy Ciepła Powietrze-Woda vs Grunt-Woda - Analiza Wielkopolska",
      slug: "pompy-ciepla-powietrze-woda-vs-grunt-woda-analiza-wielkopolska",
      excerpt: "Kompleksowa analiza PC-P vs PC-G. Efektywność, koszty inwestycji, ROI i warunki Wielkopolski.",
      category: "Pompy Ciepła",
      readTime: "58 min"
    }
  ];

  const categories = ["Wszystkie", "Pompy Ciepła", "Klimatyzacja", "Wentylacja"];

  return (
    <>
      <Helmet>
        <title>Artykuły HVAC - Blog Ekspercki | warm&cold Szamotuły</title>
        <meta name="description" content="Eksperckie artykuły o klimatyzacji, pompach ciepła i wentylacji w Wielkopolsce. Przewodniki, porównania, koszty i dofinansowania." />
        <meta name="keywords" content="artykuły HVAC, pompy ciepła przewodnik, klimatyzacja poradnik, rekuperacja Wielkopolska, dotacje Czyste Powietrze" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Artykuły Eksperckie
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Kompleksowe przewodniki po HVAC w Wielkopolsce. Napisane przez ekspertów z warm&cold z Szamotuł, oparte na 6-letnim doświadczeniu i 1000+ instalacji.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border hover:bg-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/artykuly/${article.slug}`}>
                  <a className="block h-full">
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                          {article.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-grow line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 text-primary font-medium text-sm">
                        Czytaj artykuł →
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

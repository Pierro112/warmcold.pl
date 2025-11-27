import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function CaseStudiesIndex() {
  const caseStudies = [
    {
      id: 1,
      title: "Klimatyzacja Samsung Wind-Free Elite - Dom 85m² Poznań",
      slug: "klimatyzacja-samsung-wind-free-elite-poznan-oszczednosc-60-procent",
      excerpt: "Jak instalacja Samsung Wind-Free Elite 3.5kW obniżyła rachunki o 60% w domu jednorodzinnym",
      savings: "60%",
      location: "Poznań"
    },
    {
      id: 2,
      title: "Pompa Ciepła LG Therma V 16kW - Dom Pasywny Pniewy",
      slug: "pompa-ciepla-lg-therma-v-16kw-dom-pasywny-pniewy-oszczednosc-85-procent",
      excerpt: "Dom pasywny 220m² z pompą ciepła LG - oszczędność 85% kosztów ogrzewania",
      savings: "85%",
      location: "Pniewy"
    },
    {
      id: 3,
      title: "Klimatyzacja Daikin Perfera Multi-Split - Biuro Szamotuły",
      slug: "klimatyzacja-daikin-perfera-multi-split-biuro-szamotuly-roi-18-miesiecy",
      excerpt: "System multi-split Daikin w biurze 150m² - ROI w 18 miesięcy",
      savings: "55%",
      location: "Szamotuły"
    },
    {
      id: 4,
      title: "Pompa Ciepła Mitsubishi Ecodan 11kW - Obrzycko",
      slug: "pompa-ciepla-mitsubishi-ecodan-11kw-obrzycko-modernizacja-domu-150m2",
      excerpt: "Modernizacja domu 150m² - wymiana kotła gazowego na pompę ciepła",
      savings: "70%",
      location: "Obrzycko"
    },
    {
      id: 5,
      title: "Wentylacja Mechaniczna Zehnder - Dom 180m² Wronki",
      slug: "wentylacja-mechaniczna-zehnder-dom-180m2-wronki-rekuperacja-92-procent",
      excerpt: "System rekuperacji Zehnder z odzyskiem ciepła 92%",
      savings: "92%",
      location: "Wronki"
    },
    {
      id: 6,
      title: "Pompa Ciepła Bosch Grunt-Woda 11kW - Dom Pasywny Pniewy",
      slug: "pompa-ciepla-bosch-grunt-woda-11kw-dom-pasywny-pniewy",
      excerpt: "Geotermalna pompa ciepła Bosch w domu pasywnym",
      savings: "80%",
      location: "Pniewy"
    },
    {
      id: 7,
      title: "Klimatyzacja Rotenso Versu - Restauracja Szamotuły",
      slug: "klimatyzacja-rotenso-versu-restauracja-szamotuly-wzrost-rezerwacji",
      excerpt: "Klimatyzacja w restauracji zwiększyła rezerwacje o 40%",
      savings: "40%",
      location: "Szamotuły"
    },
    {
      id: 8,
      title: "Pompa Ciepła Haier 12kW - Agroturystyka Wronki",
      slug: "pompa-ciepla-haier-12kw-agroturystyka-wronki-oszczednosc-77-procent",
      excerpt: "Pompa ciepła Haier w gospodarstwie agroturystycznym",
      savings: "77%",
      location: "Wronki"
    },
    {
      id: 9,
      title: "Wentylacja i Klimatyzacja VRV Daikin - Biurowiec Poznań Jeżyce",
      slug: "wentylacja-mechaniczna-klimatyzacja-vrv-daikin-biurowiec-poznan-jezyce",
      excerpt: "System VRV Daikin w 5-piętrowym biurowcu",
      savings: "50%",
      location: "Poznań"
    },
    {
      id: 10,
      title: "Klimatyzacja Toshiba Haori - Apartament Poznań Sołacz",
      slug: "klimatyzacja-toshiba-haori-apartament-poznan-solacz",
      excerpt: "Designerska klimatyzacja Toshiba Haori w luksusowym apartamencie",
      savings: "52%",
      location: "Poznań"
    },
    {
      id: 11,
      title: "Klimatyzacja Mitsubishi Electric - Biuro 120m² Poznań",
      slug: "klimatyzacja-mitsubishi-biuro-poznan",
      excerpt: "System klimatyzacji Mitsubishi Electric w biurze IT",
      savings: "45%",
      location: "Poznań"
    },
    {
      id: 12,
      title: "Pompa Ciepła LG Therma V 12kW - Dom 180m² Szamotuły",
      slug: "pompa-ciepla-lg-therma-v-szamotuly",
      excerpt: "Instalacja pompy ciepła LG w domu jednorodzinnym",
      savings: "70%",
      location: "Szamotuły"
    },
    {
      id: 13,
      title: "Klimatyzacja Daikin Perfera - Apartament 95m² Szamotuły",
      slug: "daikin-perfera-klimatyzacja-95m2-szamotuly-55-oszczednosci",
      excerpt: "Daikin Perfera w apartamencie - oszczędność 55%",
      savings: "55%",
      location: "Szamotuły"
    },
    {
      id: 14,
      title: "Pompa Ciepła Bosch Compress 7000i - Dom 150m² Pniewy",
      slug: "pompa-ciepla-bosch-compress-7000i-pniewy",
      excerpt: "Bosch Compress 7000i z inteligentnym sterowaniem",
      savings: "65%",
      location: "Pniewy"
    },
    {
      id: 15,
      title: "Klimatyzacja Panasonic Etherea Multi-Split - Obrzycko",
      slug: "klimatyzacja-panasonic-etherea-multi-split-obrzycko",
      excerpt: "System multi-split Panasonic Etherea w domu 140m²",
      savings: "50%",
      location: "Obrzycko"
    },
    {
      id: 16,
      title: "Pompa Ciepła Vaillant aroTherm Plus - Wronki",
      slug: "pompa-ciepla-vaillant-arotherm-plus-wronki",
      excerpt: "Vaillant aroTherm Plus z fotowoltaiką",
      savings: "68%",
      location: "Wronki"
    },
    {
      id: 17,
      title: "Klimatyzacja Haier Flexis - Restauracja Szamotuły",
      slug: "klimatyzacja-haier-flexis-restauracja-szamotuly",
      excerpt: "Haier Flexis w restauracji - komfort gości",
      savings: "42%",
      location: "Szamotuły"
    },
    {
      id: 18,
      title: "Pompa Ciepła Samsung EHS Mono - Pniewy",
      slug: "pompa-ciepla-samsung-ehs-mono-pniewy",
      excerpt: "Samsung EHS Mono w domu energooszczędnym",
      savings: "72%",
      location: "Pniewy"
    },
    {
      id: 19,
      title: "Wentylacja Zehnder - Dom Pasywny Obrzycko",
      slug: "wentylacja-zehnder-dom-pasywny-obrzycko",
      excerpt: "Rekuperacja Zehnder w domu pasywnym",
      savings: "80%",
      location: "Obrzycko"
    },
    {
      id: 20,
      title: "Klimatyzacja Toshiba Haori - Salon Fryzjerski Szamotuły",
      slug: "klimatyzacja-toshiba-haori-salon-fryzjerski-szamotuly",
      excerpt: "Designerska klimatyzacja w salonie fryzjerskim",
      savings: "48%",
      location: "Szamotuły"
    },
    {
      id: 21,
      title: "Pompa Ciepła Mitsubishi Ecodan - Wronki",
      slug: "pompa-ciepla-mitsubishi-ecodan-wronki",
      excerpt: "Mitsubishi Ecodan z ogrzewaniem podłogowym",
      savings: "69%",
      location: "Wronki"
    },
    {
      id: 22,
      title: "Klimatyzacja Fujitsu Nocria X - Biuro Prawnicze Poznań",
      slug: "klimatyzacja-fujitsu-nocria-x-biuro-prawnicze-poznan",
      excerpt: "Fujitsu Nocria X w biurze prawniczym",
      savings: "52%",
      location: "Poznań"
    },
    {
      id: 23,
      title: "Wentylacja Brink - Rekuperacja Pniewy",
      slug: "wentylacja-brink-rekuperacja-pniewy",
      excerpt: "System rekuperacji Brink w domu 160m²",
      savings: "75%",
      location: "Pniewy"
    },
    {
      id: 24,
      title: "Klimatyzacja Gree Amber - Sklep Odzieżowy Szamotuły",
      slug: "klimatyzacja-gree-amber-sklep-szamotuly",
      excerpt: "Gree Amber w sklepie odzieżowym",
      savings: "46%",
      location: "Szamotuły"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Realizacje - Case Studies | warm&cold Szamotuły</title>
        <meta name="description" content="Zobacz nasze realizacje instalacji klimatyzacji, pomp ciepła i wentylacji w Wielkopolsce. 24 case studies z konkretnymi oszczędnościami i ROI." />
        <meta name="keywords" content="realizacje HVAC Wielkopolska, case studies klimatyzacja, pompy ciepła Szamotuły, instalacje Poznań" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Nasze Realizacje
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Ponad 1000 zadowolonych klientów w Wielkopolsce. Zobacz konkretne przykłady naszych instalacji z realnymi oszczędnościami i ROI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/realizacje/${study.slug}`}>
                  <a className="block h-full">
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-muted-foreground">{study.location}</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          -{study.savings}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-grow line-clamp-3">
                        {study.excerpt}
                      </p>
                      <div className="mt-4 text-primary font-medium text-sm">
                        Czytaj więcej →
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

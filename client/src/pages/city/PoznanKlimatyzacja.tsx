import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleMapsRoute from '@/components/GoogleMapsRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Snowflake,
  Zap,
  Shield,
  Award,
  TrendingDown,
  Star,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import { Link } from 'wouter';

const CITY_DATA = {
  name: 'Poznań',
  slug: 'poznan',
  population: 532048,
  lat: 52.4064,
  lng: 16.9252,
  distanceFromSzamotuly: 35,
  county: 'Poznań (miasto na prawach powiatu)',
  climate: 'klimat umiarkowany przejściowy, średnia temp. roczna 8.5°C',
};

export default function PoznanKlimatyzacja() {
  const pageTitle = `Klimatyzacja z montażem ${CITY_DATA.name} – warm&cold | Cena 2026`;
  const metaDescription = `⭐ Profesjonalny montaż klimatyzacji ${CITY_DATA.name} i okolice | Dojazd ${CITY_DATA.distanceFromSzamotuly} km z Szamotuł | Ceny od 3500 zł | Gwarancja 7 lat | Samsung, LG, Mitsubishi | warm&cold ul. Braci Czeskich 14 | ☎️ 881 515 595`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `warm&cold - Klimatyzacja ${CITY_DATA.name}`,
    image: 'https://warmandcold.pl/logo-navy.svg',
    '@id': `https://warmandcold.pl/${CITY_DATA.slug}/klimatyzacja`,
    url: `https://warmandcold.pl/${CITY_DATA.slug}/klimatyzacja`,
    telephone: '+48881515595',
    email: 'info@warmandcold.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Braci Czeskich 14',
      addressLocality: 'Szamotuły',
      postalCode: '64-500',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.6122,
      longitude: 16.5778,
    },
    areaServed: {
      '@type': 'City',
      name: CITY_DATA.name,
      '@id': `https://www.wikidata.org/wiki/Q268`,
    },
    priceRange: '3500 zł - 12000 zł',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`klimatyzacja ${CITY_DATA.name}, montaż klimatyzacji ${CITY_DATA.name}, klimatyzacja z montażem ${CITY_DATA.name}, klimatyzacja cena ${CITY_DATA.name}, klimatyzator ${CITY_DATA.name}, serwis klimatyzacji ${CITY_DATA.name}, instalacja klimatyzacji ${CITY_DATA.name}, klimatyzacja Samsung ${CITY_DATA.name}, klimatyzacja LG ${CITY_DATA.name}, klimatyzacja Mitsubishi ${CITY_DATA.name}, warm&cold ${CITY_DATA.name}, Szamotuły`} />
        <link rel="canonical" href={`https://warmandcold.pl/${CITY_DATA.slug}/klimatyzacja`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://warmandcold.pl/${CITY_DATA.slug}/klimatyzacja`} />
        <meta property="og:image" content="https://warmandcold.pl/logo-navy.svg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container py-4">
            <Breadcrumbs
              items={[
                { label: CITY_DATA.name, href: `/${CITY_DATA.slug}` },
                { label: 'Klimatyzacja' },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#25344c] via-[#1f2d42] to-[#1a2538] text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                <MapPin className="h-5 w-5" />
                <span>{CITY_DATA.name} • {CITY_DATA.distanceFromSzamotuly} km od Szamotuł</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Profesjonalny montaż klimatyzacji {CITY_DATA.name} i okolice
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Kompleksowa instalacja klimatyzacji od 3500 zł • Gwarancja 7 lat •
                Dojazd i wycena GRATIS z Szamotuł
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#25344c] hover:bg-gray-100 text-lg px-8 py-6"
                  onClick={() => (window.location.href = '/pl/kontakt')}
                >
                  Bezpłatna wycena
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  onClick={() => (window.location.href = 'tel:881515595')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  881 515 595
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Award, text: 'Certyfikat F-gases' },
                { icon: Shield, text: 'Gwarancja 7 lat' },
                { icon: Star, text: '1000+ instalacji' },
                { icon: BadgeCheck, text: 'Autoryzowany dystrybutor Bosch' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-[#25344c]/10 flex items-center justify-center mb-3">
                      <Icon className="h-7 w-7 text-[#25344c]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Content Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* Why Us */}
                <div>
                  <h2 className="text-3xl font-bold text-[#25344c] mb-6">
                    Dlaczego warto wybrać warm&cold dla {CITY_DATA.name}?
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Obsługujemy mieszkańców <strong>{CITY_DATA.name}</strong> i okolic od ponad 6 lat.
                      Nasza siedziba znajduje się zaledwie <strong>{CITY_DATA.distanceFromSzamotuly} km</strong> od
                      centrum {CITY_DATA.name} przy ul. Braci Czeskich 14 w Szamotułach, co oznacza, że możemy
                      dotrzeć do Ciebie w mniej niż godzinę.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Instalowaliśmy klimatyzację w dziesiątkach domów i mieszkań w {CITY_DATA.name} –
                      od apartamentów na Grunwaldzie i Wildzie, przez domy jednorodzinne na Jeżycach,
                      aż po biura i lokale usługowe w centrum miasta. Znamy specyfikę lokalnej zabudowy
                      i wiemy, jak dobrać optymalne rozwiązanie.
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Snowflake,
                      title: 'Chłodzenie i grzanie',
                      desc: 'Nowoczesne klimatyzatory pracują całorocznie – chłodzą latem, grzeją zimą',
                    },
                    {
                      icon: Zap,
                      title: 'Klasa A+++',
                      desc: 'Niskie zużycie energii – oszczędzasz do 75% kosztów w porównaniu z ogrzewaniem elektrycznym',
                    },
                    {
                      icon: TrendingDown,
                      title: 'Ceny od 3500 zł',
                      desc: 'Kompleksowa instalacja klimatyzacji split 2,5-3,5 kW z montażem i uruchomieniem',
                    },
                    {
                      icon: Shield,
                      title: 'Gwarancja 7 lat',
                      desc: 'Najdłuższa gwarancja na rynku obejmująca urządzenie i instalację',
                    },
                  ].map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={idx} className="border-0 shadow-md">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 rounded-lg bg-[#25344c]/10 flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-[#25344c]" />
                          </div>
                          <h3 className="text-lg font-semibold text-[#25344c] mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Pricing */}
                <div>
                  <h2 className="text-3xl font-bold text-[#25344c] mb-6">
                    Cennik montażu klimatyzacji {CITY_DATA.name} 2026
                  </h2>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          { name: 'Klimatyzacja split 2,5 kW', price: '3500 - 4500 zł', info: 'dla pomieszczeń do 25 m²' },
                          { name: 'Klimatyzacja split 3,5 kW', price: '4000 - 5500 zł', info: 'dla pomieszczeń do 35 m²' },
                          { name: 'Klimatyzacja split 5,0 kW', price: '5500 - 7500 zł', info: 'dla pomieszczeń do 50 m²' },
                          { name: 'Multi-split 2+1 (2x2,5 kW + 3,5 kW)', price: '9500 - 12000 zł', info: '3 jednostki wewnętrzne' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-semibold text-[#25344c]">{item.name}</p>
                              <p className="text-sm text-gray-600">{item.info}</p>
                            </div>
                            <p className="text-lg font-bold text-[#25344c]">{item.price}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        * Ceny zawierają urządzenie, montaż standardowy (do 5 m tras), uruchomienie i gwarancję.
                        Możliwość raty 0% na 10-20 miesięcy.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Brands */}
                <div>
                  <h2 className="text-3xl font-bold text-[#25344c] mb-6">Marki klimatyzacji</h2>
                  <p className="text-gray-700 mb-6">
                    Instalujemy klimatyzatory premium: <strong>Samsung, LG, Mitsubishi Electric, Daikin,
                    Toshiba, Rotenso, Haier, Sinclair</strong>. Wszystkie urządzenia klasy energetycznej A+++.
                  </p>
                  <Link href="/pl/partners">
                    <Button variant="outline" className="border-[#25344c] text-[#25344c]">
                      Zobacz porównanie marek
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Card */}
                <Card className="border-0 shadow-lg sticky top-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#25344c] mb-4">Zamów wycenę</h3>
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-[#25344c] hover:bg-[#2d3f5a] text-white"
                        size="lg"
                        onClick={() => (window.location.href = '/pl/kontakt')}
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Formularz kontaktowy
                      </Button>
                      <Button
                        className="w-full"
                        variant="outline"
                        size="lg"
                        onClick={() => (window.location.href = 'tel:881515595')}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        881 515 595
                      </Button>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                      <p>📍 ul. Braci Czeskich 14, Szamotuły</p>
                      <p>📧 info@warmandcold.pl</p>
                      <p>⏰ Pn-Pt 8:00-18:00, Sob 9:00-14:00</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits List */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#25344c] mb-4">Co otrzymujesz?</h3>
                    <ul className="space-y-3">
                      {[
                        'Bezpłatny dojazd i wycenę',
                        'Doradztwo i dobór urządzenia',
                        'Gwarancja 7 lat na całość',
                        'Serwis 24/7 przez cały okres',
                        'Pierwszy przegląd GRATIS',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#25344c] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-[#25344c] mb-8 text-center">
                Dojazd do {CITY_DATA.name} z naszej siedziby
              </h2>
              <GoogleMapsRoute
                cityName={CITY_DATA.name}
                cityLat={CITY_DATA.lat}
                cityLng={CITY_DATA.lng}
                distance={CITY_DATA.distanceFromSzamotuly}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#25344c] to-[#1a2538] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gotowy na montaż klimatyzacji w {CITY_DATA.name}?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się z nami już dziś i uzyskaj bezpłatną wycenę z dojazdem do {CITY_DATA.name}
              </p>
              <Button
                size="lg"
                className="bg-white text-[#25344c] hover:bg-gray-100 text-xl px-12 py-7"
                onClick={() => (window.location.href = '/pl/kontakt')}
              >
                Zamów wycenę za darmo
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

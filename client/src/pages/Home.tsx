import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Snowflake, Flame, Wind, Award, Users, CheckCircle2, Phone, Mail, ArrowRight,
  Shield, Clock, Star, TrendingUp, MapPin, Wrench, ThumbsUp, BadgeCheck
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  const content = {
    pl: {
      hero: {
        title: 'Profesjonalne instalacje klimatyzacji, pomp ciepła i wentylacji w Wielkopolsce',
        subtitle: 'Ponad 6 lat doświadczenia • 1000+ zadowolonych klientów • Certyfikat F-gases • Autoryzowany dystrybutor Bosch',
        location: 'ul. Braci Czeskich 14, 64-500 Szamotuły',
        cta1: 'Bezpłatna wycena',
        cta2: 'Zadzwoń: 881 515 595',
      },
      trust: [
        { icon: Award, text: 'Certyfikat F-gases' },
        { icon: Shield, text: 'Gwarancja do 7 lat' },
        { icon: Star, text: '1000+ instalacji' },
        { icon: BadgeCheck, text: 'Autoryzowany dystrybutor Bosch' },
        { icon: ThumbsUp, text: '100% zadowolonych klientów' },
      ],
      stats: [
        { number: '6+', label: 'lat doświadczenia' },
        { number: '1000+', label: 'instalacji' },
        { number: '8', label: 'marek premium' },
        { number: '100%', label: 'zadowolenie' },
      ],
      services: {
        title: 'Nasze usługi',
        subtitle: 'Kompleksowe rozwiązania HVAC dla Twojego domu i firmy',
        items: [
          {
            icon: Snowflake,
            title: 'Klimatyzacja',
            description: 'Profesjonalna instalacja i serwis systemów klimatyzacji. Dobieramy najlepsze rozwiązania dopasowane do Twoich potrzeb. Gwarancja do 7 lat.',
            features: ['Gwarancja 7 lat', 'Serwis 24/7', 'Bezpłatny dojazd', 'Fachowe doradztwo'],
            link: '/pl/uslugi/klimatyzacja',
          },
          {
            icon: Flame,
            title: 'Pompy ciepła',
            description: 'Ekologiczne i ekonomiczne ogrzewanie. Instalujemy pompy ciepła powietrze-woda i powietrze-powietrze. Oszczędności do 75% kosztów ogrzewania.',
            features: ['Oszczędność 75%', 'Dotacje do 30k PLN', 'Montaż kompleksowy', 'Audyt energetyczny'],
            link: '/pl/uslugi/pompy-ciepla',
          },
          {
            icon: Wind,
            title: 'Wentylacja',
            description: 'Systemy wentylacji mechanicznej z rekuperacją. Zapewniamy świeże powietrze i oszczędność energii. Odzysk ciepła do 95%.',
            features: ['Rekuperacja 95%', 'Filtracja PM2.5', 'Cicha praca', 'Sterowanie WiFi'],
            link: '/pl/uslugi/wentylacja',
          },
        ],
      },
      why: {
        title: 'Dlaczego warm&cold?',
        subtitle: 'Jesteśmy liderem w branży HVAC w Wielkopolsce',
        items: [
          { 
            icon: Award, 
            title: 'Certyfikat F-gases', 
            description: 'Posiadamy wszystkie niezbędne certyfikaty i uprawnienia do pracy z gazami chłodniczymi. Nasi instalatorzy są regularnie szkoleni.' 
          },
          { 
            icon: Users, 
            title: 'Doświadczony zespół', 
            description: 'Zespół 10 specjalistów z wieloletnim doświadczeniem: Kacper Buda, Łukasz Trzeciak oraz instalatorzy Bartosz, Paweł, Mariusz, Krzysztof, Kuba, Waldek, Hubert, Tomek.' 
          },
          { 
            icon: BadgeCheck, 
            title: 'Autoryzowany dystrybutor Bosch', 
            description: 'Oficjalny partner Bosch i innych wiodących marek: Samsung, LG, Mitsubishi, Rotenso, Haier, Daikin, Toshiba, Sinclair.' 
          },
          { 
            icon: Shield, 
            title: 'Gwarancja do 7 lat', 
            description: 'Oferujemy najdłuższą gwarancję na rynku - do 7 lat na urządzenia i instalację. Serwis 24/7 przez cały okres gwarancji.' 
          },
          { 
            icon: TrendingUp, 
            title: '1000+ realizacji', 
            description: 'Ponad 1000 zadowolonych klientów w Wielkopolsce. Realizujemy projekty mieszkaniowe, komercyjne i przemysłowe.' 
          },
          { 
            icon: MapPin, 
            title: 'Lokalnie w Szamotułach', 
            description: 'Siedziba w Szamotułach przy ul. Braci Czeskich 14. Obsługujemy całą Wielkopolskę z dojazdem do 100 km.' 
          },
        ],
      },
      brands: {
        title: 'Marki, z którymi współpracujemy',
        list: ['Samsung', 'LG', 'Mitsubishi', 'Rotenso', 'Haier', 'Daikin', 'Toshiba', 'Sinclair'],
      },
      faq: {
        title: 'Najczęściej zadawane pytania',
        subtitle: 'Odpowiadamy na wszystkie Twoje wątpliwości',
        items: [
          {
            q: 'Ile kosztuje instalacja klimatyzacji?',
            a: 'Koszt instalacji klimatyzacji zależy od wielu czynników: mocy urządzenia, długości tras instalacyjnych, liczby jednostek wewnętrznych, typu montażu. Standardowa instalacja klimatyzacji split 2,5-3,5 kW to koszt od 3500 do 5500 zł brutto (urządzenie + montaż). Oferujemy bezpłatną wycenę z dojazdem do klienta.',
          },
          {
            q: 'Jak długo trwa montaż klimatyzacji?',
            a: 'Standardowy montaż klimatyzacji split (1 jednostka zewnętrzna + 1 wewnętrzna) trwa 4-6 godzin. Montaż systemu multi-split (1 jednostka zewnętrzna + 2-3 wewnętrzne) to 6-8 godzin. Termin montażu ustalamy indywidualnie z klientem.',
          },
          {
            q: 'Czy mogę dostać dotację na pompę ciepła?',
            a: 'Tak! Program Czyste Powietrze oferuje dotacje do 30 000 zł na pompę ciepła. Program Mój Prąd 5.0 - do 7000 zł. Pomagamy w załatwieniu wszystkich formalności, przygotowaniu wniosku i uzyskaniu dotacji. Średni czas oczekiwania na dotację to 3-6 miesięcy.',
          },
          {
            q: 'Jaka jest gwarancja na urządzenia?',
            a: 'Oferujemy gwarancję producenta (2-5 lat w zależności od marki) + rozszerzoną gwarancję warm&cold do 7 lat. Gwarancja obejmuje urządzenie i instalację. Serwis gwarancyjny 24/7, czas reakcji do 24h. Bezpłatne przeglądy serwisowe w okresie gwarancji.',
          },
          {
            q: 'Czy klimatyzacja może grzać zimą?',
            a: 'Tak! Nowoczesne klimatyzatory to urządzenia grzewczo-chłodzące (pompy ciepła powietrze-powietrze). Sprawność grzania do -25°C. 1 kW energii elektrycznej = 3-4 kW ciepła. Oszczędności do 75% w porównaniu z ogrzewaniem elektrycznym. Idealne jako wspomaganie głównego źródła ciepła.',
          },
          {
            q: 'Jak często trzeba serwisować klimatyzację?',
            a: 'Zalecamy przegląd serwisowy raz w roku (najlepiej przed sezonem letnim). Przegląd obejmuje: czyszczenie filtrów, sprawdzenie ciśnienia czynnika, kontrolę połączeń elektrycznych, dezynfekcję jednostki wewnętrznej. Koszt przeglądu: 150-250 zł. Dla klientów warm&cold pierwszy przegląd GRATIS!',
          },
          {
            q: 'Czy mogę zamontować klimatyzację w bloku?',
            a: 'Tak, ale wymaga zgody wspólnoty mieszkaniowej na montaż jednostki zewnętrznej. Pomagamy w przygotowaniu wniosku. W większości przypadków zgoda jest wydawana bez problemu. Alternatywa: klimatyzator przenośny lub klimatyzator bez jednostki zewnętrznej (mniej efektywny).',
          },
          {
            q: 'Jaki jest zasięg Waszych usług?',
            a: 'Obsługujemy całą Wielkopolskę. Siedziba w Szamotułach. Dojazd bezpłatny do 50 km (Poznań, Gniezno, Wągrowiec, Oborniki, Rogoźno, Czarnków, Piła). Dojazd 50-100 km: 100 zł. Realizujemy też projekty w całej Polsce (wycena indywidualna).',
          },
          {
            q: 'Czy oferujecie finansowanie/raty?',
            a: 'Tak! Współpracujemy z Santander Consumer Bank - raty 0% na 10-20 miesięcy (RRSO 0%). Minimalna kwota finansowania: 1000 zł. Decyzja kredytowa w 15 minut. Wymagane: dowód osobisty, drugie ID, zaświadczenie o dochodach (lub PIT). Akceptujemy też płatność kartą, przelewem, BLIK.',
          },
          {
            q: 'Jakie marki klimatyzacji polecacie?',
            a: 'TOP 3 marki według nas: 1) Mitsubishi Electric (najwyższa jakość, cicha praca, trwałość 15+ lat), 2) LG (świetny stosunek ceny do jakości, gwarancja 5 lat), 3) Samsung (nowoczesny design, funkcje smart, WiFi). Dla budżetowych: Rotenso, Haier. Premium: Daikin, Toshiba. Wszystkie marki z certyfikatem A+++.',
          },
        ],
      },
      realizations: {
        title: 'Nasze ostatnie realizacje',
        subtitle: 'Zobacz, co ostatnio zainstalowaliśmy',
      },
      reviews: {
        title: 'Opinie naszych klientów',
        subtitle: 'Zobacz, co mówią o nas klienci na Google',
        googleRating: '5.0',
        googleReviews: '50+ opinii',
        items: [
          {
            name: 'Bartosz J.',
            rating: 5,
            text: 'Duży wybór klimatyzacji, fachowe doradztwo, świetny kontakt, terminowość, szybki i sprawny montaż, panowie po sobie posprzątali. Klimatyzacja działa wzorowo. Polecam!',
            date: '5 lat temu',
          },
          {
            name: 'Mirosław Mariusz',
            rating: 5,
            text: 'Profesjonaliści. Punktualność, solidność jeśli chodzi o termin. Montaż "czysty", zgodnie ze sztuką. Porządek zostawiają po sobie. Polecam z czystym sumieniem.',
            date: '3 lata temu',
          },
          {
            name: 'Maciej Klimas',
            rating: 5,
            text: 'Szybko, fachowo, doradztwo co do miejsca montażu i wyboru urządzenia, dobry kontakt. Urządzenie działa świetnie!',
            date: '2 lata temu',
          },
          {
            name: 'Joanna Trawińska-Piosik',
            rating: 5,
            text: 'Polecam serdecznie współpracę z tą firmą - szybko, profesjonalnie i estetycznie. Wszystko działa bez zarzutu. Bardzo przystępne ceny, miła i fachowa obsługa.',
            date: '4 lata temu',
          },
          {
            name: 'Konrad Pawłowski',
            rating: 5,
            text: 'Świetny kontakt od samego początku do końca montażu. Panowie montaż wykonali szybko, schludnie i dokładnie. Polecam gorąco!',
            date: '2 lata temu',
          },
          {
            name: 'Mateusz Markiewicz',
            rating: 5,
            text: 'Polecam firmę warm&cold. Szybka realizacja. Estetyczny montaż. Bardzo wysoka jakość produktów.',
            date: 'rok temu',
          },
          {
            name: 'KIPA KIPA',
            rating: 5,
            text: 'Wszystko poszło wg ustaleń. Ekipa montażowa zamontowała szybko, sprawnie i posprzątała po sobie. Z czystym sumieniem mogę polecić firmę. Ceny też mają ok.',
            date: '2 lata temu',
          },
          {
            name: 'Andrzej Andrzej',
            rating: 5,
            text: 'Skorzystałam z oferty firmy bazując tylko na opiniach. Potwierdzają się w 100%! Bardzo dobry kontakt, montaż na najwyższym poziomie, czysto, szybko, sprawnie. Słowni, uczciwi i godni zaufania.',
            date: '4 lata temu',
          },
          {
            name: 'Dorota Świerczyńska',
            rating: 5,
            text: 'Jesteśmy pod ogromnym wrażeniem! Lepiej nie mogliśmy trafić! Pełen profesjonalizm! Ekipa uśmiechnięta, pracowita, czysta! Zero problemów! Polecam serdecznie!',
            date: 'rok temu',
          },
          {
            name: 'Jan Krajcarz',
            rating: 5,
            text: 'Montaż na najwyższym poziomie, bardzo czysto po zakończeniu prac. Szybka realizacja zlecenia. Naprawdę jestem zadowolony.',
            date: 'rok temu',
          },
          {
            name: 'Janusz Danilowicz',
            rating: 5,
            text: 'Firmę znalazłem na allegro szukając konkurencyjnej ceny i nie żałuję. Miły i fachowy kontakt. Dotrzymanie terminu oraz sprawny i profesjonalny montaż. Gorąco polecam.',
            date: '4 lata temu',
          },
          {
            name: 'Aldona Rawecka',
            rating: 5,
            text: 'Świetny kontakt ze sprzedawcą, szybkie i sprawne działanie, fachowe doradztwo w doborze sprzętu. Sam montaż sprawny i czysty. Zdecydowanie polecam!',
            date: '2 lata temu',
          },
        ],
      },
      cta: {
        title: 'Gotowy na profesjonalną instalację?',
        subtitle: 'Skontaktuj się z nami już dziś i uzyskaj bezpłatną wycenę',
        phone: '881 515 595',
        email: 'info@warmandcold.pl',
      },
    },
    en: {
      hero: {
        title: 'Professional air conditioning, heat pump and ventilation installations in Wielkopolska',
        subtitle: 'Over 6 years of experience • 1000+ satisfied customers • F-gases certificate • Authorized Bosch distributor',
        location: 'ul. Braci Czeskich 14, 64-500 Szamotuły, Poland',
        cta1: 'Free quote',
        cta2: 'Call: +48 881 515 595',
      },
      trust: [
        { icon: Award, text: 'F-gases certificate' },
        { icon: Shield, text: 'Up to 7 years warranty' },
        { icon: Star, text: '1000+ installations' },
        { icon: BadgeCheck, text: 'Authorized Bosch distributor' },
        { icon: ThumbsUp, text: '100% satisfied customers' },
      ],
      stats: [
        { number: '6+', label: 'years of experience' },
        { number: '1000+', label: 'installations' },
        { number: '8', label: 'premium brands' },
        { number: '100%', label: 'satisfaction' },
      ],
      services: {
        title: 'Our services',
        subtitle: 'Comprehensive HVAC solutions for your home and business',
        items: [
          {
            icon: Snowflake,
            title: 'Air Conditioning',
            description: 'Professional installation and service of air conditioning systems. We select the best solutions tailored to your needs. Warranty up to 7 years.',
            features: ['7-year warranty', '24/7 service', 'Free travel', 'Expert advice'],
            link: '/en/services/air-conditioning',
          },
          {
            icon: Flame,
            title: 'Heat Pumps',
            description: 'Ecological and economical heating. We install air-to-water and air-to-air heat pumps. Savings up to 75% of heating costs.',
            features: ['75% savings', 'Grants up to 30k PLN', 'Complete installation', 'Energy audit'],
            link: '/en/services/heat-pumps',
          },
          {
            icon: Wind,
            title: 'Ventilation',
            description: 'Mechanical ventilation systems with heat recovery. We provide fresh air and energy savings. Heat recovery up to 95%.',
            features: ['95% recovery', 'PM2.5 filtration', 'Quiet operation', 'WiFi control'],
            link: '/en/services/ventilation',
          },
        ],
      },
      why: {
        title: 'Why warm&cold?',
        subtitle: 'We are the HVAC industry leader in Wielkopolska',
        items: [
          { icon: Award, title: 'F-gases certificate', description: 'We have all necessary certificates and qualifications to work with refrigerants. Our installers are regularly trained.' },
          { icon: Users, title: 'Experienced team', description: 'Team of 10 specialists with years of experience: Kacper Buda, Łukasz Trzeciak and installers Bartosz, Paweł, Mariusz, Krzysztof, Kuba, Waldek, Hubert, Tomek.' },
          { icon: BadgeCheck, title: 'Authorized Bosch distributor', description: 'Official partner of Bosch and other leading brands: Samsung, LG, Mitsubishi, Rotenso, Haier, Daikin, Toshiba, Sinclair.' },
          { icon: Shield, title: 'Up to 7 years warranty', description: 'We offer the longest warranty on the market - up to 7 years on equipment and installation. 24/7 service throughout the warranty period.' },
          { icon: TrendingUp, title: '1000+ projects', description: 'Over 1000 satisfied customers in Wielkopolska. We implement residential, commercial and industrial projects.' },
          { icon: MapPin, title: 'Locally in Szamotuły', description: 'Headquarters in Szamotuły at ul. Braci Czeskich 14. We serve the entire Wielkopolska region with travel up to 100 km.' },
        ],
      },
      brands: {
        title: 'Brands we work with',
        list: ['Samsung', 'LG', 'Mitsubishi', 'Rotenso', 'Haier', 'Daikin', 'Toshiba', 'Sinclair'],
      },
      faq: {
        title: 'Frequently asked questions',
        subtitle: 'We answer all your questions',
        items: [
          {
            q: 'How much does air conditioning installation cost?',
            a: 'The cost of air conditioning installation depends on many factors: device power, length of installation routes, number of indoor units, type of installation. Standard split AC installation 2.5-3.5 kW costs from 3500 to 5500 PLN gross (device + installation). We offer free quotes with travel to the customer.',
          },
          {
            q: 'How long does AC installation take?',
            a: 'Standard split AC installation (1 outdoor + 1 indoor unit) takes 4-6 hours. Multi-split system installation (1 outdoor + 2-3 indoor units) takes 6-8 hours. Installation date is arranged individually with the customer.',
          },
          {
            q: 'Can I get a grant for a heat pump?',
            a: 'Yes! Clean Air program offers grants up to 30,000 PLN for heat pumps. My Electricity 5.0 program - up to 7000 PLN. We help with all formalities, application preparation and obtaining grants. Average waiting time for grants is 3-6 months.',
          },
          {
            q: 'What is the warranty on equipment?',
            a: 'We offer manufacturer warranty (2-5 years depending on brand) + extended warm&cold warranty up to 7 years. Warranty covers equipment and installation. 24/7 warranty service, response time up to 24h. Free service inspections during warranty period.',
          },
          {
            q: 'Can AC heat in winter?',
            a: 'Yes! Modern air conditioners are heating-cooling devices (air-to-air heat pumps). Heating efficiency down to -25°C. 1 kW of electricity = 3-4 kW of heat. Savings up to 75% compared to electric heating. Ideal as support for main heat source.',
          },
          {
            q: 'How often should AC be serviced?',
            a: 'We recommend annual service (preferably before summer season). Service includes: filter cleaning, refrigerant pressure check, electrical connection control, indoor unit disinfection. Service cost: 150-250 PLN. For warm&cold customers first service FREE!',
          },
          {
            q: 'Can I install AC in an apartment building?',
            a: 'Yes, but requires housing association consent for outdoor unit installation. We help prepare the application. In most cases consent is granted without problems. Alternative: portable AC or AC without outdoor unit (less efficient).',
          },
          {
            q: 'What is your service range?',
            a: 'We serve the entire Wielkopolska region. Headquarters in Szamotuły. Free travel up to 50 km (Poznań, Gniezno, Wągrowiec, Oborniki, Rogoźno, Czarnków, Piła). Travel 50-100 km: 100 PLN. We also implement projects throughout Poland (individual quote).',
          },
          {
            q: 'Do you offer financing/installments?',
            a: 'Yes! We cooperate with Santander Consumer Bank - 0% installments for 10-20 months (APRC 0%). Minimum financing amount: 1000 PLN. Credit decision in 15 minutes. Required: ID card, second ID, income certificate (or PIT). We also accept card, transfer, BLIK payments.',
          },
          {
            q: 'Which AC brands do you recommend?',
            a: 'TOP 3 brands according to us: 1) Mitsubishi Electric (highest quality, quiet operation, durability 15+ years), 2) LG (great price-quality ratio, 5-year warranty), 3) Samsung (modern design, smart features, WiFi). For budget: Rotenso, Haier. Premium: Daikin, Toshiba. All brands with A+++ certificate.',
          },
        ],
      },
      realizations: {
        title: 'Our latest projects',
        subtitle: 'See what we recently installed',
      },
      reviews: {
        title: 'Customer reviews',
        subtitle: 'See what our customers say about us on Google',
        googleRating: '5.0',
        googleReviews: '50+ reviews',
        items: [
          {
            name: 'Bartosz J.',
            rating: 5,
            text: 'Wide selection of air conditioning, expert advice, great contact, punctuality, fast and efficient installation. The team cleaned up after themselves. AC works perfectly. Recommend!',
            date: '5 years ago',
          },
          {
            name: 'Mirosław Mariusz',
            rating: 5,
            text: 'Professionals. Punctuality, reliability regarding deadlines. Clean installation, done properly. They leave everything tidy. I recommend with clear conscience.',
            date: '3 years ago',
          },
          {
            name: 'Maciej Klimas',
            rating: 5,
            text: 'Fast, professional, advice on installation location and device selection, good contact. The device works great!',
            date: '2 years ago',
          },
          {
            name: 'Joanna Trawińska-Piosik',
            rating: 5,
            text: 'I highly recommend working with this company - fast, professional and aesthetic. Everything works flawlessly. Very affordable prices, friendly and professional service.',
            date: '4 years ago',
          },
          {
            name: 'Konrad Pawłowski',
            rating: 5,
            text: 'Great contact from the very beginning to the end of installation. The team did the installation quickly, neatly and accurately. Highly recommend!',
            date: '2 years ago',
          },
          {
            name: 'Mateusz Markiewicz',
            rating: 5,
            text: 'I recommend warm&cold company. Fast delivery. Aesthetic installation. Very high quality products.',
            date: '1 year ago',
          },
        ],
      },
      cta: {
        title: 'Ready for professional installation?',
        subtitle: 'Contact us today and get a free quote',
        phone: '+48 881 515 595',
        email: 'info@warmandcold.pl',
      },
    },
    uk: {
      hero: {
        title: 'Професійна установка кондиціонерів, теплових насосів та вентиляції у Великопольщі',
        subtitle: 'Понад 6 років досвіду • 1000+ задоволених клієнтів • Сертифікат F-gases • Авторизований дистриб\'ютор Bosch',
        location: 'вул. Braci Czeskich 14, 64-500 Szamotuły, Польща',
        cta1: 'Безкоштовна пропозиція',
        cta2: 'Телефонуйте: +48 881 515 595',
      },
      trust: [
        { icon: Award, text: 'Сертифікат F-gases' },
        { icon: Shield, text: 'Гарантія до 7 років' },
        { icon: Star, text: '1000+ установок' },
        { icon: BadgeCheck, text: 'Авторизований дистриб\'ютор Bosch' },
        { icon: ThumbsUp, text: '100% задоволених клієнтів' },
      ],
      stats: [
        { number: '6+', label: 'років досвіду' },
        { number: '1000+', label: 'установок' },
        { number: '8', label: 'преміум брендів' },
        { number: '100%', label: 'задоволення' },
      ],
      services: {
        title: 'Наші послуги',
        subtitle: 'Комплексні рішення HVAC для вашого дому та бізнесу',
        items: [
          {
            icon: Snowflake,
            title: 'Кондиціонування',
            description: 'Професійна установка та обслуговування систем кондиціонування. Підбираємо найкращі рішення відповідно до ваших потреб. Гарантія до 7 років.',
            features: ['Гарантія 7 років', 'Сервіс 24/7', 'Безкоштовний виїзд', 'Фахова консультація'],
            link: '/uk/services/air-conditioning',
          },
          {
            icon: Flame,
            title: 'Теплові насоси',
            description: 'Екологічне та економічне опалення. Встановлюємо теплові насоси повітря-вода та повітря-повітря. Економія до 75% витрат на опалення.',
            features: ['Економія 75%', 'Дотації до 30 тис. злотих', 'Комплексний монтаж', 'Енергоаудит'],
            link: '/uk/services/heat-pumps',
          },
          {
            icon: Wind,
            title: 'Вентиляція',
            description: 'Системи механічної вентиляції з рекуперацією. Забезпечуємо свіже повітря та економію енергії. Рекуперація тепла до 95%.',
            features: ['Рекуперація 95%', 'Фільтрація PM2.5', 'Тиха робота', 'Управління WiFi'],
            link: '/uk/services/ventilation',
          },
        ],
      },
      why: {
        title: 'Чому warm&cold?',
        subtitle: 'Ми лідери галузі HVAC у Великопольщі',
        items: [
          { icon: Award, title: 'Сертифікат F-gases', description: 'Маємо всі необхідні сертифікати та кваліфікації для роботи з холодоагентами. Наші монтажники регулярно проходять навчання.' },
          { icon: Users, title: 'Досвідчена команда', description: 'Команда з 10 спеціалістів з багаторічним досвідом: Kacper Buda, Łukasz Trzeciak та монтажники Bartosz, Paweł, Mariusz, Krzysztof, Kuba, Waldek, Hubert, Tomek.' },
          { icon: BadgeCheck, title: 'Авторизований дистриб\'ютор Bosch', description: 'Офіційний партнер Bosch та інших провідних брендів: Samsung, LG, Mitsubishi, Rotenso, Haier, Daikin, Toshiba, Sinclair.' },
          { icon: Shield, title: 'Гарантія до 7 років', description: 'Пропонуємо найдовшу гарантію на ринку - до 7 років на обладнання та монтаж. Сервіс 24/7 протягом усього гарантійного періоду.' },
          { icon: TrendingUp, title: '1000+ проектів', description: 'Понад 1000 задоволених клієнтів у Великопольщі. Реалізуємо житлові, комерційні та промислові проекти.' },
          { icon: MapPin, title: 'Локально в Szamotuły', description: 'Штаб-квартира в Szamotuły на вул. Braci Czeskich 14. Обслуговуємо весь регіон Великопольща з виїздом до 100 км.' },
        ],
      },
      brands: {
        title: 'Бренди, з якими ми працюємо',
        list: ['Samsung', 'LG', 'Mitsubishi', 'Rotenso', 'Haier', 'Daikin', 'Toshiba', 'Sinclair'],
      },
      faq: {
        title: 'Часті запитання',
        subtitle: 'Відповідаємо на всі ваші запитання',
        items: [
          {
            q: 'Скільки коштує установка кондиціонера?',
            a: 'Вартість установки кондиціонера залежить від багатьох факторів: потужності пристрою, довжини монтажних трас, кількості внутрішніх блоків, типу монтажу. Стандартна установка спліт-системи 2,5-3,5 кВт коштує від 3500 до 5500 злотих брутто (пристрій + монтаж). Пропонуємо безкоштовну оцінку з виїздом до клієнта.',
          },
          {
            q: 'Скільки часу займає монтаж кондиціонера?',
            a: 'Стандартний монтаж спліт-системи (1 зовнішній + 1 внутрішній блок) займає 4-6 годин. Монтаж мульти-спліт системи (1 зовнішній + 2-3 внутрішніх блоки) займає 6-8 годин. Термін монтажу узгоджуємо індивідуально з клієнтом.',
          },
          {
            q: 'Чи можу я отримати дотацію на тепловий насос?',
            a: 'Так! Програма "Чисте повітря" пропонує дотації до 30 000 злотих на тепловий насос. Програма "Мій струм 5.0" - до 7000 злотих. Допомагаємо з усіма формальностями, підготовкою заяви та отриманням дотацій. Середній час очікування дотації становить 3-6 місяців.',
          },
          {
            q: 'Яка гарантія на обладнання?',
            a: 'Пропонуємо гарантію виробника (2-5 років залежно від бренду) + розширену гарантію warm&cold до 7 років. Гарантія покриває обладнання та монтаж. Гарантійний сервіс 24/7, час реагування до 24 год. Безкоштовні сервісні огляди в гарантійний період.',
          },
          {
            q: 'Чи може кондиціонер обігрівати взимку?',
            a: 'Так! Сучасні кондиціонери - це обігрівально-охолоджувальні пристрої (теплові насоси повітря-повітря). Ефективність обігріву до -25°C. 1 кВт електроенергії = 3-4 кВт тепла. Економія до 75% порівняно з електричним опаленням. Ідеально як підтримка основного джерела тепла.',
          },
          {
            q: 'Як часто потрібно обслуговувати кондиціонер?',
            a: 'Рекомендуємо щорічний сервісний огляд (найкраще перед літнім сезоном). Огляд включає: чищення фільтрів, перевірку тиску холодоагенту, контроль електричних з\'єднань, дезінфекцію внутрішнього блоку. Вартість огляду: 150-250 злотих. Для клієнтів warm&cold перший огляд БЕЗКОШТОВНО!',
          },
          {
            q: 'Чи можу я встановити кондиціонер у багатоквартирному будинку?',
            a: 'Так, але потрібна згода житлової спільноти на монтаж зовнішнього блоку. Допомагаємо підготувати заяву. У більшості випадків згода видається без проблем. Альтернатива: переносний кондиціонер або кондиціонер без зовнішнього блоку (менш ефективний).',
          },
          {
            q: 'Який діапазон ваших послуг?',
            a: 'Обслуговуємо весь регіон Великопольща. Штаб-квартира в Szamotuły. Безкоштовний виїзд до 50 км (Poznań, Gniezno, Wągrowiec, Oborniki, Rogoźno, Czarnków, Piła). Виїзд 50-100 км: 100 злотих. Також реалізуємо проекти по всій Польщі (індивідуальна оцінка).',
          },
          {
            q: 'Чи пропонуєте ви фінансування/розстрочку?',
            a: 'Так! Співпрацюємо з Santander Consumer Bank - розстрочка 0% на 10-20 місяців (RRSO 0%). Мінімальна сума фінансування: 1000 злотих. Кредитне рішення за 15 хвилин. Потрібно: посвідчення особи, другий ID, довідка про доходи (або PIT). Також приймаємо оплату карткою, переказом, BLIK.',
          },
          {
            q: 'Які бренди кондиціонерів ви рекомендуєте?',
            a: 'ТОП 3 бренди на нашу думку: 1) Mitsubishi Electric (найвища якість, тиха робота, довговічність 15+ років), 2) LG (чудове співвідношення ціни та якості, гарантія 5 років), 3) Samsung (сучасний дизайн, розумні функції, WiFi). Для бюджету: Rotenso, Haier. Преміум: Daikin, Toshiba. Всі бренди з сертифікатом A+++.',
          },
        ],
      },
      realizations: {
        title: 'Наші останні проекти',
        subtitle: 'Подивіться, що ми нещодавно встановили',
      },
      reviews: {
        title: 'Відгуки наших клієнтів',
        subtitle: 'Дивіться, що кажуть про нас клієнти в Google',
        googleRating: '5.0',
        googleReviews: '50+ відгуків',
        items: [
          {
            name: 'Bartosz J.',
            rating: 5,
            text: 'Великий вибір кондиціонерів, фахові консультації, чудовий контакт, пунктуальність, швидкий монтаж. Команда прибрала за собою. Кондиціонер працює ідеально. Рекомендую!',
            date: '5 років тому',
          },
          {
            name: 'Mirosław Mariusz',
            rating: 5,
            text: 'Професіонали. Пунктуальність, надійність щодо термінів. Чистий монтаж, виконаний належним чином. Залишають порядок після себе. Рекомендую з чистою совістю.',
            date: '3 роки тому',
          },
          {
            name: 'Maciej Klimas',
            rating: 5,
            text: 'Швидко, професійно, консультації щодо місця монтажу та вибору пристрою, хороший контакт. Пристрій працює чудово!',
            date: '2 роки тому',
          },
          {
            name: 'Joanna Trawińska-Piosik',
            rating: 5,
            text: 'Щиро рекомендую співпрацю з цією компанією - швидко, професійно та естетично. Все працює бездоганно. Дуже доступні ціни, приємне та професійне обслуговування.',
            date: '4 роки тому',
          },
          {
            name: 'Konrad Pawłowski',
            rating: 5,
            text: 'Чудовий контакт від самого початку до кінця монтажу. Команда виконала монтаж швидко, акуратно та точно. Дуже рекомендую!',
            date: '2 роки тому',
          },
          {
            name: 'Mateusz Markiewicz',
            rating: 5,
            text: 'Рекомендую компанію warm&cold. Швидка реалізація. Естетичний монтаж. Дуже висока якість продукції.',
            date: 'рік тому',
          },
        ],
      },
      cta: {
        title: 'Готові до професійної установки?',
        subtitle: 'Зв\'яжіться з нами сьогодні та отримайте безкоштовну пропозицію',
        phone: '+48 881 515 595',
        email: 'info@warmandcold.pl',
      },
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const c = content[lang];

  return (
    <div className="min-h-screen">
      {/* HERO Section - Refined & Compact */}
      <section className="navy-section relative overflow-hidden min-h-[75vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#25344c] via-[#1f2d42] to-[#1a2538]"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url("/hero-bg.png")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#25344c]/90 via-transparent to-[#25344c]/40"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>

        <div className="container relative py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-200 font-medium tracking-wide uppercase">Autoryzowany dystrybutor Bosch</span>
            </div>

            {/* Main Title - Smaller, tighter */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight fade-in-up" style={{animationDelay: '0.1s'}}>
              {c.hero.title}
            </h1>

            {/* Subtitle - More subtle */}
            <p className="text-base md:text-lg text-gray-300 mb-4 font-normal leading-relaxed max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
              {c.hero.subtitle}
            </p>

            {/* Location - Smaller */}
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 fade-in-up" style={{animationDelay: '0.3s'}}>
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{c.hero.location}</span>
            </div>

            {/* CTA Buttons - More compact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 fade-in-up" style={{animationDelay: '0.4s'}}>
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-white text-[#25344c] hover:bg-gray-100 shadow-xl font-semibold"
                onClick={() => window.location.href = `/${lang}/kontakt`}
              >
                {c.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 font-medium"
                onClick={() => window.location.href = `tel:${c.hero.cta2.split(': ')[1].replace(/\s/g, '')}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                {c.hero.cta2}
              </Button>
            </div>

            {/* Trust Bar - Horizontal, compact */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.5s'}}>
              {c.trust.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                    <Icon className="h-4 w-4 text-white/80" />
                    <span className="text-xs md:text-sm text-gray-300 whitespace-nowrap">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {c.stats.map((stat, idx) => (
              <div key={idx} className="text-center fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-bold text-[#25344c] mb-3">{stat.number}</div>
                <div className="text-gray-600 text-base md:text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - White Background */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-premium-navy mb-6">{c.services.title}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">{c.services.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {c.services.items.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={idx} 
                  className="premium-card border-0 cursor-pointer group"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  onClick={() => window.location.href = service.link}
                >
                  <CardContent className="p-10">
                    <div className="w-20 h-20 rounded-2xl bg-[#25344c]/10 flex items-center justify-center mb-8 group-hover:bg-[#25344c] transition-colors duration-300">
                      <Icon className="h-10 w-10 text-[#25344c] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-premium-navy mb-5">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-[#25344c] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={service.link} className="text-[#25344c] font-semibold inline-flex items-center hover:gap-3 transition-all text-lg group-hover:text-[#2d3f5a]">
                      Dowiedz się więcej <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section - Navy Background */}
      <section className="navy-section section-padding">
        <div className="container">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-white mb-6 flex items-end justify-center gap-3 flex-wrap">
              <span className="text-2xl md:text-3xl">
                {lang === 'pl' && 'Dlaczego '}
                {lang === 'en' && 'Why '}
                {lang === 'uk' && 'Чому '}
              </span>
              <img src="/logo-white.svg" alt="warm&cold" className="h-7 md:h-8 inline-block mb-1" />
              <span className="text-2xl md:text-3xl">?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">{c.why.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {c.why.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - White Background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 fade-in-up">
            <h2 className="text-premium-navy mb-4">{c.faq.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{c.faq.subtitle}</p>
          </div>

          <div className="max-w-6xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4">
              {c.faq.items.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-gray-50 rounded-xl px-5 py-1 border border-gray-100 hover:border-[#25344c]/20 transition-colors data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:border-[#25344c]/30"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-[#25344c] hover:no-underline py-4 gap-3">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-sm pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Brands Section - Premium Design */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-[#25344c]/10 text-[#25344c] text-sm font-medium rounded-full mb-4">
              Zaufani partnerzy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#25344c] mb-4">{c.brands.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jesteśmy autoryzowanym dystrybutorem i instalatorem wiodących marek systemów HVAC
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { src: '/brands/brand-02.svg', alt: 'Bosch', featured: true },
              { src: '/brands/brand-01.svg', alt: 'LG' },
              { src: '/brands/brand-04.svg', alt: 'Mitsubishi Electric' },
              { src: '/brands/brand-05.svg', alt: 'Samsung' },
              { src: '/brands/brand-06.svg', alt: 'Daikin' },
              { src: '/brands/brand-07.svg', alt: 'Gree' },
              { src: '/brands/brand-08.svg', alt: 'Sinclair' },
              { src: '/brands/brand-09.svg', alt: 'Vaillant' },
            ].map((brand, idx) => (
              <div
                key={idx}
                className={`
                  group relative bg-white rounded-xl p-6 md:p-8
                  shadow-sm hover:shadow-lg transition-all duration-300
                  border border-gray-100 hover:border-[#25344c]/20
                  fade-in-up flex items-center justify-center
                  ${brand.featured ? 'ring-2 ring-[#25344c]/20' : ''}
                `}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {brand.featured && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#25344c] text-white text-xs font-medium rounded">
                    Autoryzowany
                  </span>
                )}
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-10 md:h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - White Background with Carousel */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-10 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#25344c] mb-4">{c.reviews.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{c.reviews.subtitle}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-[#25344c]">{c.reviews.googleRating}</span>
              <span className="text-gray-500">({c.reviews.googleReviews})</span>
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 ml-2" />
            </div>
          </div>

          {/* Scrollable Reviews Carousel */}
          <div className="relative">
            <div
              className="flex gap-6 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {c.reviews.items.map((review, idx) => (
                <Card
                  key={idx}
                  className="flex-shrink-0 w-[320px] md:w-[380px] bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 snap-center"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">"{review.text}"</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="font-semibold text-[#25344c]">{review.name}</span>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Scroll hint gradient */}
            <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
            <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-6 gap-2">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 animate-pulse" />
              Przewiń, aby zobaczyć więcej opinii
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section - Navy Background */}
      <section className="navy-section section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h2 className="text-white mb-8">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">{c.cta.subtitle}</p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <a 
                href={`tel:${c.cta.phone.replace(/\s/g, '').replace('+', '')}`}
                className="inline-flex items-center gap-4 text-white text-2xl hover:text-gray-200 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="h-8 w-8" />
                </div>
                <span className="font-semibold">{c.cta.phone}</span>
              </a>
              
              <a 
                href={`mailto:${c.cta.email}`}
                className="inline-flex items-center gap-4 text-white text-2xl hover:text-gray-200 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-8 w-8" />
                </div>
                <span className="font-semibold">{c.cta.email}</span>
              </a>
            </div>
            
            <Button
              size="lg"
              className="premium-button text-xl px-14 py-8 bg-white text-[#25344c] hover:bg-gray-100 shadow-2xl"
              onClick={() => window.location.href = `/${lang}/kontakt`}
            >
              {c.hero.cta1}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/48881515595"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5C] transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

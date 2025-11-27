import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  pl: {
    translation: {
      // Navigation
      'nav.home': 'Strona główna',
      'nav.about': 'O nas',
      'nav.services': 'Usługi',
      'nav.services.ac': 'Klimatyzacja',
      'nav.services.heatpump': 'Pompy ciepła',
      'nav.services.ventilation': 'Wentylacja',
      'nav.pricing': 'Cennik',
      'nav.partners': 'Partnerzy',
      'nav.team': 'Zespół',
      'nav.certificates': 'Certyfikaty',
      'nav.contact': 'Kontakt',
      
      // Company info
      'company.name': 'warm&cold',
      'company.address': 'ul. Braci Czeskich 14, 64-500 Szamotuły',
      'company.nip': 'NIP: 7872132035',
      'company.phone': '881 515 595',
      'company.email': 'info@warmandcold.pl',
      'company.experience': 'Ponad 6 lat doświadczenia',
      'company.installations': 'Ponad 1000 instalacji',
      
      // Common
      'common.readMore': 'Czytaj więcej',
      'common.contactUs': 'Skontaktuj się z nami',
      'common.getQuote': 'Uzyskaj wycenę',
      'common.learnMore': 'Dowiedz się więcej',
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About us',
      'nav.services': 'Services',
      'nav.services.ac': 'Air Conditioning',
      'nav.services.heatpump': 'Heat Pumps',
      'nav.services.ventilation': 'Ventilation',
      'nav.pricing': 'Pricing',
      'nav.partners': 'Partners',
      'nav.team': 'Team',
      'nav.certificates': 'Certificates',
      'nav.contact': 'Contact',
      
      // Company info
      'company.name': 'warm&cold',
      'company.address': 'ul. Braci Czeskich 14, 64-500 Szamotuły, Poland',
      'company.nip': 'VAT: 7872132035',
      'company.phone': '+48 881 515 595',
      'company.email': 'info@warmandcold.pl',
      'company.experience': 'Over 6 years of experience',
      'company.installations': 'Over 1000 installations',
      
      // Common
      'common.readMore': 'Read more',
      'common.contactUs': 'Contact us',
      'common.getQuote': 'Get a quote',
      'common.learnMore': 'Learn more',
    }
  },
  uk: {
    translation: {
      // Navigation
      'nav.home': 'Головна',
      'nav.about': 'Про нас',
      'nav.services': 'Послуги',
      'nav.services.ac': 'Кондиціонування',
      'nav.services.heatpump': 'Теплові насоси',
      'nav.services.ventilation': 'Вентиляція',
      'nav.pricing': 'Ціни',
      'nav.partners': 'Партнери',
      'nav.team': 'Команда',
      'nav.certificates': 'Сертифікати',
      'nav.contact': 'Контакти',
      
      // Company info
      'company.name': 'warm&cold',
      'company.address': 'вул. Braci Czeskich 14, 64-500 Шамотули, Польща',
      'company.nip': 'ПДВ: 7872132035',
      'company.phone': '+48 881 515 595',
      'company.email': 'info@warmandcold.pl',
      'company.experience': 'Понад 6 років досвіду',
      'company.installations': 'Понад 1000 установок',
      
      // Common
      'common.readMore': 'Читати далі',
      'common.contactUs': 'Зв\'яжіться з нами',
      'common.getQuote': 'Отримати пропозицію',
      'common.learnMore': 'Дізнатися більше',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en', 'uk'],
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

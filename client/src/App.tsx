import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CrispChat from "./components/CrispChat";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AirConditioning from "./pages/services/AirConditioning";
import HeatPumps from "./pages/services/HeatPumps";
import Ventilation from "./pages/services/Ventilation";
import Pricing from "./pages/Pricing";
import Partners from "./pages/Partners";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Financing from "./pages/Financing";
import Warranty from "./pages/Warranty";
import Reviews from "./pages/Reviews";
import Careers from "./pages/Careers";
import Projects from "./pages/Projects";
import Downloads from "./pages/Downloads";
import Sitemap from "./pages/Sitemap";

// Case Studies
import CaseStudiesIndex from './pages/CaseStudiesIndex';
import CaseStudy1 from './pages/realizacje/CaseStudy1';
import CaseStudy2 from './pages/realizacje/CaseStudy2';
import CaseStudy3 from './pages/realizacje/CaseStudy3';
import CaseStudy4 from './pages/realizacje/CaseStudy4';
import CaseStudy5 from './pages/realizacje/CaseStudy5';
import CaseStudy6 from './pages/realizacje/CaseStudy6';
import CaseStudy7 from './pages/realizacje/CaseStudy7';
import CaseStudy8 from './pages/realizacje/CaseStudy8';
import CaseStudy9 from './pages/realizacje/CaseStudy9';
import CaseStudy10 from './pages/realizacje/CaseStudy10';
import CaseStudy11 from './pages/realizacje/CaseStudy11';
import CaseStudy12 from './pages/realizacje/CaseStudy12';
import CaseStudy13 from './pages/realizacje/CaseStudy13';
import CaseStudy14 from './pages/realizacje/CaseStudy14';
import CaseStudy15 from './pages/realizacje/CaseStudy15';
import CaseStudy16 from './pages/realizacje/CaseStudy16';
import CaseStudy17 from './pages/realizacje/CaseStudy17';
import CaseStudy18 from './pages/realizacje/CaseStudy18';
import CaseStudy19 from './pages/realizacje/CaseStudy19';
import CaseStudy20 from './pages/realizacje/CaseStudy20';
import CaseStudy21 from './pages/realizacje/CaseStudy21';
import CaseStudy22 from './pages/realizacje/CaseStudy22';
import CaseStudy23 from './pages/realizacje/CaseStudy23';
import CaseStudy24 from './pages/realizacje/CaseStudy24';

// Articles
import ArticlesIndex from './pages/ArticlesIndex';
import Article1 from './pages/artykuly/Article1';
import Article2 from './pages/artykuly/Article2';
import Article3 from './pages/artykuly/Article3';

// Additional GEO Articles
import Article4 from './pages/articles/article-4';
import Article5 from './pages/articles/article-5';
import Article6 from './pages/articles/article-6';
import Article7 from './pages/articles/article-7';
import Article8 from './pages/articles/article-8';
import Article9 from './pages/articles/article-9';
import Article10 from './pages/articles/article-10';
import Article11 from './pages/articles/article-11';
import Article12 from './pages/articles/article-12';

// City Landing Pages
import PoznanKlimatyzacja from './pages/city/PoznanKlimatyzacja';

function Router() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect language from URL path
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(pl|en|uk)/);
    if (langMatch) {
      i18n.changeLanguage(langMatch[1]);
    }
  }, [i18n]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CrispChat />
      <main className="flex-1">
        <Switch>
          {/* Redirect root to /pl */}
          <Route path="/">
            {() => <Redirect to="/pl" />}
          </Route>

          {/* Language-specific routes */}
          <Route path="/:lang(pl|en|uk)" component={Home} />
          <Route path="/:lang(pl|en|uk)/about" component={About} />
          <Route path="/:lang(pl|en|uk)/services/air-conditioning" component={AirConditioning} />
          <Route path="/:lang(pl|en|uk)/services/heat-pumps" component={HeatPumps} />
          <Route path="/:lang(pl|en|uk)/services/ventilation" component={Ventilation} />
          <Route path="/:lang(pl|en|uk)/pricing" component={Pricing} />
          <Route path="/:lang(pl|en|uk)/partners" component={Partners} />
          <Route path="/:lang(pl|en|uk)/certificates" component={Certificates} />
          <Route path="/:lang(pl|en|uk)/kontakt" component={Contact} />
          <Route path="/:lang(pl|en|uk)/faq" component={FAQ} />
          <Route path="/:lang(pl|en|uk)/galeria" component={Gallery} />
          <Route path="/:lang(pl|en|uk)/finansowanie" component={Financing} />
          <Route path="/:lang(pl|en|uk)/gwarancja" component={Warranty} />
          <Route path="/:lang(pl|en|uk)/opinie" component={Reviews} />
          <Route path="/:lang(pl|en|uk)/kariera" component={Careers} />
          <Route path="/:lang(pl|en|uk)/projekty" component={Projects} />
          <Route path="/:lang(pl|en|uk)/pobieralnia" component={Downloads} />
          <Route path="/:lang(pl|en|uk)/mapa-strony" component={Sitemap} />

          {/* Case Studies */}
          <Route path="/:lang(pl|en|uk)/case-studies" component={CaseStudiesIndex} />
          <Route path="/realizacje" component={CaseStudiesIndex} />
          <Route path="/realizacje/klimatyzacja-samsung-wind-free-elite-poznan-oszczednosc-60-procent" component={CaseStudy1} />
          <Route path="/realizacje/pompa-ciepla-lg-therma-v-9kw-szamotuly-case-study" component={CaseStudy2} />
          <Route path="/realizacje/klimatyzacja-multi-split-mitsubishi-biuro-it-wronki" component={CaseStudy3} />
          <Route path="/realizacje/rekuperacja-daikin-vam800fc-alergia-obrzycko" component={CaseStudy4} />
          <Route path="/realizacje/klimatyzacja-daikin-stylish-poznan-stary-rynek" component={CaseStudy5} />
          <Route path="/realizacje/pompa-ciepla-bosch-grunt-woda-11kw-dom-pasywny-pniewy" component={CaseStudy6} />
          <Route path="/realizacje/klimatyzacja-rotenso-versu-restauracja-szamotuly-wzrost-rezerwacji" component={CaseStudy7} />
          <Route path="/realizacje/pompa-ciepla-haier-12kw-agroturystyka-wronki-oszczednosc-77-procent" component={CaseStudy8} />
          <Route path="/realizacje/wentylacja-mechaniczna-klimatyzacja-vrv-daikin-biurowiec-poznan-jezyce" component={CaseStudy9} />
          <Route path="/realizacje/klimatyzacja-toshiba-haori-apartament-poznan-solacz" component={CaseStudy10} />
          <Route path="/realizacje/klimatyzacja-mitsubishi-biuro-poznan" component={CaseStudy11} />
          <Route path="/realizacje/pompa-ciepla-lg-therma-v-szamotuly" component={CaseStudy12} />
          <Route path="/realizacje/daikin-perfera-klimatyzacja-95m2-szamotuly-55-oszczednosci" component={CaseStudy13} />
          <Route path="/realizacje/pompa-ciepla-bosch-compress-7000i-pniewy" component={CaseStudy14} />
          <Route path="/realizacje/klimatyzacja-panasonic-etherea-multi-split-obrzycko" component={CaseStudy15} />
          <Route path="/realizacje/pompa-ciepla-vaillant-arotherm-plus-wronki" component={CaseStudy16} />
          <Route path="/realizacje/klimatyzacja-haier-flexis-restauracja-szamotuly" component={CaseStudy17} />
          <Route path="/realizacje/pompa-ciepla-samsung-ehs-mono-pniewy" component={CaseStudy18} />
          <Route path="/realizacje/wentylacja-zehnder-dom-pasywny-obrzycko" component={CaseStudy19} />
          <Route path="/realizacje/klimatyzacja-toshiba-haori-salon-fryzjerski-szamotuly" component={CaseStudy20} />
          <Route path="/realizacje/pompa-ciepla-mitsubishi-ecodan-wronki" component={CaseStudy21} />
          <Route path="/realizacje/klimatyzacja-fujitsu-nocria-x-biuro-prawnicze-poznan" component={CaseStudy22} />
          <Route path="/realizacje/wentylacja-brink-rekuperacja-pniewy" component={CaseStudy23} />
          <Route path="/realizacje/klimatyzacja-gree-amber-sklep-szamotuly" component={CaseStudy24} />

          {/* GEO Articles */}
          <Route path="/:lang(pl|en|uk)/articles" component={ArticlesIndex} />
          <Route path="/artykuly" component={ArticlesIndex} />
          <Route path="/artykuly/pompy-ciepla-dotacja-szamotuly-pniewy-obrzycko-przewodnik-2025" component={Article1} />
          <Route path="/artykuly/klimatyzacja-montaz-poznan-powiat-ceny-poradnik-2026" component={Article2} />
          <Route path="/artykuly/rekuperacja-wielkopolska-koszt-dotacje-przewodnik-2025" component={Article3} />
          <Route path="/artykuly/wentylacja-mechaniczna-rekuperacja-wielkopolska-przewodnik-2025" component={Article4} />
          <Route path="/artykuly/klimatyzacja-dla-firm-biur-szamotuly-jak-wybrac" component={Article5} />
          <Route path="/artykuly/pompy-ciepla-vs-kotly-gazowe-porownanie-kosztow-wielkopolska" component={Article6} />
          <Route path="/artykuly/serwis-konserwacja-klimatyzacji-szamotuly" component={Article7} />
          <Route path="/artykuly/ogrzewanie-podlogowe-pompa-ciepla-przewodnik-pniewy" component={Article8} />
          <Route path="/artykuly/klimatyzacja-multi-split-vs-mono-split-dom-150m2" component={Article9} />
          <Route path="/artykuly/dotacje-pompy-ciepla-2025-maksymalne-dofinansowanie-wielkopolska" component={Article10} />
          <Route path="/artykuly/chlodzenie-pasywne-aktywne-nowoczesne-rozwiazania-obrzycko" component={Article11} />
          <Route path="/artykuly/pompy-ciepla-powietrze-woda-vs-grunt-woda-analiza-wielkopolska" component={Article12} />

          {/* City Landing Pages - SEO */}
          <Route path="/poznan/klimatyzacja" component={PoznanKlimatyzacja} />
          {/* TODO: Add more city pages here (327 total) */}

          {/* 404 */}
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

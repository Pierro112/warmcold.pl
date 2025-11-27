import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'pl';

  const brands = ['Samsung', 'LG', 'Mitsubishi', 'Rotenso', 'Haier', 'Daikin', 'Toshiba', 'Sinclair'];

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('company.name')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t('company.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${t('company.phone').replace(/\s/g, '')}`} className="hover:underline">
                  {t('company.phone')}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${t('company.email')}`} className="hover:underline">
                  {t('company.email')}
                </a>
              </div>
              <p className="pt-2">{t('company.nip')}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/services/air-conditioning`}>
                  <a className="hover:underline">{t('nav.services.ac')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/heat-pumps`}>
                  <a className="hover:underline">{t('nav.services.heatpump')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/ventilation`}>
                  <a className="hover:underline">{t('nav.services.ventilation')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/pricing`}>
                  <a className="hover:underline">{t('nav.pricing')}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('nav.about')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/about`}>
                  <a className="hover:underline">{t('nav.about')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/team`}>
                  <a className="hover:underline">{t('nav.team')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/certificates`}>
                  <a className="hover:underline">{t('nav.certificates')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/partners`}>
                  <a className="hover:underline">{t('nav.partners')}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Marki / Brands</h3>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {brands.map((brand) => (
                <span key={brand} className="px-2 py-1 bg-background rounded border">
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              {t('company.experience')}<br />
              {t('company.installations')}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {t('company.name')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

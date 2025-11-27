import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { APP_LOGO } from '@/const';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lang = i18n.language || 'pl';

  const navigation = [
    { name: t('nav.home'), href: `/${lang}` },
    { name: t('nav.about'), href: `/${lang}/about` },
    {
      name: t('nav.services'),
      children: [
        { name: t('nav.services.ac'), href: `/${lang}/services/air-conditioning` },
        { name: t('nav.services.heatpump'), href: `/${lang}/services/heat-pumps` },
        { name: t('nav.services.ventilation'), href: `/${lang}/services/ventilation` },
      ],
    },
    { name: t('nav.pricing'), href: `/${lang}/pricing` },
    { name: t('nav.partners'), href: `/${lang}/partners` },
    { name: t('nav.certificates'), href: `/${lang}/certificates` },
    { name: t('nav.contact'), href: `/${lang}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href={`/${lang}`}>
          <a className="flex items-center gap-2">
            <img src={APP_LOGO} alt={t('company.name')} className="h-10 w-auto" />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6 flex-1 justify-center">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <Button variant="ghost" className="gap-1">
                  {item.name}
                </Button>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-background border rounded-md shadow-lg">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      <a className="block px-4 py-2 hover:bg-accent rounded-md">
                        {child.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                <a>
                  <Button
                    variant="ghost"
                    className={location === item.href ? 'bg-accent' : ''}
                  >
                    {item.name}
                  </Button>
                </a>
              </Link>
            )
          )}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-2">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <div className="font-medium px-4 py-2">{item.name}</div>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      <a
                        className="block px-8 py-2 hover:bg-accent rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </a>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a
                    className="block px-4 py-2 hover:bg-accent rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

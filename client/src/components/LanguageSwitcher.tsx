import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation();

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    
    // Update URL path with new language
    const pathParts = location.split('/').filter(Boolean);
    const currentLangInPath = ['pl', 'en', 'uk'].includes(pathParts[0]) ? pathParts[0] : null;
    
    if (currentLangInPath) {
      pathParts[0] = langCode;
    } else {
      pathParts.unshift(langCode);
    }
    
    setLocation('/' + pathParts.join('/'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={i18n.language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

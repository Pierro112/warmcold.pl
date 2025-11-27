import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispChat() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID"; // User needs to replace this

    // Set language based on i18n
    const crispLang = i18n.language === 'uk' ? 'uk' : i18n.language === 'en' ? 'en' : 'pl';
    
    // Load Crisp script
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.$crisp) {
        window.$crisp.push(['set', 'session:locale', crispLang]);
      }
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [i18n.language]);

  return null;
}

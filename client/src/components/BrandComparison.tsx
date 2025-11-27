import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Minus } from 'lucide-react';

interface BrandFeatures {
  name: string;
  priceRange: string;
  warranty: string;
  energyClass: string;
  noiseLevel: string;
  features: {
    wifi: boolean;
    inverter: boolean;
    airPurification: boolean;
    autoClean: boolean;
    smartControl: boolean;
  };
  rating: number;
}

const brandsData: Record<string, BrandFeatures> = {
  samsung: {
    name: 'Samsung',
    priceRange: '3500-7200 PLN',
    warranty: '5 lat',
    energyClass: 'A+++',
    noiseLevel: '19-24 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: true,
      autoClean: true,
      smartControl: true,
    },
    rating: 4.8,
  },
  lg: {
    name: 'LG',
    priceRange: '3200-6800 PLN',
    warranty: '5 lat',
    energyClass: 'A+++',
    noiseLevel: '20-25 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: true,
      autoClean: true,
      smartControl: true,
    },
    rating: 4.7,
  },
  mitsubishi: {
    name: 'Mitsubishi',
    priceRange: '3800-7800 PLN',
    warranty: '5 lat',
    energyClass: 'A+++',
    noiseLevel: '19-22 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: true,
      autoClean: false,
      smartControl: true,
    },
    rating: 4.9,
  },
  daikin: {
    name: 'Daikin',
    priceRange: '3600-7500 PLN',
    warranty: '5 lat',
    energyClass: 'A+++',
    noiseLevel: '20-23 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: true,
      autoClean: true,
      smartControl: true,
    },
    rating: 4.8,
  },
  rotenso: {
    name: 'Rotenso',
    priceRange: '2800-5900 PLN',
    warranty: '3 lata',
    energyClass: 'A++',
    noiseLevel: '22-26 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: false,
      autoClean: true,
      smartControl: false,
    },
    rating: 4.3,
  },
  haier: {
    name: 'Haier',
    priceRange: '2900-6200 PLN',
    warranty: '3 lata',
    energyClass: 'A++',
    noiseLevel: '21-25 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: true,
      autoClean: true,
      smartControl: true,
    },
    rating: 4.4,
  },
  toshiba: {
    name: 'Toshiba',
    priceRange: '3300-6900 PLN',
    warranty: '5 lat',
    energyClass: 'A+++',
    noiseLevel: '20-24 dB',
    features: {
      wifi: true,
      inverter: true,
      airPurification: true,
      autoClean: true,
      smartControl: true,
    },
    rating: 4.6,
  },
  sinclair: {
    name: 'Sinclair',
    priceRange: '2700-5500 PLN',
    warranty: '3 lata',
    energyClass: 'A++',
    noiseLevel: '22-27 dB',
    features: {
      wifi: false,
      inverter: true,
      airPurification: false,
      autoClean: true,
      smartControl: false,
    },
    rating: 4.2,
  },
};

export default function BrandComparison() {
  const { i18n } = useTranslation();
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['samsung', 'lg', 'mitsubishi']);

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      if (selectedBrands.length < 4) {
        setSelectedBrands([...selectedBrands, brand]);
      }
    }
  };

  const labels = {
    pl: {
      title: 'Porównanie marek',
      selectBrands: 'Wybierz marki do porównania (max 4)',
      priceRange: 'Zakres cen',
      warranty: 'Gwarancja',
      energyClass: 'Klasa energetyczna',
      noiseLevel: 'Poziom hałasu',
      features: 'Funkcje',
      wifi: 'Wi-Fi',
      inverter: 'Technologia Inverter',
      airPurification: 'Oczyszczanie powietrza',
      autoClean: 'Automatyczne czyszczenie',
      smartControl: 'Inteligentne sterowanie',
      rating: 'Ocena',
    },
    en: {
      title: 'Brand Comparison',
      selectBrands: 'Select brands to compare (max 4)',
      priceRange: 'Price Range',
      warranty: 'Warranty',
      energyClass: 'Energy Class',
      noiseLevel: 'Noise Level',
      features: 'Features',
      wifi: 'Wi-Fi',
      inverter: 'Inverter Technology',
      airPurification: 'Air Purification',
      autoClean: 'Auto Clean',
      smartControl: 'Smart Control',
      rating: 'Rating',
    },
    uk: {
      title: 'Порівняння брендів',
      selectBrands: 'Виберіть бренди для порівняння (макс 4)',
      priceRange: 'Діапазон цін',
      warranty: 'Гарантія',
      energyClass: 'Клас енергоефективності',
      noiseLevel: 'Рівень шуму',
      features: 'Функції',
      wifi: 'Wi-Fi',
      inverter: 'Технологія Inverter',
      airPurification: 'Очищення повітря',
      autoClean: 'Автоматичне очищення',
      smartControl: 'Розумне керування',
      rating: 'Рейтинг',
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const l = labels[lang];

  const FeatureIcon = ({ value }: { value: boolean }) => {
    if (value) return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    return <XCircle className="h-5 w-5 text-red-600" />;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{l.selectBrands}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {Object.keys(brandsData).map((brandKey) => (
              <label key={brandKey} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selectedBrands.includes(brandKey)}
                  onCheckedChange={() => toggleBrand(brandKey)}
                  disabled={!selectedBrands.includes(brandKey) && selectedBrands.length >= 4}
                />
                <span className="font-medium">{brandsData[brandKey].name}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedBrands.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold bg-muted/50"></th>
                {selectedBrands.map((brandKey) => (
                  <th key={brandKey} className="text-center p-4 font-semibold bg-muted/50">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-lg">{brandsData[brandKey].name}</span>
                      <Badge variant="secondary">
                        ⭐ {brandsData[brandKey].rating}
                      </Badge>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">{l.priceRange}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    {brandsData[brandKey].priceRange}
                  </td>
                ))}
              </tr>
              <tr className="border-b bg-muted/20">
                <td className="p-4 font-medium">{l.warranty}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    {brandsData[brandKey].warranty}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">{l.energyClass}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    <Badge>{brandsData[brandKey].energyClass}</Badge>
                  </td>
                ))}
              </tr>
              <tr className="border-b bg-muted/20">
                <td className="p-4 font-medium">{l.noiseLevel}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    {brandsData[brandKey].noiseLevel}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">{l.wifi}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={brandsData[brandKey].features.wifi} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b bg-muted/20">
                <td className="p-4 font-medium">{l.inverter}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={brandsData[brandKey].features.inverter} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">{l.airPurification}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={brandsData[brandKey].features.airPurification} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b bg-muted/20">
                <td className="p-4 font-medium">{l.autoClean}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={brandsData[brandKey].features.autoClean} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">{l.smartControl}</td>
                {selectedBrands.map((brandKey) => (
                  <td key={brandKey} className="p-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={brandsData[brandKey].features.smartControl} />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

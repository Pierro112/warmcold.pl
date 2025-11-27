import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calculator } from 'lucide-react';

interface Model {
  name: string;
  power: string;
  basePrice: number;
}

interface BrandData {
  models: Model[];
}

const brandModels: Record<string, BrandData> = {
  bosch: {
    models: [
      { name: 'Climate 3000i 2.6kW', power: '2.6kW', basePrice: 3400 },
      { name: 'Climate 3000i 3.5kW', power: '3.5kW', basePrice: 4100 },
      { name: 'Climate 5000i 5.3kW', power: '5.3kW', basePrice: 5600 },
      { name: 'Climate 8500i 7.0kW', power: '7.0kW', basePrice: 7400 },
    ],
  },
  lg: {
    models: [
      { name: 'Standard Plus 2.5kW', power: '2.5kW', basePrice: 3200 },
      { name: 'Standard Plus 3.5kW', power: '3.5kW', basePrice: 3900 },
      { name: 'Artcool 5.0kW', power: '5.0kW', basePrice: 5500 },
      { name: 'Artcool 7.0kW', power: '7.0kW', basePrice: 6800 },
    ],
  },
  mitsubishi: {
    models: [
      { name: 'MSZ-AP 2.5kW', power: '2.5kW', basePrice: 3800 },
      { name: 'MSZ-AP 3.5kW', power: '3.5kW', basePrice: 4500 },
      { name: 'MSZ-LN 5.0kW', power: '5.0kW', basePrice: 6200 },
      { name: 'MSZ-LN 7.0kW', power: '7.0kW', basePrice: 7800 },
    ],
  },
  samsung: {
    models: [
      { name: 'Wind-Free Comfort 2.5kW', power: '2.5kW', basePrice: 3500 },
      { name: 'Wind-Free Comfort 3.5kW', power: '3.5kW', basePrice: 4200 },
      { name: 'Wind-Free Elite 5.0kW', power: '5.0kW', basePrice: 5800 },
      { name: 'Wind-Free Elite 7.0kW', power: '7.0kW', basePrice: 7200 },
    ],
  },
  daikin: {
    models: [
      { name: 'Sensira 2.5kW', power: '2.5kW', basePrice: 3600 },
      { name: 'Sensira 3.5kW', power: '3.5kW', basePrice: 4300 },
      { name: 'Emura 5.0kW', power: '5.0kW', basePrice: 6000 },
      { name: 'Emura 7.0kW', power: '7.0kW', basePrice: 7500 },
    ],
  },
  gree: {
    models: [
      { name: 'Fairy 2.5kW', power: '2.5kW', basePrice: 2600 },
      { name: 'Fairy 3.5kW', power: '3.5kW', basePrice: 3200 },
      { name: 'U-Crown 5.0kW', power: '5.0kW', basePrice: 4600 },
      { name: 'U-Crown 7.0kW', power: '7.0kW', basePrice: 5800 },
    ],
  },
  sinclair: {
    models: [
      { name: 'Keyon 2.5kW', power: '2.5kW', basePrice: 2400 },
      { name: 'Keyon 3.5kW', power: '3.5kW', basePrice: 3000 },
      { name: 'Spectrum Plus 5.0kW', power: '5.0kW', basePrice: 4200 },
      { name: 'Spectrum Plus 7.0kW', power: '7.0kW', basePrice: 5400 },
    ],
  },
  vaillant: {
    models: [
      { name: 'climaVAIR plus 2.7kW', power: '2.7kW', basePrice: 3600 },
      { name: 'climaVAIR plus 3.5kW', power: '3.5kW', basePrice: 4400 },
      { name: 'climaVAIR exclusive 5.3kW', power: '5.3kW', basePrice: 6100 },
      { name: 'climaVAIR exclusive 7.0kW', power: '7.0kW', basePrice: 7600 },
    ],
  },
};

export default function PricingCalculator() {
  const { t, i18n } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [installationType, setInstallationType] = useState<string>('');

  const brands = [
    { value: 'bosch', label: 'Bosch' },
    { value: 'lg', label: 'LG' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'daikin', label: 'Daikin' },
    { value: 'gree', label: 'Gree' },
    { value: 'sinclair', label: 'Sinclair' },
    { value: 'vaillant', label: 'Vaillant' },
  ];

  const installationTypes = [
    { value: 'standard', label: i18n.language === 'pl' ? 'Standardowa' : i18n.language === 'en' ? 'Standard' : 'Стандартна', price: 1500 },
    { value: 'complex', label: i18n.language === 'pl' ? 'Złożona' : i18n.language === 'en' ? 'Complex' : 'Складна', price: 2500 },
    { value: 'premium', label: i18n.language === 'pl' ? 'Premium' : i18n.language === 'en' ? 'Premium' : 'Преміум', price: 3500 },
  ];

  const availableModels = selectedBrand ? brandModels[selectedBrand]?.models || [] : [];
  const selectedModelData = availableModels.find(m => m.name === selectedModel);
  const selectedInstallationData = installationTypes.find(t => t.value === installationType);

  const totalPrice = (selectedModelData?.basePrice || 0) + (selectedInstallationData?.price || 0);

  const labels = {
    pl: {
      title: 'Kalkulator cen',
      description: 'Wybierz markę, model i typ instalacji, aby uzyskać szacunkową cenę',
      brand: 'Marka',
      selectBrand: 'Wybierz markę',
      model: 'Model',
      selectModel: 'Wybierz model',
      installation: 'Typ instalacji',
      selectInstallation: 'Wybierz typ instalacji',
      devicePrice: 'Cena urządzenia',
      installationPrice: 'Cena instalacji',
      totalPrice: 'Cena całkowita',
      contact: 'Skontaktuj się po szczegóły',
      note: 'Ceny są orientacyjne i mogą się różnić w zależności od warunków instalacji.',
    },
    en: {
      title: 'Price Calculator',
      description: 'Select brand, model and installation type to get an estimated price',
      brand: 'Brand',
      selectBrand: 'Select brand',
      model: 'Model',
      selectModel: 'Select model',
      installation: 'Installation Type',
      selectInstallation: 'Select installation type',
      devicePrice: 'Device Price',
      installationPrice: 'Installation Price',
      totalPrice: 'Total Price',
      contact: 'Contact us for details',
      note: 'Prices are indicative and may vary depending on installation conditions.',
    },
    uk: {
      title: 'Калькулятор цін',
      description: 'Виберіть бренд, модель та тип установки, щоб отримати орієнтовну ціну',
      brand: 'Бренд',
      selectBrand: 'Виберіть бренд',
      model: 'Модель',
      selectModel: 'Виберіть модель',
      installation: 'Тип установки',
      selectInstallation: 'Виберіть тип установки',
      devicePrice: 'Ціна пристрою',
      installationPrice: 'Ціна установки',
      totalPrice: 'Загальна ціна',
      contact: 'Зв\'яжіться з нами для деталей',
      note: 'Ціни є орієнтовними і можуть відрізнятися залежно від умов установки.',
    },
  };

  const lang = (i18n.language || 'pl') as 'pl' | 'en' | 'uk';
  const l = labels[lang];

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">{l.title}</CardTitle>
            <CardDescription>{l.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>{l.brand}</Label>
            <Select value={selectedBrand} onValueChange={(value) => {
              setSelectedBrand(value);
              setSelectedModel('');
            }}>
              <SelectTrigger>
                <SelectValue placeholder={l.selectBrand} />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.value} value={brand.value}>
                    {brand.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{l.model}</Label>
            <Select 
              value={selectedModel} 
              onValueChange={setSelectedModel}
              disabled={!selectedBrand}
            >
              <SelectTrigger>
                <SelectValue placeholder={l.selectModel} />
              </SelectTrigger>
              <SelectContent>
                {availableModels.map((model) => (
                  <SelectItem key={model.name} value={model.name}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{l.installation}</Label>
            <Select value={installationType} onValueChange={setInstallationType}>
              <SelectTrigger>
                <SelectValue placeholder={l.selectInstallation} />
              </SelectTrigger>
              <SelectContent>
                {installationTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedModel && installationType && (
          <div className="border-t pt-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{l.devicePrice}</p>
                <p className="text-2xl font-bold">{selectedModelData?.basePrice.toLocaleString()} PLN</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{l.installationPrice}</p>
                <p className="text-2xl font-bold">{selectedInstallationData?.price.toLocaleString()} PLN</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">{l.totalPrice}</p>
                <p className="text-3xl font-bold text-primary">{totalPrice.toLocaleString()} PLN</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">{l.note}</p>

            <div className="flex justify-center">
              <Button size="lg">{l.contact}</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

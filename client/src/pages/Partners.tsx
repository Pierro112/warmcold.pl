import { Card, CardContent } from '@/components/ui/card';

export default function Partners() {
  const brands = [
    { name: 'Bosch', logo: '/brands/brand-02.svg', description: 'Autoryzowany dystrybutor Bosch' },
    { name: 'LG', logo: '/brands/brand-01.svg', description: 'Innowacyjne rozwiązania HVAC' },
    { name: 'Mitsubishi Electric', logo: '/brands/brand-04.svg', description: 'Japońska jakość i niezawodność' },
    { name: 'Samsung', logo: '/brands/brand-05.svg', description: 'Wiodący producent klimatyzacji' },
    { name: 'Daikin', logo: '/brands/brand-06.svg', description: 'Ekspert w klimatyzacji' },
    { name: 'Gree', logo: '/brands/brand-07.svg', description: 'Globalny lider technologii' },
    { name: 'Sinclair', logo: '/brands/brand-08.svg', description: 'Efektywne rozwiązania klimatyzacyjne' },
    { name: 'Vaillant', logo: '/brands/brand-09.svg', description: 'Premium systemy grzewcze' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Nasi Partnerzy</h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Współpracujemy z najlepszymi producentami systemów HVAC
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <Card key={brand.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 p-6 flex flex-col items-center text-center">
                <div className="h-12 flex items-center justify-center mb-4">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{brand.name}</h3>
                <p className="text-sm text-muted-foreground">{brand.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

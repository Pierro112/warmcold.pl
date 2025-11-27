import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, CheckCircle2 } from 'lucide-react';

export default function HeatPumps() {
  const features = [
    'Pompy ciepła powietrze-woda',
    'Pompy ciepła powietrze-powietrze',
    'Montaż i konfiguracja',
    'Serwis gwarancyjny i pogwarancyjny',
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-center gap-4 mb-6">
          <Flame className="h-12 w-12 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Pompy Ciepła</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Ekologiczne i ekonomiczne rozwiązania grzewcze. Pompy ciepła to przyszłość ogrzewania domów.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Co oferujemy?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

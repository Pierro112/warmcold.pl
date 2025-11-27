import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, CheckCircle2 } from 'lucide-react';

export default function Ventilation() {
  const features = [
    'Wentylacja mechaniczna z rekuperacją',
    'Systemy wentylacji grawitacyjnej',
    'Montaż i uruchomienie',
    'Przeglądy i czyszczenie',
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-center gap-4 mb-6">
          <Wind className="h-12 w-12 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Wentylacja</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Systemy wentylacji zapewniające świeże powietrze i zdrowy mikroklimat w Twoim domu.
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

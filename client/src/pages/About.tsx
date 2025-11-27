import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Wrench, TrendingUp } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: <TrendingUp className="h-8 w-8" />, value: '6+', label: 'Lat doświadczenia' },
    { icon: <Users className="h-8 w-8" />, value: '1000+', label: 'Zrealizowanych instalacji' },
    { icon: <Award className="h-8 w-8" />, value: '100%', label: 'Zadowolonych klientów' },
    { icon: <Wrench className="h-8 w-8" />, value: '8', label: 'Specjalistów' },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              O firmie {t('company.name')}
            </h1>
            <p className="text-lg text-muted-foreground">
              Jesteśmy profesjonalną firmą specjalizującą się w instalacji i serwisie systemów klimatyzacji.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <CardTitle className="text-3xl">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

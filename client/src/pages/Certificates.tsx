import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certificates() {
  const certs = [
    { title: 'Certyfikat F-gases', description: 'Uprawnienia do pracy z czynnikami chłodniczymi' },
    { title: 'Autoryzowany dystrybutor Bosch', description: 'Oficjalny partner Bosch' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Certyfikaty i Uprawnienia</h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certs.map((cert) => (
            <Card key={cert.title}>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import PricingCalculator from '@/components/PricingCalculator';

export default function Pricing() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Cennik</h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Skorzystaj z kalkulatora poniżej lub skontaktuj się z nami po indywidualną wycenę
        </p>
        <PricingCalculator />
      </div>
    </div>
  );
}

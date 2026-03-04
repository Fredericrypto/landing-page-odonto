
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-smile');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/smile1/1200/800"}
          alt="Sorriso Perfeito Blumenau"
          fill
          className="object-cover"
          priority
          data-ai-hint="dental smile"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-in fade-in slide-in-from-left duration-700">
            <CheckCircle2 className="w-4 h-4" />
            <span>Sua melhor clínica em Blumenau/SC</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight mb-6 animate-in fade-in slide-in-from-left duration-700 delay-100">
            Sorriso perfeito começa aqui <span className="text-primary">em Blumenau</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-in fade-in slide-in-from-left duration-700 delay-200">
            Clareamento, implantes, ortodontia invisível e estética dental. Tecnologia de ponta e atendimento humanizado para transformar sua saúde bucal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-700 delay-300">
            <Button size="lg" className="rounded-full px-8 text-lg gap-2 h-14 bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20" asChild>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Agendar Avaliação Grátis
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-primary text-primary hover:bg-primary/5" asChild>
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 animate-in fade-in duration-1000 delay-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-muted">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Paciente" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold">+1.500 Pacientes Satisfeitos</p>
              <div className="flex text-yellow-500 text-sm">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

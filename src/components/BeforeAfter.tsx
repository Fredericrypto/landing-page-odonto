
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const comparisons = [
  {
    title: "Reabilitação Estética",
    before: "before-1",
    after: "after-1",
    tag: "Lentes de Contato"
  },
  {
    title: "Alinhamento Dental",
    before: "before-2",
    after: "after-2",
    tag: "Ortodontia"
  }
];

export function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Resultados Reais</h2>
          <h3 className="text-3xl md:text-5xl font-headline font-bold mb-6">
            Transformações que inspiram
          </h3>
          <p className="text-lg text-muted-foreground">
            Veja alguns dos resultados alcançados em nossa clínica através de tratamentos personalizados e tecnologia avançada.
          </p>
        </div>

        <div className="space-y-16">
          {comparisons.map((item, idx) => {
            const beforeImg = PlaceHolderImages.find(i => i.id === item.before);
            const afterImg = PlaceHolderImages.find(i => i.id === item.after);
            
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <Badge className="bg-secondary text-white mb-4">{item.tag}</Badge>
                  <h4 className="text-2xl md:text-3xl font-headline font-bold mb-4">{item.title}</h4>
                  <p className="text-muted-foreground mb-6">
                    Paciente buscava uma solução definitiva para harmonia do sorriso. Com planejamento digital, entregamos um resultado natural e saudável.
                  </p>
                </div>
                <div className={`grid grid-cols-2 gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative group">
                    <div className="aspect-[3/2] rounded-2xl overflow-hidden relative shadow-md">
                      <Image 
                        src={beforeImg?.imageUrl || ""} 
                        alt="Antes" 
                        fill 
                        className="object-cover"
                        data-ai-hint="unhealthy teeth"
                      />
                    </div>
                    <span className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">Antes</span>
                  </div>
                  <div className="relative group">
                    <div className="aspect-[3/2] rounded-2xl overflow-hidden relative shadow-xl border-2 border-primary/20">
                      <Image 
                        src={afterImg?.imageUrl || ""} 
                        alt="Depois" 
                        fill 
                        className="object-cover"
                        data-ai-hint="healthy smile"
                      />
                    </div>
                    <span className="absolute bottom-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-md shadow-lg">Depois</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

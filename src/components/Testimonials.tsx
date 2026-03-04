
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    location: "Blumenau, SC",
    text: "Minha experiência com o clareamento foi fantástica! A equipe é super atenciosa e o resultado superou minhas expectativas. Recomendo muito!",
    image: "testimonial-1"
  },
  {
    name: "Ricardo Mendes",
    location: "Vila Nova, Blumenau",
    text: "O tratamento com aparelho invisível foi a melhor escolha que fiz. Prático, estético e o acompanhamento clínico aqui é nota 10.",
    image: "testimonial-2"
  },
  {
    name: "Helena Souza",
    location: "Centro, Blumenau",
    text: "Fiz meus implantes e recuperei não só o sorriso, mas minha autoestima. O atendimento humanizado faz toda a diferença.",
    image: "testimonial-3"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Depoimentos</h2>
            <h3 className="text-3xl md:text-5xl font-headline font-bold">
              Histórias de quem voltou a <span className="text-secondary">sorrir com confiança</span>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <span>Avaliado com 4.9/5 no Google</span>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const imgData = PlaceHolderImages.find(i => i.id === t.image);
            return (
              <Card key={idx} className="relative bg-white border-none shadow-xl pt-12">
                <div className="absolute -top-8 left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image 
                    src={imgData?.imageUrl || `https://picsum.photos/seed/${idx}/200/200`}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover"
                    data-ai-hint="person smiling"
                  />
                </div>
                <CardContent className="pt-4">
                  <Quote className="w-10 h-10 text-primary/10 absolute top-8 right-6" />
                  <p className="text-muted-foreground italic mb-6 relative z-10">
                    "{t.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-primary font-medium">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

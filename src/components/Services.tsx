
import { Sparkles, Activity, ShieldCheck, HeartPulse, Eraser, Microscope } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Clareamento Dental',
    description: 'Recupere a brancura natural dos seus dentes com técnicas seguras e eficazes de última geração.',
    icon: Sparkles,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Implantes Dentários',
    description: 'Reabilitação oral completa com materiais de alta biocompatibilidade e tecnologia 3D.',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Aparelho Invisível',
    description: 'Ortodontia moderna e discreta para alinhar seu sorriso sem o desconforto dos bráquetes metálicos.',
    icon: Activity,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: 'Limpeza e Profilaxia',
    description: 'Prevenção essencial para manter sua gengiva saudável e seus dentes livres de placa bacteriana.',
    icon: HeartPulse,
    color: 'text-pink-500',
    bg: 'bg-pink-50'
  },
  {
    title: 'Estética Dental',
    description: 'Lentes de contato e facetas de porcelana para transformar a cor e formato do seu sorriso.',
    icon: Eraser,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  },
  {
    title: 'Emergência 24h',
    description: 'Atendimento prioritário para casos de dor aguda, traumas ou quebras acidentais.',
    icon: Microscope,
    color: 'text-red-500',
    bg: 'bg-red-50'
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Nossos Tratamentos</h2>
          <h3 className="text-3xl md:text-5xl font-headline font-bold mb-6">
            Serviços especializados para o seu <span className="text-secondary">bem-estar</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Combinamos tecnologia de ponta com um ambiente acolhedor para oferecer a melhor experiência odontológica em Blumenau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none shadow-lg bg-background/50">
              <CardHeader>
                <div className={`${service.bg} ${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Saiba mais <span>→</span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

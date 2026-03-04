
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, MapPin, Mail, Instagram, MessageCircle, Clock } from 'lucide-react';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating form submission
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais breve possível.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Contato</h2>
            <h3 className="text-3xl md:text-5xl font-headline font-bold mb-8">
              Vamos planejar o seu <span className="text-secondary">novo sorriso</span>?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Localização</h4>
                  <p className="text-muted-foreground">Rua Sete de Setembro, 1234 - Centro, Blumenau/SC</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp</h4>
                  <p className="text-muted-foreground">(47) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground">Seg - Sex: 08:00 às 19:00<br />Sábados: 08:00 às 12:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-primary font-bold mb-2">Urgências Odontológicas</p>
              <p className="text-sm text-primary/80">Possuímos sistema de plantão para atendimentos emergenciais em Blumenau.</p>
              <Button variant="link" className="p-0 h-auto text-primary font-bold mt-2 underline" asChild>
                <a href="tel:5547999999999">Ligar Agora</a>
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <h4 className="text-2xl font-headline font-bold mb-6">Envie uma mensagem</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Nome Completo</label>
                  <Input required placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Telefone/WhatsApp</label>
                  <Input required placeholder="(47) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Mensagem</label>
                <Textarea required placeholder="Como podemos ajudar?" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

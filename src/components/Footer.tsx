
import Link from 'next/link';
import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-headline font-bold">S</span>
              </div>
              <span className="font-headline font-bold text-xl">
                Sorriso <span className="text-primary">Perfeito</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Referência em odontologia moderna em Blumenau/SC. Tecnologia, conforto e resultados extraordinários.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5547999999999" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-lg">Navegação</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</Link></li>
              <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-lg">Serviços</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Clareamento Dental</li>
              <li>Implantes Dentários</li>
              <li>Invisalign / Alinhadores</li>
              <li>Estética e Facetas</li>
              <li>Ortodontia Convencional</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-lg">Endereço</h5>
            <p className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              Rua Sete de Setembro, 1234<br />
              Centro, Blumenau - SC<br />
              CEP 89010-200
            </p>
            <div className="mt-6 pt-6 border-t">
              <p className="text-xs text-muted-foreground">Agendamentos:</p>
              <p className="text-sm font-bold text-primary">(47) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sorriso Perfeito Blumenau. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:underline">Política de Privacidade</Link>
            <Link href="#" className="hover:underline">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Container } from '../components/ui/Container';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: "https://www.instagram.com/tenpilatescenter/", 
      tooltip: "Siga no Instagram" 
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: "#", 
      tooltip: "Curta no Facebook" 
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      url: "#", 
      tooltip: "Assista no YouTube" 
    },
  ];

  return (
    <footer className="bg-brand-navy text-gray-400 py-10 md:py-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 md:mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-white mb-4 md:mb-6 block">
              <span className="text-brand-orange">Ten</span> Pilates
            </span>
            <p className="mb-6 max-w-xs text-sm md:text-base">
              Transformando vidas através do movimento consciente e do cuidado personalizado.
            </p>
            
            {/* Social Icons with Tooltips */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange transition-colors duration-300"
                    aria-label={link.tooltip}
                  >
                    {link.icon}
                  </a>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-white text-brand-navy text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg z-10 hidden md:block">
                    {link.tooltip}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><a href="#beneficios" className="relative inline-block hover:text-brand-orange transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full">Sobre Nós</a></li>
              <li><a href="#sobre" className="relative inline-block hover:text-brand-orange transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full">O Estúdio</a></li>
              <li><a href="#instagram" className="relative inline-block hover:text-brand-orange transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full">Nosso Dia a Dia</a></li>
              <li><a href="#localizacao" className="relative inline-block hover:text-brand-orange transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full">Como Chegar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><a href="#" className="relative inline-block hover:text-brand-orange transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full">Termos de Uso</a></li>
              <li><a href="#" className="relative inline-block hover:text-brand-orange transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center gap-6">
          <p className="text-gray-500 text-xs md:text-sm">&copy; {new Date().getFullYear()} Ten Pilates Center. Todos os direitos reservados.</p>
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 text-xs md:text-sm flex-wrap justify-center">
              <span className="text-gray-500">Desenvolvedor | Created by</span>
              <a 
                href="https://www.instagram.com/henriquehtz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-orange hover:text-white transition-colors duration-300 font-medium flex items-center gap-2 group"
              >
                <img 
                  src="/images/foto-perfil.jpg" 
                  alt="Henrique" 
                  className="w-6 h-6 rounded-full object-cover border border-brand-orange/50 group-hover:border-white transition-colors duration-300 bg-brand-navy-light flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=Henrique&backgroundColor=C45A2D&textColor=ffffff";
                  }}
                />
                @henriquehtz
              </a>
            </div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest opacity-60">Florianópolis - SC, Brasil</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

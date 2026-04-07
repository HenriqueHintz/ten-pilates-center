import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Play } from 'lucide-react';


export function VideoSection() {
  return (
    <Section bg="white" className="py-24 md:py-32 min-h-[80vh] flex flex-col justify-center">
      <Container>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-[300px] w-full mx-auto sm:aspect-video sm:max-w-3xl group cursor-pointer bg-gray-900">
          <img 
            src="/images/Foto 01.png"
            alt="Ten Pilates Center — Conheça nosso espaço" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://www.instagram.com/tenpilatescenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 md:w-24 md:h-24 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 group"
              aria-label="Ver vídeos no Instagram"
            >
              <Play className="w-6 h-6 md:w-10 md:h-10 ml-1 md:ml-2" fill="currentColor" />
            </a>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-xl md:text-3xl font-bold font-serif">Conheça nosso espaço</h3>
            <p className="text-sm md:text-base text-gray-200 mt-1 md:mt-2">Acompanhe nosso dia a dia no Instagram</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

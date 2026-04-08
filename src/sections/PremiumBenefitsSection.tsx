import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Custom Animated SVGs
function IconSpine({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
       <motion.path 
         d="M12 4 C 17 8, 7 16, 12 20"
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         transition={{ duration: 1.2, ease: "easeInOut" }}
       />
       <motion.circle cx="12" cy="4" r="1.5" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} />
       <motion.circle cx="12" cy="12" r="2" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} />
       <motion.circle cx="12" cy="20" r="1.5" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
    </motion.svg>
  );
}

function IconAlign({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
       <motion.path 
         d="M12 3v18"
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         transition={{ duration: 1 }}
       />
       <motion.path d="M12 21 l -2 -2 m 4 0 l -2 2" />
       <motion.line x1="7" y1="8" x2="17" y2="8" initial={{ x: -15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: 'spring' }} />
       <motion.line x1="9" y1="14" x2="15" y2="14" initial={{ x: 15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, type: 'spring' }} />
    </motion.svg>
  );
}

function IconSpark({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <motion.path 
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364-6.364l-2.121 2.12M7.757 16.243l-2.121 2.121m12.728 0l-2.121-2.121M7.757 7.757L5.636 5.636"
        initial={{ pathLength: 0, rotate: -45, scale: 0.8 }}
        whileInView={{ pathLength: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle cx="12" cy="12" r="3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} />
    </motion.svg>
  );
}

function IconLotus({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <motion.path 
         d="M12 22s-8-4.5-8-11.8A5.2 5.2 0 0 1 9.2 5c2 .2 2.8 1.8 2.8 1.8s.8-1.6 2.8-1.8A5.2 5.2 0 0 1 20 10.2C20 17.5 12 22 12 22z"
         initial={{ pathLength: 0 }}
         whileInView={{ pathLength: 1 }}
         transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path d="M12 22v-8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
      <motion.path d="M12 14c-2-2-4-2-4-2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
      <motion.path d="M12 14c2-2 4-2 4-2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.0 }} />
    </motion.svg>
  );
}

const benefits = [
  {
    icon: IconSpine,
    title: "Alívio de Dores",
  },
  {
    icon: IconAlign,
    title: "Postura Correta",
  },
  {
    icon: IconSpark,
    title: "Mais Energia",
  },
  {
    icon: IconLotus,
    title: "Bem-estar",
  },
];

export function PremiumBenefitsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <Section id="beneficios" bg="white" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Text & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Sobre Nós</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              Seu corpo alinhado, <br className="hidden sm:block" />
              <span className="text-brand-orange italic font-light underline decoration-brand-orange/30 underline-offset-8">sua rotina mais leve.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold mb-1">
              Acreditamos que o movimento transforma.
            </p>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-light mb-10">
              Por isso, entregamos um atendimento humanizado, focado no que realmente importa: Sua Saúde.
            </p>

            <p className="text-base sm:text-[17px] text-brand-navy font-medium italic border-l-2 border-brand-orange/50 pl-4 mb-10 py-1 bg-gradient-to-r from-brand-orange/5 to-transparent">
              Ten Pilates Center, O seu novo <span className="underline decoration-brand-orange/50 underline-offset-4">espaço de bem-estar</span> no Santa Mônica, em Florianópolis.
            </p>

            <div className="mt-4">
              <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Benefícios</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-4 items-center group cursor-default"
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.18, rotate: 8, backgroundColor: 'rgba(196,90,45,0.22)' }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  >
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <benefit.icon className="w-6 h-6 text-brand-orange" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <motion.h3
                      className="font-bold text-brand-navy text-sm mb-1"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {benefit.title}
                    </motion.h3>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative order-last lg:order-last w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden bg-brand-sand shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-500 cursor-pointer mt-8 sm:mt-0"
          >
            <div className="aspect-[4/5] lg:aspect-[3/4] relative group">
              <video 
                ref={videoRef}
                src="/images/video sobre nos.mp4"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlay}
              />

              {/* Immersive Overlay for Intro Video */}
              <div className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex flex-col translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-bold mb-1 opacity-90">Nosso Estúdio</span>
                  <h3 className="text-xl font-bold font-serif text-white leading-tight">A Experiência Ten</h3>
                </div>
              </div>
              
              <div className="absolute top-3 right-3 md:top-4 md:right-4 flex flex-col gap-2 z-30 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                  aria-label={isMuted ? "Ativar som" : "Silenciar"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                  aria-label={isPlaying ? "Pausar" : "Tocar"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" fill="currentColor" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
                </button>
              </div>

              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-16 h-16 bg-brand-orange/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-md">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

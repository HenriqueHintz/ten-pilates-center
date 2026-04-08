import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const modalidades = [
  {
    title: "Pilates Tradicional",
    imageFilename: "modalidade tradicional.mp4"
  },
  {
    title: "Pilates Reformer",
    imageFilename: "modalidade reformer.mp4"
  },
  {
    title: "Modalidade Metabolic",
    imageFilename: "Modalidade Metabolic.mp4"
  }
];

function ModalityCard({ mod, index }: { mod: any, index: number, key?: React.Key }) {
  const isVideo = mod.imageFilename.endsWith('.mp4');
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
    <motion.div
      key={mod.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(196,90,45,0.15)] transition-all duration-700 ring-1 ring-white/10"
    >
      {/* Media Placeholder (Image or Video) */}
      <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden bg-brand-navy cursor-pointer">
        {isVideo ? (
          <>
            <video 
              ref={videoRef}
              src={`/images/${mod.imageFilename}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
            />
            {/* Soft dark overlay for legibility if needed, but we keep it light */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none transition-opacity group-hover:opacity-30"></div>
            
            {/* Floating Audio / Playback Controls Overlay — Persistent on Mobile */}
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

            {/* Large central play icon when paused */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-16 h-16 bg-brand-orange/90 rounded-full flex items-center justify-center text-white shadow-2xl backdrop-blur-md">
                    <Play className="w-7 h-7 ml-1.5" fill="currentColor" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <>
            <img 
              src={`/images/${mod.imageFilename}`}
              alt={mod.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 font-serif text-sm text-gray-400 flex items-center justify-center text-center"
            />
          </>
        )}

        {/* Immersive Title Overlay with enhanced depth */}
        <div className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end justify-center pointer-events-none transition-all duration-700">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-white text-center leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:scale-105 group-hover:text-brand-orange/90">
            {mod.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <Section id="sobre" bg="stone" className="py-24 md:py-32">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">O Estúdio</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
            Nossas <span className="text-brand-orange italic font-light underline decoration-brand-orange/30 underline-offset-8">Modalidades</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {modalidades.map((mod, index) => (
            <ModalityCard key={mod.title} mod={mod} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

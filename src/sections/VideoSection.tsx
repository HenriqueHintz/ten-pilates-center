import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Play, Pause, Volume2, VolumeX, Instagram } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Section id="instagram" bg="white" className="py-24 md:py-32 min-h-[80vh] flex flex-col justify-center">
      <Container>
        
        {/* Unified Instagram Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Instagram</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
              Acompanhe nosso dia a dia
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Movimento que transforma. Evolução que você sente. <br className="hidden sm:block"/>
              Bem-estar que fica <span className="underline decoration-brand-orange/40 underline-offset-4">no seu feed</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button 
              href="https://www.instagram.com/tenpilatescenter/" 
              variant="outline" 
              className="gap-2 w-full sm:w-auto !border-brand-orange/30 !text-brand-navy hover:!bg-brand-orange hover:!text-white backdrop-blur-sm transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Ver no Instagram
            </Button>
          </motion.div>
        </div>

        {/* Video VSL Element - Expanded Immersive Mode */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:shadow-[0_40px_100px_rgba(10,25,48,0.2)] aspect-[9/16] w-[calc(100%+2rem)] -mx-4 sm:mx-auto sm:aspect-video sm:max-w-4xl bg-brand-navy ring-1 ring-white/10 group">

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] opacity-60"></div>
          <video
            ref={videoRef}
            src="/images/video vsl.mp4"
            className="w-full h-full object-cover sm:object-contain relative z-10"
            muted={isMuted}
            playsInline
            preload="metadata"
            onEnded={handleVideoEnd}
            onClick={togglePlay}
          />

          {/* Permanent Bottom Overlay: Text + Controls */}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between gap-4 z-20 pointer-events-none">
            {/* Text Content */}
            <div className="pointer-events-auto text-left">
              <h3 className="text-white text-lg md:text-3xl font-bold font-serif leading-tight">Conheça nosso espaço</h3>
              <p className="text-xs md:text-base text-gray-200 mt-1 md:mt-2 opacity-90">Descubra a experiência Ten Pilates</p>
            </div>

            {/* Audio & Playback Controls */}
            <div className="flex items-center gap-2 pointer-events-auto shrink-0">
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label={isPlaying ? "Pausar" : "Tocar"}
              >
                {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" /> : <Play className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label={isMuted ? "Ativar som" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
              </button>
            </div>
          </div>

          {/* Big Center Play Button Overlay (only visible initially or when paused) */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 z-10"
                onClick={togglePlay}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-24 md:h-24 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-lg"
                  aria-label="Reproduzir vídeo"
                >
                  <Play className="w-6 h-6 md:w-10 md:h-10 ml-1 md:ml-2" fill="currentColor" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}

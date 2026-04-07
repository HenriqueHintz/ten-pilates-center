import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
const posts = [
  { 
    id: 1, 
    link: "https://www.instagram.com/p/DWzU5uTjxFb/", 
    image: "/images/foto 02.png",
    label: "Aula de Reformer"
  },
  { 
    id: 2, 
    link: "https://www.instagram.com/p/DWv96SjDCFu/", 
    image: "/images/foto 03.png",
    label: "Nosso Espaço"
  },
  { 
    id: 3, 
    link: "https://www.instagram.com/p/DWpBMwzD9Fv/", 
    image: "/images/Foto 01.png",
    label: "Fachada do Estúdio"
  },
  { 
    id: 4, 
    link: "https://www.instagram.com/p/DWmhkjkDxRE/", 
    image: "/images/foto 02.png",
    label: "Treino Personalizado"
  },
  { 
    id: 5, 
    link: "https://www.instagram.com/p/DWWN719jMlg/", 
    image: "/images/foto 03.png",
    label: "Ambiente Premium"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function InstagramSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(index, posts.length - 1));
    setCurrentIndex(clamped);
    const cardWidth = scrollRef.current.scrollWidth / posts.length;
    scrollRef.current.scrollTo({ left: cardWidth * clamped, behavior: 'smooth' });
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  return (
    <section id="instagram" className="py-24 bg-brand-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
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
              Movimento, evolução e bem-estar no seu feed.
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
              variant="primary" 
              className="gap-2 w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5" />
              @tenpilatescenter
            </Button>
          </motion.div>
        </div>

        {/* Carousel wrapper with nav buttons (mobile only) */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="flex-none w-[85vw] sm:w-[45vw] md:w-auto snap-center flex flex-col gap-2"
              >
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative block w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 shadow-md"
                >
                  <motion.img
                    src={post.image}
                    alt={post.label}
                    loading="lazy"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.06 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end gap-2 pb-6"
                  >
                    <div className="flex items-center gap-2 text-white">
                      <Instagram className="w-5 h-5" strokeWidth={1.5} />
                      <span className="font-medium text-sm">{post.label}</span>
                    </div>
                    <span className="text-white/60 text-xs flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Ver no Instagram
                    </span>
                  </motion.div>
                </motion.a>
                {/* Label visible only on mobile below the card */}
                <p className="sm:hidden text-xs text-center text-gray-500 font-medium">{post.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile navigation buttons — hidden on md+ */}
          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Post anterior"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-brand-navy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir para post ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 bg-brand-orange'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === posts.length - 1}
              aria-label="Próximo post"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-brand-navy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

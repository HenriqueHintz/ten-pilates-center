import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open (Handles iOS Safari and deeper bleed issues)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Sobre Nós', href: '#beneficios' },
    { name: 'O Estúdio', href: '#sobre' },
    { name: 'Nosso Dia a Dia', href: '#instagram' },
    { name: 'Como Chegar', href: '#localizacao' },
  ];

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5548991605318&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+aula+experimental.&type=phone_number&app_absent=0";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 z-50">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 text-brand-navy`}>
              <span className="text-brand-orange">Ten</span> Pilates
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-sm font-medium transition-all duration-300 hover:text-brand-orange underline-offset-8 decoration-2 decoration-brand-orange hover:underline ${
                      isScrolled ? 'text-gray-600' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={whatsappUrl} size="sm">
              Agendar Aula
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden z-50 p-2 transition-colors duration-300 text-brand-navy`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 bg-white md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center justify-between h-full p-8 pt-24 pb-12">
              <div className="flex-grow flex flex-col items-center justify-center gap-12 w-full">
                <ul className="flex flex-col items-center gap-8">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      <a
                        href={link.href}
                        className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy hover:text-brand-orange transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full flex justify-center"
                >
                  <Button href={whatsappUrl} size="lg" className="w-full max-w-[320px] justify-center shadow-xl py-5 text-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    Agendar Aula
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Footer to fill the space */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full flex flex-col items-center gap-6 border-t border-gray-100 pt-8"
              >
                <div className="flex gap-6 items-center">
                  <a href="https://www.instagram.com/tenpilatescenter/" target="_blank" className="w-12 h-12 rounded-full bg-brand-sand flex items-center justify-center text-brand-navy hover:bg-brand-orange hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z"></path></svg>
                  </a>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <span className="text-gray-500 text-sm font-medium tracking-wide">Santa Mônica, Florianópolis</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

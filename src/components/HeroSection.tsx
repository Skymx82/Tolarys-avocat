'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

// Variantes d'animation pour le texte avec apparition progressive
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

// Variantes pour le sous-titre qui apparaît après le titre
const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

// Variantes pour le CTA qui apparaît en dernier
const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.8,
    },
  },
};

// Variantes pour les éléments d'illustration
const elementVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function HeroSection() {
  const elementsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useEffect(() => {
    if (!elementsRef.current || !backgroundRef.current) return;

    const elements = elementsRef.current.querySelectorAll('.floating-element');
    const background = backgroundRef.current;
    
    // Animation flottante des éléments décoratifs
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: `${5 + Math.random() * 10}px`,
        x: `${3 + Math.random() * 8}px`,
        rotation: Math.random() * 6 - 3,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.1 * index,
      });
    });
    
    // Animation subtile du fond
    gsap.to(background, {
      backgroundPosition: '100% 100%',
      duration: 15,
      repeat: -1,
      ease: "sine.inOut",
      yoyo: true,
    });

    // Effet parallax léger lors du scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Effet parallax sur les éléments visuels
      if (elementsRef.current) {
        gsap.to(elementsRef.current, {
          y: scrollY * 0.1,
          duration: 0.5,
          ease: "power1.out",
        });
      }
      
      // Détection du scroll pour l'animation progressive
      if (scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <section className="relative min-h-[100vh] flex items-start pt-20 md:pt-24 lg:items-center overflow-hidden px-4 sm:px-0">
      {/* Fond élégant avec gradient subtil */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{ 
          backgroundSize: '200% 200%',
          background: `
            linear-gradient(135deg, rgba(250,248,252,1) 0%, rgba(245,245,250,1) 100%)
          `
        }}
      >
        {/* Lignes de grille subtiles avec couleurs Tolarys */}
        <div className="absolute inset-0 flex flex-col justify-around opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-px bg-gradient-to-r from-[#6B4DE6] via-transparent to-[#3D7BE6]" />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-row justify-around opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-px h-full bg-gradient-to-b from-[#E63976] via-transparent to-[#6B4DE6]" />
          ))}
        </div>
      </div>

      <div ref={containerRef} className="container mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Contenu texte - Version minimaliste */}
          <motion.div
            className="lg:col-span-7 space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1 pt-6 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
          >
            <motion.div variants={titleVariants}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 leading-tight">
                <span className="text-[#6B4DE6] block mb-1 md:inline">Votre cabinet d'avocat</span> <span className="text-gray-800 block md:inline">mérite d'être visible</span> <br className="hidden md:block" />
                <span className="relative inline-block mt-1">
                  <span className="text-gray-800">là où vos clients vous cherchent</span>
                </span>
              </h1>
            </motion.div>
            
            <motion.div variants={subtitleVariants}>
              <p className="text-lg md:text-xl text-[#6B4DE6] mb-8 md:mb-10 font-medium">
                Audit GRATUIT de votre présence en ligne
              </p>
            </motion.div>
            
            <motion.div 
              variants={ctaVariants}
              className="flex flex-col gap-4 pt-4 md:pt-6 w-full sm:w-auto"
            >
              <a 
                href="#audit-form" 
                className="inline-flex items-center justify-center px-6 py-4 sm:py-3 
                text-base font-medium rounded-md text-white bg-[#6B4DE6] hover:bg-[#6B4DE6]/80 
                transition-all shadow-lg hover:shadow-[#6B4DE6]/20 w-full sm:w-auto"
              >
                Recevoir mon audit gratuit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Éléments visuels */}
          <motion.div
            ref={elementsRef}
            className="lg:col-span-5 relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-1 lg:order-2 -mt-6 sm:mt-0 hidden sm:block"
            initial="hidden"
            animate="visible"
            variants={elementVariants}
          >
            {/* Cercle lumineux */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-72 h-72 md:w-80 md:h-80 rounded-full 
                          bg-gradient-to-tr from-blue-900/10 via-blue-700/5 to-blue-500/10 
                          blur-xl"></div>
            
            {/* Éléments juridiques stylisés */}
            <div className="floating-element absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 
                        w-32 h-40 md:w-40 md:h-48
                        bg-white rounded-md shadow-lg p-4 rotate-6">
              <div className="w-full h-full border-2 border-[#6B4DE6]/20 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#6B4DE6]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            
            {/* Document juridique */}
            <div className="floating-element absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 
                        w-48 h-64 md:w-56 md:h-72
                        bg-white rounded-sm shadow-lg p-4 -rotate-3">
              <div className="w-full h-full border border-gray-200 rounded flex flex-col p-2">
                <div className="w-3/4 h-2 bg-gray-300 mb-2 rounded"></div>
                <div className="w-full h-2 bg-gray-200 mb-1 rounded"></div>
                <div className="w-full h-2 bg-gray-200 mb-1 rounded"></div>
                <div className="w-2/3 h-2 bg-gray-200 mb-3 rounded"></div>
                <div className="w-full h-2 bg-gray-200 mb-1 rounded"></div>
                <div className="w-full h-2 bg-gray-200 mb-1 rounded"></div>
                <div className="w-3/4 h-2 bg-gray-200 mb-3 rounded"></div>
                <div className="w-full h-2 bg-gray-200 mb-1 rounded"></div>
                <div className="w-full h-2 bg-gray-200 mb-1 rounded"></div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
            
            {/* Éléments graphiques flottants */}
            <div className="floating-element absolute top-1/3 right-1/3 
                        w-12 h-12 md:w-16 md:h-16 rounded-full 
                        bg-[#E6C13D]/20 blur-sm"></div>
            
            <div className="floating-element absolute bottom-1/4 left-1/3 
                        w-8 h-8 md:w-10 md:h-10 rounded-sm rotate-45 
                        bg-[#6B4DE6]/20 blur-sm"></div>
                        
            <div className="floating-element absolute top-2/3 right-1/4 
                        w-10 h-10 md:w-12 md:h-12 
                        bg-[#3D7BE6]/20 blur-sm
                        rounded-md transform rotate-12"></div>
                        
            <div className="floating-element absolute bottom-1/3 right-1/2 
                        w-6 h-6 md:w-8 md:h-8 
                        bg-[#E63976]/20 blur-sm
                        rounded-full"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}

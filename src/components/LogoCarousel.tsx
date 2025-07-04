'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';

const LogoCarousel = () => {
  // Logos des clients/partenaires
  const logos = [
    { name: 'Cabinet Martin & Associés', src: '/logos/logo1.png' },
    { name: 'Avocats Juridis', src: '/logos/logo2.png' },
    { name: 'Cabinet Droit & Conseil', src: '/logos/logo3.png' },
    { name: 'Legalis Avocats', src: '/logos/logo4.png' },
    { name: 'Cabinet Dupont', src: '/logos/logo5.png' },
    { name: 'Avocats Partenaires', src: '/logos/logo6.png' },
    { name: 'Juristes Associés', src: '/logos/logo7.png' },
    { name: 'Cabinet Légal', src: '/logos/logo8.png' },
  ];
  
  // Références pour l'animation
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  
  // Configuration de l'animation fluide
  useEffect(() => {
    const animateCarousel = async () => {
      // Calculer la largeur totale du carrousel
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const viewportWidth = containerRef.current?.offsetWidth || 0;
      
      // Animer de manière continue avec une transition fluide
      await controls.start({
        x: [-viewportWidth / 2, -containerWidth / 2],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };
    
    animateCarousel();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative" ref={containerRef}>
        <motion.div 
          className="flex space-x-16 items-center"
          animate={controls}
        >
          {/* Premier ensemble de logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 h-16 md:h-20 w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full object-contain"
                // Utiliser un placeholder si les images ne sont pas disponibles
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/150x80?text=${encodeURIComponent(logo.name.substring(0, 10))}`;
                }}
              />
            </div>
          ))}
          
          {/* Répétition des logos pour un défilement continu */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 h-16 md:h-20 w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/150x80?text=${encodeURIComponent(logo.name.substring(0, 10))}`;
                }}
              />
            </div>
          ))}
          
          {/* Troisième ensemble de logos pour assurer un défilement continu */}
          {logos.map((logo, index) => (
            <div
              key={`logo-3-${index}`}
              className="flex-shrink-0 h-16 md:h-20 w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/150x80?text=${encodeURIComponent(logo.name.substring(0, 10))}`;
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;

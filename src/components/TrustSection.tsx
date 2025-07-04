'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LogoCarousel from './LogoCarousel';

const TrustSection = () => {
  // Variants pour les animations
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildrenVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Références pour les animations basées sur le scroll
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expertiseRef, expertiseInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Nous avons supprimé les données des témoignages et des résultats

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#f9f8ff] to-white relative overflow-hidden text-gray-800">
      {/* Lignes de grille subtiles */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-t border-gray-900"></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
         {/* Titre de la section */}
         <div ref={titleRef} className="mb-16 md:mb-24 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Qui nous font <span className="text-[#6B4DE6]">déjà confiance</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Découvrez tout les cabinets d'avocats qui nous font déjà confiance
          </motion.p>
        </div>
        
        {/* Carrousel de logos */}
        <div className="mb-16">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

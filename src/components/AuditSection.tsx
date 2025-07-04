'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import TreasureMap from './TreasureMap';

// Animation pour les éléments qui apparaissent au scroll
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Animation pour les éléments qui apparaissent avec délai
const delayedFadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export default function AuditSection() {
  // Références pour détecter quand les éléments sont visibles
  const titleRef = useRef(null);
  const introRef = useRef(null);
  
  // Détection de la visibilité pour déclencher les animations
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#f9f8ff] to-white relative overflow-hidden text-gray-800">
      {/* Élément de connexion visuelle avec la section précédente */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {/* Lignes de grille subtiles */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-px bg-gradient-to-r from-[#6B4DE6] via-transparent to-[#6B4DE6]" />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de la section */}
        <div ref={titleRef} className="mb-12 md:mb-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Ce que contient votre <span className="text-[#6B4DE6]">audit juridique gratuit</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#6B4DE6] mx-auto rounded-full"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </div>
        
        {/* Introduction avec connexion narrative à la section précédente */}
        <div ref={introRef} className="max-w-3xl mx-auto mb-12 text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-700"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
          >
            <span className="text-[#6B4DE6] font-semibold">Maintenant que vous comprenez l&apos;importance d&apos;être visible en ligne</span>, 
            nous mettons à votre disposition un <span className="font-semibold">audit gratuit et personnalisé</span> de votre présence numérique.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mt-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Cet audit vous permettra de savoir exactement où vous vous situez par rapport aux 78% de clients qui recherchent leur avocat en ligne.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mt-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Découvrez ce que nos experts analyseront pour vous aider à développer votre visibilité en ligne tout en respectant les règles déontologiques.
          </motion.p>
        </div>
        
        {/* Carte au trésor - Animation de défilement */}
        <TreasureMap />
        
        {/* CTA avec transition vers la prochaine étape */}
        <div className="text-center">
          {/* Indicateur de continuité */}
          <motion.div 
            className="mt-8 flex justify-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-2">Continuez pour découvrir</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4DE6] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

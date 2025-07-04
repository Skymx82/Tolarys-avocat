'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

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

// Animation pour les cartes d'audit
const cardVariants: Variants = {
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
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Détection de la visibilité pour déclencher les animations
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

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
        <div ref={introRef} className="max-w-3xl mx-auto mb-16 text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-700"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
          >
            <span className="text-[#6B4DE6] font-semibold">Maintenant que vous comprenez l'importance d'être visible en ligne</span>, 
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
        </div>
        
        {/* Cartes d'audit */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Carte 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#6B4DE6]"
            variants={cardVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-[#6B4DE6]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Analyse de positionnement</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Évaluation de votre visibilité sur les requêtes juridiques pertinentes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Analyse des mots-clés spécifiques à votre domaine de spécialité</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comparaison avec vos principaux concurrents locaux</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Carte 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#6B4DE6]"
            variants={cardVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-[#6B4DE6]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Évaluation de conformité</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Vérification de la conformité avec les règles du CNB</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Analyse de la conformité RGPD de votre site web</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Identification des risques juridiques potentiels</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Carte 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#6B4DE6]"
            variants={cardVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-[#6B4DE6]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Recommandations stratégiques</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Optimisation des formulaires de contact et de prise de rendez-vous</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Stratégies pour améliorer la conversion des visiteurs en clients</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Plan d'action personnalisé pour votre cabinet</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* CTA avec transition vers la prochaine étape */}
        <div ref={ctaRef} className="text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            Prêt à découvrir comment votre cabinet peut se démarquer en ligne ?
          </motion.p>
          <motion.div
            className="inline-block"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#audit-form" 
              className="inline-flex items-center justify-center px-8 py-4 
              text-base font-medium rounded-md text-white bg-[#6B4DE6] hover:bg-[#6B4DE6]/80 
              transition-all shadow-lg hover:shadow-[#6B4DE6]/20"
            >
              Recevoir mon audit gratuit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
          
          {/* Indicateur de continuité */}
          <motion.div 
            className="mt-16 flex justify-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
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

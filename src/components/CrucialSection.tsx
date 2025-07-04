'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants, useAnimation } from 'framer-motion';

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

// Animation pour les statistiques
const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Animation pour les exemples de recherche
const searchExampleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Interface pour les props du composant TypewriterText
interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  isVisible?: boolean;
}

// Effet de frappe au clavier
const TypewriterText = ({ text, delay = 0, className = "", isVisible = false }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    if (!isVisible) {
      setDisplayedText("");
      return;
    }
    
    let currentIndex = 0;
    const fullText = text;
    let typingTimer: NodeJS.Timeout;
    
    // Délai initial avant de commencer à taper
    const initialDelay = setTimeout(() => {
      // Fonction pour ajouter un caractère à la fois
      const typeNextChar = () => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
          
          // Vitesse de frappe aléatoire pour un effet plus naturel
          const typingSpeed = Math.random() * 50 + 30; // Entre 30ms et 80ms
          typingTimer = setTimeout(typeNextChar, typingSpeed);
        }
      };
      
      typeNextChar();
    }, delay);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(typingTimer);
    };
  }, [text, delay, isVisible]);
  
  return <span className={className}>{displayedText}<span className="animate-pulse">|</span></span>;
};

export default function CrucialSection() {
  // État pour l'animation du compteur
  const [count, setCount] = useState(0);
  
  // États pour les animations de frappe
  const [searchQueries] = useState([
    {
      query: "avocat droit de la famille à Paris",
      stats: "Environ 5 400 recherches mensuelles"
    },
    {
      query: "avocat spécialisé divorce près de chez moi",
      stats: "Environ 3 200 recherches mensuelles"
    },
    {
      query: "meilleur avocat droit du travail Lyon",
      stats: "Environ 2 800 recherches mensuelles"
    },
    {
      query: "avocat succession héritage consultation",
      stats: "Environ 1 900 recherches mensuelles"
    }
  ]);
  
  // Références pour détecter quand les éléments sont visibles
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const journeyRef = useRef(null);
  const searchRef = useRef(null);
  
  // Détection de la visibilité pour déclencher les animations
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.3 });
  const searchInView = useInView(searchRef, { once: true, amount: 0.3 });
  
  // Animation du compteur de 0 à 78%
  useEffect(() => {
    if (statsInView) {
      let startTime: number | null = null;
      const duration = 2500; // 2.5 secondes en millisecondes
      const finalValue = 78;
      
      const animateCount = (timestamp: number): void => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        // Calculer la valeur actuelle basée sur le temps écoulé
        const currentValue = Math.min(Math.floor((progress / duration) * finalValue), finalValue);
        setCount(currentValue);
        
        // Continuer l'animation jusqu'à atteindre la durée ou la valeur finale
        if (progress < duration && currentValue < finalValue) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(finalValue); // S'assurer que la valeur finale est exactement 78
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [statsInView]);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden text-gray-800">
      {/* Fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f7fc] to-white opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de la section */}
        <div ref={titleRef} className="mb-16 md:mb-24 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Pourquoi c'est <span className="text-[#6B4DE6]">crucial</span> pour votre cabinet
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#6B4DE6] mx-auto rounded-full"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </div>
        
        {/* Statistiques */}
        <div 
          ref={statsRef} 
          className="mb-20 md:mb-28"
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto text-center"
            variants={statVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            <div className="text-5xl md:text-6xl font-bold text-[#6B4DE6] mb-4">{count}%</div>
            <p className="text-xl md:text-2xl text-gray-700">des justiciables recherchent leur avocat en ligne avant de prendre rendez-vous</p>
          </motion.div>
        </div>
        
        {/* Parcours client */}
        <div 
          ref={journeyRef}
          className="mb-20 md:mb-28"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
          >
            Le parcours de vos clients potentiels
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Étape 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#6B4DE6]"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={journeyInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#6B4DE6]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-[#6B4DE6] font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-lg mb-3 text-center">Besoin juridique</h4>
              <p className="text-gray-600 text-center">Un problème juridique survient, créant un besoin urgent de conseils professionnels</p>
            </motion.div>
            
            {/* Étape 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#6B4DE6]"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={journeyInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#6B4DE6]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-[#6B4DE6] font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold text-lg mb-3 text-center">Recherche en ligne</h4>
              <p className="text-gray-600 text-center">Recherche immédiate sur Google pour trouver un avocat spécialisé dans leur problème</p>
            </motion.div>
            
            {/* Étape 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#6B4DE6]"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={journeyInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#6B4DE6]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-[#6B4DE6] font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-lg mb-3 text-center">Sélection et contact</h4>
              <p className="text-gray-600 text-center">Évaluation des avocats trouvés en ligne et prise de contact avec les plus pertinents</p>
            </motion.div>
          </div>
        </div>
        
        {/* Exemples de recherches */}
        <div ref={searchRef}>
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={searchInView ? "visible" : "hidden"}
          >
            Ce que vos clients recherchent
          </motion.h3>
          
          <div className="max-w-3xl mx-auto">
            {/* Exemples de recherche avec effet de frappe */}
            {searchQueries.map((item, index) => (
              <motion.div 
                key={`search-${index}`}
                className="mb-4 bg-gray-50 rounded-lg p-4 flex items-center"
                variants={searchExampleVariants}
                initial="hidden"
                animate={searchInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <div className="mr-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="w-full">
                  <p className="font-medium">
                    <TypewriterText 
                      text={item.query} 
                      delay={500 + index * 1000} 
                      isVisible={searchInView} 
                    />
                  </p>
                  <motion.p 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={searchInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + (index * 1000 + item.query.length * 50) / 1000 }}
                  >
                    {item.stats}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

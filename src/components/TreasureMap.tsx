'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants, useScroll, useTransform } from 'framer-motion';

// Interface pour les éléments du trésor
interface TreasureItem {
  id: number;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

// Variants pour les animations
const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

const treasureVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const TreasureMap = () => {
  // Références pour détecter quand les éléments sont visibles
  const mapRef = useRef(null);
  const treasureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // État pour suivre quel trésor est actuellement visible
  const [activeIndex, setActiveIndex] = useState(-1);
  
  // Données des trésors
  const treasures: TreasureItem[] = [
    {
      id: 1,
      title: "Analyse de positionnement",
      items: [
        "Évaluation de votre visibilité sur les requêtes juridiques pertinentes",
        "Analyse des mots-clés spécifiques à votre domaine de spécialité",
        "Comparaison avec vos principaux concurrents locaux"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Évaluation de conformité",
      items: [
        "Vérification de la conformité avec les règles du CNB",
        "Analyse de la conformité RGPD de votre site web",
        "Identification des risques juridiques potentiels"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Recommandations stratégiques",
      items: [
        "Optimisation des formulaires de contact et de prise de rendez-vous",
        "Stratégies pour améliorer la conversion des visiteurs en clients",
        "Plan d'action personnalisé pour votre cabinet"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  // Utiliser useScroll pour détecter le défilement
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"]
  });

  // Vérifier quels éléments sont visibles lors du défilement
  useEffect(() => {
    const checkVisibility = () => {
      treasureRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (isVisible && index > activeIndex) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Vérifier au chargement initial
    
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [activeIndex]);

  return (
    <div ref={mapRef} className="relative py-12 md:py-24">
      {/* Chemin de la carte au trésor */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 md:w-2 bg-gray-100 transform -translate-x-1/2 z-0"></div>
      
      <div className="relative z-10">
        {treasures.map((treasure, index) => (
          <div 
            key={treasure.id}
            ref={(el: HTMLDivElement | null) => {
              if (el) treasureRefs.current[index] = el;
            }}
            className="mb-32 relative"
          >
            {/* Point sur le chemin */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div 
                className={`w-6 h-6 rounded-full ${index <= activeIndex ? 'bg-[#6B4DE6]' : 'bg-gray-300'} border-4 border-white shadow-md`}
                initial={{ scale: 0 }}
                animate={index <= activeIndex ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </div>
            
            {/* Contenu du trésor */}
            <motion.div 
              className={`max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
              variants={treasureVariants}
              initial="hidden"
              animate={index <= activeIndex ? "visible" : "hidden"}
              transition={{ delay: index * 0.3 }}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center mb-4">
                  {treasure.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800">{treasure.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {treasure.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={index <= activeIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.3 + itemIndex * 0.15 }}
                  >
                    <svg className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
        
        {/* Trésor final (CTA) */}
        <div className="text-center relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              className={`w-8 h-8 rounded-full ${activeIndex >= treasures.length - 1 ? 'bg-[#6B4DE6]' : 'bg-gray-300'} border-4 border-white shadow-md flex items-center justify-center`}
              initial={{ scale: 0 }}
              animate={activeIndex >= treasures.length - 1 ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.5, delay: treasures.length * 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </motion.div>
          </div>
          
          <motion.div 
            className="max-w-2xl mx-auto pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={activeIndex >= treasures.length - 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Prêt à découvrir comment votre cabinet peut se démarquer en ligne ?
            </p>
            <a 
              href="/audit" 
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
        </div>
      </div>
    </div>
  );
};

export default TreasureMap;

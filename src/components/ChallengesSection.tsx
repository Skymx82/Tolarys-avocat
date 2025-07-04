'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ChallengesSection = () => {
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
  const [challengesRef, challengesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ethicsRef, ethicsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [credibilityRef, credibilityInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Données des défis
  const challenges = [
    {
      title: "Concurrence accrue",
      description: "Plus de 70 000 avocats en France se disputent la visibilité en ligne, avec une concentration particulière dans les grandes villes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Attentes des clients",
      description: "Les justiciables s'attendent à trouver facilement des informations sur votre expertise et à pouvoir vous contacter rapidement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Évolution constante",
      description: "Les algorithmes de recherche et les bonnes pratiques web évoluent rapidement, nécessitant une adaptation continue.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  // Données des contraintes déontologiques
  const ethicsPoints = [
    {
      title: "Publicité encadrée",
      description: "Le Conseil National des Barreaux autorise la communication mais encadre strictement la publicité des avocats.",
      solution: "Nous créons des contenus informatifs qui respectent ces règles tout en valorisant votre expertise."
    },
    {
      title: "Protection du secret professionnel",
      description: "Impossible de mentionner des clients ou affaires spécifiques dans vos communications.",
      solution: "Nous mettons en avant votre expertise de manière générale, avec des exemples anonymisés et des cas d'école."
    },
    {
      title: "Dignité et modération",
      description: "Votre communication doit rester sobre et digne, sans promesses de résultats.",
      solution: "Notre approche minimaliste et professionnelle garantit le respect de ces principes."
    }
  ];

  // Données sur l'importance d'un site professionnel
  const credibilityPoints = [
    {
      percentage: "89%",
      description: "des clients potentiels consultent votre site web avant de vous contacter"
    },
    {
      percentage: "75%",
      description: "jugent de votre professionnalisme à travers la qualité de votre site"
    },
    {
      percentage: "63%",
      description: "des visiteurs quittent un site qui n'est pas adapté aux mobiles"
    }
  ];

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
            Comprendre les <span className="text-[#6B4DE6]">enjeux digitaux</span> pour les avocats
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Naviguer dans l'univers numérique tout en respectant les règles déontologiques
          </motion.p>
        </div>
        
        {/* Défis spécifiques */}
        <div 
          ref={challengesRef} 
          className="mb-20 md:mb-28"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
          >
            Les défis spécifiques aux avocats en ligne
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={fadeInUpVariants}
              >
                <div className="flex justify-center mb-4">
                  {challenge.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">{challenge.title}</h4>
                <p className="text-gray-700 text-center">{challenge.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Contraintes déontologiques */}
        <div 
          ref={ethicsRef}
          className="mb-20 md:mb-28"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ethicsInView ? "visible" : "hidden"}
          >
            Respecter les contraintes déontologiques
          </motion.h3>
          
          <motion.div
            className="space-y-8"
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={ethicsInView ? "visible" : "hidden"}
          >
            {ethicsPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
                variants={fadeInUpVariants}
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-12 h-12 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-[#6B4DE6]">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h4>
                    <p className="text-gray-700 mb-4">{point.description}</p>
                    <div className="bg-[#f9f8ff] p-4 rounded-md border-l-4 border-[#6B4DE6]">
                      <p className="text-gray-700"><span className="font-semibold">Notre solution :</span> {point.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Importance d'un site professionnel */}
        <div ref={credibilityRef}>
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={credibilityInView ? "visible" : "hidden"}
          >
            L'importance d'un site professionnel pour votre crédibilité
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={credibilityInView ? "visible" : "hidden"}
          >
            {credibilityPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm text-center"
                variants={fadeInUpVariants}
              >
                <h4 className="text-4xl font-bold text-[#6B4DE6] mb-4">{point.percentage}</h4>
                <p className="text-gray-700">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="mt-12 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={credibilityInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Un site web professionnel n'est pas seulement une vitrine, c'est un outil essentiel pour établir votre crédibilité et rassurer vos clients potentiels sur votre expertise et votre professionnalisme.
            </p>
            <a 
              href="#audit-form" 
              className="inline-flex items-center justify-center px-8 py-4 
              text-base font-medium rounded-md text-white bg-[#6B4DE6] hover:bg-[#6B4DE6]/80 
              transition-all shadow-lg hover:shadow-[#6B4DE6]/20"
            >
              Évaluer ma présence en ligne
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

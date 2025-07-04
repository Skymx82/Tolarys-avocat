'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  // Données des témoignages
  const testimonials = [
    {
      name: "Me Sophie Durand",
      role: "Avocate en droit de la famille",
      quote: "Grâce à Tolarys, mon cabinet a vu une augmentation de 40% des demandes de consultation en 3 mois. Leur expertise spécifique au domaine juridique fait toute la différence.",
      image: "/testimonial-1.jpg" // À remplacer par de vraies images
    },
    {
      name: "Me Thomas Leroy",
      role: "Avocat en droit des affaires",
      quote: "La visibilité de mon cabinet sur les requêtes spécifiques à ma pratique s'est considérablement améliorée. Je recommande vivement leur audit gratuit qui a été le point de départ de cette transformation.",
      image: "/testimonial-2.jpg"
    },
    {
      name: "Me Claire Martin",
      role: "Avocate en droit immobilier",
      quote: "L'approche sur-mesure de Tolarys pour les avocats m'a permis d'attirer une clientèle plus qualifiée. Leur compréhension des enjeux juridiques est un atout majeur.",
      image: "/testimonial-3.jpg"
    }
  ];

  // Données des résultats
  const results = [
    {
      metric: "+127%",
      description: "d'augmentation moyenne de visibilité sur les requêtes juridiques ciblées",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      metric: "+68%",
      description: "d'augmentation des demandes de consultation qualifiées",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      metric: "93%",
      description: "de nos clients avocats renouvellent leur confiance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

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
            Pourquoi nous <span className="text-[#6B4DE6]">faire confiance</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Découvrez pourquoi les cabinets d'avocats nous choisissent pour développer leur présence en ligne
          </motion.p>
        </div>
        
        {/* Témoignages */}
        <div 
          ref={testimonialsRef} 
          className="mb-20 md:mb-28"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={fadeInUpVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Notre expertise */}
        <div 
          ref={expertiseRef}
          className="mb-20 md:mb-28"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={expertiseInView ? "visible" : "hidden"}
          >
            Notre expertise exclusive dans le domaine juridique
          </motion.h3>
          
          <motion.div
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={expertiseInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  Spécialisation juridique exclusive
                </h4>
                <p className="text-gray-700 ml-11">
                  Contrairement aux agences généralistes, nous nous concentrons exclusivement sur le secteur juridique depuis plus de 8 ans, avec une compréhension approfondie des règles déontologiques et des spécificités du marché.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </span>
                  Conformité CNB et RGPD garantie
                </h4>
                <p className="text-gray-700 ml-11">
                  Nos stratégies respectent scrupuleusement les règles du Conseil National des Barreaux et les exigences RGPD, vous évitant tout risque déontologique ou juridique.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  Expertise en requêtes juridiques spécifiques
                </h4>
                <p className="text-gray-700 ml-11">
                  Notre base de données exclusive de plus de 15 000 requêtes juridiques nous permet de cibler précisément les recherches de vos clients potentiels selon votre spécialité.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  Approche non-concurrentielle
                </h4>
                <p className="text-gray-700 ml-11">
                  Nous ne travaillons jamais avec deux cabinets concurrents sur une même zone géographique et spécialité, garantissant l'exclusivité de nos services pour votre cabinet.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Résultats obtenus */}
        <div ref={resultsRef}>
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
          >
            Des résultats concrets pour les cabinets d'avocats
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
          >
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm text-center"
                variants={fadeInUpVariants}
              >
                <div className="flex justify-center mb-4">
                  {result.icon}
                </div>
                <h4 className="text-3xl font-bold text-[#6B4DE6] mb-2">{result.metric}</h4>
                <p className="text-gray-700">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

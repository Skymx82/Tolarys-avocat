'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ChallengesSection = () => {
  // Variants pour les animations
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] // Ease out quint pour un effet plus dynamique
      }
    }
  };

  const highlightVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const floatVariants: Variants = {
    hidden: { y: 0 },
    visible: { 
      y: [-5, 5, -5],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }
    }
  };
  
  const pulseVariants: Variants = {
    hidden: { scale: 1 },
    visible: { 
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };
  
  const slideInVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // État pour le carrousel
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Références pour les animations basées sur le scroll
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [challengesRef, challengesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ethicsRef, ethicsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Fonction pour naviguer vers une slide spécifique
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const slideWidth = 250 + 16; // largeur de slide + espace (min-w-[250px] + space-x-4)
      carouselRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };
  
  // Détecter le changement de slide lors du défilement manuel
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const slideWidth = 250 + 16; // largeur de slide + espace
        const newActiveSlide = Math.round(scrollPosition / slideWidth);
        if (newActiveSlide !== activeSlide) {
          setActiveSlide(newActiveSlide);
        }
      }
    };
    
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSlide]);

  // Données des défis simplifiées
  const challenges = [
    {
      title: "70 000+",
      highlight: "Concurrence",
      description: "Avocats se disputent la visibilité en ligne",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Instantané",
      highlight: "Impatience",
      description: "Les clients veulent des réponses immédiates",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Constante",
      highlight: "Évolution",
      description: "Les algorithmes changent, votre site doit s'adapter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6B4DE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  // Données des contraintes déontologiques simplifiées
  const ethicsPoints = [
    {
      title: "Publicité encadrée",
      key: "Communication informative sans démarchage",
      solution: "Contenus qui valorisent votre expertise sans publicité agressive"
    },
    {
      title: "Secret professionnel",
      key: "Pas de mention de clients spécifiques",
      solution: "Expertise générale et cas d'école anonymisés"
    },
    {
      title: "Dignité professionnelle",
      key: "Communication sobre, sans promesses",
      solution: "Design élégant et contenu mesuré"
    }
  ];

  // Références individuelles pour chaque point d'éthique (pour animation progressive au scroll)
  const ethics1Ref = useRef(null);
  const ethics2Ref = useRef(null);
  const ethics3Ref = useRef(null);
  const [ethics1InView, setEthics1InView] = useState(false);
  const [ethics2InView, setEthics2InView] = useState(false);
  const [ethics3InView, setEthics3InView] = useState(false);
  
  // Observer pour détecter quand les éléments entrent dans la vue
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50px 0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === ethics1Ref.current) {
          setEthics1InView(entry.isIntersecting);
        } else if (entry.target === ethics2Ref.current) {
          setEthics2InView(entry.isIntersecting);
        } else if (entry.target === ethics3Ref.current) {
          setEthics3InView(entry.isIntersecting);
        }
      });
    }, options);

    if (ethics1Ref.current) observer.observe(ethics1Ref.current);
    if (ethics2Ref.current) observer.observe(ethics2Ref.current);
    if (ethics3Ref.current) observer.observe(ethics3Ref.current);

    return () => {
      if (ethics1Ref.current) observer.unobserve(ethics1Ref.current);
      if (ethics2Ref.current) observer.unobserve(ethics2Ref.current);
      if (ethics3Ref.current) observer.unobserve(ethics3Ref.current);
    };
  }, []);
  
  // Statistiques percutantes
  const stats = [
    {
      percentage: "89%",
      description: "consultent votre site avant contact"
    },
    {
      percentage: "75%",
      description: "jugent votre professionnalisme par votre site"
    },
    {
      percentage: "63%",
      description: "quittent un site non adapté aux mobiles"
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
        
        {/* Défis spécifiques - visible uniquement sur desktop */}
        <div 
          ref={challengesRef} 
          className="hidden md:block mb-20 md:mb-28"
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
            variants={staggerContainerVariants}
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
          
          <div className="space-y-12">
            {/* Point 1 */}
            <div ref={ethics1Ref}>
              <motion.div
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={ethics1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Élément décoratif animé en arrière-plan */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 bg-[#6B4DE6]/5 rounded-full -mr-8 -mt-8 z-0"
                  variants={pulseVariants}
                  animate="visible"
                />
                
                <div className="flex flex-col md:flex-row md:items-start relative z-10">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(107, 77, 230, 0.2)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-xl font-bold text-[#6B4DE6]">1</span>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <motion.h4 
                      className="text-xl font-semibold text-gray-800 mb-2"
                      variants={slideInVariants}
                      initial="hidden"
                      animate={ethics1InView ? "visible" : "hidden"}
                    >
                      {ethicsPoints[0].title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-700 mb-4"
                      variants={slideInVariants}
                      initial="hidden"
                      animate={ethics1InView ? "visible" : "hidden"}
                      transition={{ delay: 0.1 }}
                    >
                      {ethicsPoints[0].key}
                    </motion.p>
                    <motion.div 
                      className="bg-[#f9f8ff] p-4 rounded-md border-l-4 border-[#6B4DE6] transform-gpu"
                      initial={{ opacity: 0, y: 20 }}
                      animate={ethics1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(107, 77, 230, 0.15)' }}
                    >
                      <p className="text-gray-700">
                        <motion.span 
                          className="font-semibold text-[#6B4DE6]"
                          animate={{ color: ['#6B4DE6', '#8A70FF', '#6B4DE6'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          Notre solution :
                        </motion.span> {ethicsPoints[0].solution}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Point 2 */}
            <div ref={ethics2Ref}>
              <motion.div
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={ethics2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Élément décoratif animé en arrière-plan */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 bg-[#6B4DE6]/5 rounded-full -mr-8 -mt-8 z-0"
                  variants={pulseVariants}
                  animate="visible"
                />
                
                <div className="flex flex-col md:flex-row md:items-start relative z-10">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(107, 77, 230, 0.2)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-xl font-bold text-[#6B4DE6]">2</span>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <motion.h4 
                      className="text-xl font-semibold text-gray-800 mb-2"
                      variants={slideInVariants}
                      initial="hidden"
                      animate={ethics2InView ? "visible" : "hidden"}
                    >
                      {ethicsPoints[1].title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-700 mb-4"
                      variants={slideInVariants}
                      initial="hidden"
                      animate={ethics2InView ? "visible" : "hidden"}
                      transition={{ delay: 0.1 }}
                    >
                      {ethicsPoints[1].key}
                    </motion.p>
                    <motion.div 
                      className="bg-[#f9f8ff] p-4 rounded-md border-l-4 border-[#6B4DE6] transform-gpu"
                      initial={{ opacity: 0, y: 20 }}
                      animate={ethics2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(107, 77, 230, 0.15)' }}
                    >
                      <p className="text-gray-700">
                        <motion.span 
                          className="font-semibold text-[#6B4DE6]"
                          animate={{ color: ['#6B4DE6', '#8A70FF', '#6B4DE6'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          Notre solution :
                        </motion.span> {ethicsPoints[1].solution}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Point 3 */}
            <div ref={ethics3Ref}>
              <motion.div
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={ethics3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Élément décoratif animé en arrière-plan */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 bg-[#6B4DE6]/5 rounded-full -mr-8 -mt-8 z-0"
                  variants={pulseVariants}
                  animate="visible"
                />
                
                <div className="flex flex-col md:flex-row md:items-start relative z-10">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-[#6B4DE6]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(107, 77, 230, 0.2)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-xl font-bold text-[#6B4DE6]">3</span>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <motion.h4 
                      className="text-xl font-semibold text-gray-800 mb-2"
                      variants={slideInVariants}
                      initial="hidden"
                      animate={ethics3InView ? "visible" : "hidden"}
                    >
                      {ethicsPoints[2].title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-700 mb-4"
                      variants={slideInVariants}
                      initial="hidden"
                      animate={ethics3InView ? "visible" : "hidden"}
                      transition={{ delay: 0.1 }}
                    >
                      {ethicsPoints[2].key}
                    </motion.p>
                    <motion.div 
                      className="bg-[#f9f8ff] p-4 rounded-md border-l-4 border-[#6B4DE6] transform-gpu"
                      initial={{ opacity: 0, y: 20 }}
                      animate={ethics3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(107, 77, 230, 0.15)' }}
                    >
                      <p className="text-gray-700">
                        <motion.span 
                          className="font-semibold text-[#6B4DE6]"
                          animate={{ color: ['#6B4DE6', '#8A70FF', '#6B4DE6'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          Notre solution :
                        </motion.span> {ethicsPoints[2].solution}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Importance d'un site professionnel */}
        <div ref={statsRef}>
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            L'importance d'un site professionnel pour votre crédibilité
          </motion.h3>
          
          {/* Version desktop: grid normale */}
          <motion.div
            className="hidden md:grid md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((point, index) => (
              <motion.div
                key={`desktop-${index}`}
                className="bg-white rounded-lg p-6 shadow-sm text-center"
                variants={fadeInUpVariants}
              >
                <h4 className="text-4xl font-bold text-[#6B4DE6] mb-4">{point.percentage}</h4>
                <p className="text-gray-700">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Version mobile: carrousel horizontal */}
          <div className="md:hidden">
            <motion.div 
              className="overflow-x-auto scrollbar-hide pb-4"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              ref={carouselRef}
            >
              <div className="flex space-x-4 w-max px-4">
                {stats.map((point, index) => (
                  <motion.div
                    key={`mobile-${index}`}
                    className="bg-white rounded-lg p-6 shadow-sm text-center min-w-[250px] flex-shrink-0"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={statsInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-4xl font-bold text-[#6B4DE6] mb-4">{point.percentage}</h4>
                    <p className="text-gray-700">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Points de navigation en dehors de la zone de défilement */}
            <motion.div 
              className="flex justify-center mt-4 space-x-2"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {stats.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-[#6B4DE6] scale-125' : 'bg-[#6B4DE6] opacity-40'}`}
                  aria-label={`Voir statistique ${index + 1}`}
                ></button>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="mt-12 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Un site web professionnel n'est pas seulement une vitrine, c'est un outil essentiel pour établir votre crédibilité et rassurer vos clients potentiels sur votre expertise et votre professionnalisme.
            </p>
            <a 
              href="/audit" 
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

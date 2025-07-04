'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FaqSection = () => {
  // État pour gérer l'ouverture/fermeture des questions
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fonction pour basculer l'état d'une question
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        staggerChildren: 0.15
      }
    }
  };

  // Références pour les animations basées sur le scroll
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Données des questions fréquentes
  const faqItems = [
    {
      question: "Comment respecter la déontologie tout en étant visible en ligne ?",
      answer: "Pour respecter la déontologie tout en optimisant votre visibilité en ligne, privilégiez un contenu informatif de qualité plutôt que promotionnel. Mettez en avant votre expertise juridique à travers des articles de fond, des analyses de jurisprudence ou des explications de textes de loi. Évitez toute forme de démarchage ou de publicité comparative. Assurez-vous que votre communication reste sobre, digne et véridique, conformément aux règles du Conseil National des Barreaux. Chez Tolarys, nous vous accompagnons pour créer une stratégie de contenu qui respecte ces principes tout en améliorant votre visibilité."
    },
    {
      question: "Puis-je mentionner mes affaires gagnées sur mon site ?",
      answer: "Non, le secret professionnel et les règles déontologiques interdisent généralement aux avocats de mentionner spécifiquement leurs affaires gagnées, même anonymisées. Vous pouvez cependant évoquer votre expérience de manière générale, par exemple en mentionnant vos domaines d'expertise ou en présentant des cas d'école fictifs. Une alternative consiste à mettre en avant vos compétences et connaissances à travers des publications juridiques, des interventions dans des conférences ou des formations dispensées. Notre approche chez Tolarys respecte ces contraintes tout en valorisant efficacement votre expertise."
    },
    {
      question: "Comment me démarquer des autres cabinets de ma spécialité ?",
      answer: "Pour vous démarquer, misez sur votre valeur ajoutée unique : votre parcours spécifique, vos formations complémentaires, vos domaines de niche au sein de votre spécialité, ou encore votre approche particulière avec les clients. Créez du contenu de qualité qui démontre votre expertise pointue. Soignez l'expérience utilisateur de votre site web et votre présence sur les plateformes juridiques spécialisées. Nous vous aidons à identifier et mettre en valeur vos points forts distinctifs, tout en respectant les règles déontologiques, pour créer un positionnement unique et mémorable."
    },
    {
      question: "Quels sont les éléments essentiels d'un site d'avocat efficace ?",
      answer: "Un site d'avocat efficace doit comporter : une présentation claire de vos domaines d'expertise et services, des contenus informatifs démontrant votre maîtrise du droit, une interface intuitive et responsive, des témoignages clients (anonymisés et conformes à la déontologie), des informations pratiques (coordonnées, horaires, modalités de consultation), un formulaire de contact sécurisé, et des mentions légales complètes incluant votre numéro d'inscription au barreau. La sobriété du design, la rapidité de chargement et l'accessibilité sont également essentielles pour refléter votre professionnalisme."
    },
    {
      question: "Comment mesurer l'efficacité de ma présence en ligne ?",
      answer: "L'efficacité de votre présence en ligne se mesure par plusieurs indicateurs : le nombre de demandes de consultation générées via votre site, votre positionnement sur les requêtes pertinentes pour votre activité, le taux de rebond et le temps passé sur votre site, l'engagement sur vos contenus, et la croissance de votre notoriété en ligne. Nous mettons en place des outils d'analyse conformes au RGPD pour suivre ces métriques et vous fournissons des rapports réguliers pour ajuster votre stratégie. L'objectif n'est pas seulement d'attirer du trafic, mais de générer des contacts qualifiés correspondant à votre clientèle cible."
    },
    {
      question: "La présence sur les réseaux sociaux est-elle indispensable pour un avocat ?",
      answer: "La présence sur les réseaux sociaux n'est pas indispensable mais peut être bénéfique si elle est gérée professionnellement et en accord avec la déontologie. Certaines plateformes comme LinkedIn sont particulièrement adaptées pour les avocats, permettant de partager du contenu juridique de qualité et de développer votre réseau professionnel. D'autres réseaux peuvent être pertinents selon votre spécialité et votre cible. L'essentiel est de maintenir une cohérence entre vos différents canaux de communication et de privilégier la qualité à la quantité. Nous vous conseillons sur les plateformes les plus adaptées à votre pratique et vous aidons à définir une ligne éditoriale appropriée."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden text-gray-800">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f7fc] to-white opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de la section */}
        <div ref={titleRef} className="mb-16 md:mb-20 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Questions <span className="text-[#6B4DE6]">fréquentes</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Réponses aux interrogations spécifiques des avocats sur leur présence en ligne
          </motion.p>
        </div>
        
        {/* Liste des questions */}
        <motion.div
          ref={faqRef}
          className="max-w-4xl mx-auto"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              variants={fadeInUpVariants}
            >
              <button
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-8">{item.question}</h3>
                <span className="text-[#6B4DE6] flex-shrink-0">
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="py-2 text-gray-700 leading-relaxed">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Appel à l'action final */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Vous avez d'autres questions sur la visibilité en ligne de votre cabinet d'avocat ?
          </p>
          <a 
            href="#audit-form" 
            className="inline-flex items-center justify-center px-8 py-4 
            text-base font-medium rounded-md text-white bg-[#6B4DE6] hover:bg-[#6B4DE6]/80 
            transition-all shadow-lg hover:shadow-[#6B4DE6]/20"
          >
            Demander un audit personnalisé
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

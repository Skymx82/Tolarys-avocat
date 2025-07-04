'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function AuditPage() {
  // Référence pour les animations basées sur le scroll
  const [pageRef, pageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  // États pour le formulaire multi-étapes
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  // États du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    speciality: '',
    website: '',
    message: '',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  // État pour suivre si le formulaire est en cours d'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gérer le changement de la case à cocher
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Navigation entre les étapes
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Vérification de la validité de l'étape actuelle
  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name && formData.email;
    } else if (currentStep === 2) {
      return formData.speciality !== '';
    }
    return true;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Vérifier si le consentement est donné
    if (!formData.consent) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Veuillez accepter notre politique de confidentialité pour continuer.'
      });
      return;
    }
    
    // Activer l'état de chargement
    setIsSubmitting(true);
    
    // Mettre à jour le statut pendant l'envoi
    setFormStatus({
      submitted: false,
      error: false,
      message: 'Envoi en cours...'
    });
    
    try {
      // Récupérer le formulaire
      const form = e.currentTarget;
      
      // Créer un objet FormData pour l'envoi
      const formDataObj = new FormData(form);
      
      // Ajouter l'adresse email de destination (votre adresse Gmail)
      formDataObj.append('_to', 'mattias.mathevon@gmail.com');
      
      // Ajouter un sujet personnalisé
      formDataObj.append('_subject', 'Nouvelle demande d\'audit de site web avocat');
      
      // Envoyer le formulaire via FormSubmit
      const response = await fetch('https://formsubmit.co/mattias.mathevon@gmail.com', {
        method: 'POST',
        body: formDataObj,
      });
      
      if (response.ok) {
        // Mettre à jour le statut après succès
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Votre demande d\'audit a été envoyée avec succès. Nous vous contacterons sous 24 à 48 heures.'
        });
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          speciality: '',
          website: '',
          message: '',
          consent: false
        });
        
        // Réinitialiser le formulaire HTML
        form.reset();
        
        // Désactiver l'état de chargement
        setIsSubmitting(false);
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      
      // Mettre à jour le statut après erreur
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer ou nous contacter directement.'
      });
      
      // Désactiver l'état de chargement
      setIsSubmitting(false);
    }
  };

  // Variants pour les animations
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-white via-[#f9f8ff] to-white py-16 md:py-24 text-gray-800">
      <motion.div 
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-[#6B4DE6] mb-6 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Demandez votre audit juridique gratuit</h1>
            <div className="w-24 h-1 bg-[#6B4DE6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Obtenez une analyse complète de votre présence en ligne et des recommandations personnalisées pour améliorer votre visibilité tout en respectant les règles déontologiques.
            </p>
          </div>

          {/* Indicateur de progression */}
          <div className="mb-8">
            <div className="flex justify-between items-center max-w-md mx-auto">
              {[...Array(totalSteps)].map((_, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      idx + 1 === currentStep 
                        ? 'bg-[#6B4DE6] text-white' 
                        : idx + 1 < currentStep 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {idx + 1 < currentStep ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <span className="text-xs mt-1 text-gray-500">
                    {idx === 0 ? 'Identité' : idx === 1 ? 'Activité' : 'Message'}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative max-w-md mx-auto mt-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-[#6B4DE6] rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden">
            {formStatus.submitted ? (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Demande envoyée avec succès !</h3>
                <p className="text-gray-700 mb-6">
                  {formStatus.message}
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#6B4DE6] text-white font-medium rounded-md hover:bg-[#5b41c7] transition-colors duration-300"
                >
                  Retourner à l'accueil
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-6">Vos informations</h3>
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition-colors duration-300"
                          placeholder="Me. Jean Dupont"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition-colors duration-300"
                          placeholder="jean.dupont@cabinet-juridique.fr"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition-colors duration-300"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </motion.div>
                  )}
                  
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-6">Votre activité</h3>
                      
                      <div>
                        <label htmlFor="speciality" className="block text-sm font-medium text-gray-700 mb-1">Spécialité juridique *</label>
                        <select
                          id="speciality"
                          name="speciality"
                          value={formData.speciality}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition-colors duration-300"
                        >
                          <option value="">Sélectionnez votre spécialité</option>
                          <option value="Droit des affaires">Droit des affaires</option>
                          <option value="Droit de la famille">Droit de la famille</option>
                          <option value="Droit immobilier">Droit immobilier</option>
                          <option value="Droit pénal">Droit pénal</option>
                          <option value="Droit du travail">Droit du travail</option>
                          <option value="Droit de la propriété intellectuelle">Droit de la propriété intellectuelle</option>
                          <option value="Droit fiscal">Droit fiscal</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site web actuel (si existant)</label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition-colors duration-300"
                          placeholder="https://www.votrecabinet.fr"
                        />
                      </div>
                    </motion.div>
                  )}
                  
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-6">Votre message</h3>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Précisez votre demande (facultatif)</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition-colors duration-300"
                          placeholder="Partagez-nous vos objectifs ou questions spécifiques..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={formData.consent}
                            onChange={handleCheckboxChange}
                            required
                            className="w-4 h-4 text-[#6B4DE6] border-gray-300 rounded focus:ring-[#6B4DE6]"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="consent" className="text-gray-700">
                            J'accepte que mes données soient utilisées uniquement pour me recontacter dans le cadre de ma demande d'audit. *
                          </label>
                        </div>
                      </div>
                      
                      {formStatus.error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-red-700">
                                {formStatus.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Navigation entre les étapes */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                    >
                      Précédent
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={`px-6 py-2 bg-[#6B4DE6] text-white rounded-md hover:bg-[#5b41c7] transition-colors duration-300 ${
                        !isStepValid() ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-2 bg-[#6B4DE6] text-white rounded-md hover:bg-[#5b41c7] transition-colors duration-300 flex items-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        'Demander mon audit gratuit'
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
          
          {/* Informations supplémentaires */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Nous respectons votre vie privée. Vos données ne seront jamais partagées avec des tiers.</p>
            <p className="mt-2">
              <span className="font-medium">Délai de réponse :</span> Nous vous contacterons sous 24 à 48 heures ouvrées.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

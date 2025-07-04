'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection = () => {
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
      const formData = new FormData(form);
      
      // Ajouter l'adresse email de destination (votre adresse Gmail)
      formData.append('_to', 'mattias.mathevon@gmail.com');
      
      // Ajouter un sujet personnalisé
      formData.append('_subject', 'Nouvelle demande d\'audit de site web avocat');
      
      // Envoyer le formulaire via FormSubmit
      const response = await fetch('https://formsubmit.co/mattias.mathevon@gmail.com', {
        method: 'POST',
        body: formData,
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

  // Références pour les animations basées sur le scroll
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [privacyRef, privacyInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="audit-form" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#f9f8ff] to-white relative overflow-hidden text-gray-800">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6B4DE6]/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de la section */}
        <div ref={titleRef} className="mb-12 md:mb-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Obtenez votre <span className="text-[#6B4DE6]">audit gratuit</span> spécial cabinet d'avocat
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Découvrez comment améliorer votre présence en ligne tout en respectant les règles déontologiques
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Formulaire */}
          <motion.div
            ref={formRef}
            className="lg:col-span-3 bg-white rounded-lg shadow-sm p-6 md:p-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            {formStatus.submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Demande envoyée avec succès</h3>
                <p className="text-gray-600">{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" action="https://formsubmit.co/tolarystoulouse@gmail.com" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition"
                      placeholder="Me Jean Dupont"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition"
                      placeholder="jean.dupont@cabinet-avocat.fr"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  <div>
                    <label htmlFor="speciality" className="block text-sm font-medium text-gray-700 mb-1">Spécialité principale *</label>
                    <select
                      id="speciality"
                      name="speciality"
                      value={formData.speciality}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition"
                    >
                      <option value="">Sélectionnez votre spécialité</option>
                      <option value="droit-famille">Droit de la famille</option>
                      <option value="droit-affaires">Droit des affaires</option>
                      <option value="droit-immobilier">Droit immobilier</option>
                      <option value="droit-travail">Droit du travail</option>
                      <option value="droit-penal">Droit pénal</option>
                      <option value="autre">Autre spécialité</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site web actuel (si existant)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition"
                    placeholder="https://www.votrecabinet.fr"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message ou précisions</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6B4DE6] focus:border-[#6B4DE6] outline-none transition"
                    placeholder="Précisez vos attentes ou questions spécifiques..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
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
                      <label htmlFor="consent" className="font-medium text-gray-700">
                        J'accepte la politique de confidentialité et le traitement de mes données *
                      </label>
                      <p className="text-gray-500 text-xs mt-1">
                        En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.
                      </p>
                    </div>
                  </div>
                  {formStatus.error && (
                    <p className="mt-2 text-sm text-red-600">{formStatus.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-[#6B4DE6] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4DE6] transition-all shadow-lg ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-[#6B4DE6]/90 hover:shadow-[#6B4DE6]/20'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Recevoir mon audit gratuit'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          
          {/* Informations complémentaires */}
          <motion.div
            ref={privacyRef}
            className="lg:col-span-2"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={privacyInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4DE6] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Confidentialité garantie
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-medium">Respect du secret professionnel :</span> Nous comprenons l'importance de la confidentialité pour les avocats. Toutes les informations que vous nous communiquez sont strictement confidentielles.
                </p>
                <p>
                  <span className="font-medium">Données sécurisées :</span> Vos données sont hébergées en France sur des serveurs sécurisés et conformes au RGPD.
                </p>
                <p>
                  <span className="font-medium">Aucun partage avec des tiers :</span> Nous ne partageons jamais vos informations avec des tiers sans votre consentement explicite.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4DE6] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ce que vous recevrez
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Analyse complète de votre présence en ligne</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Évaluation de votre positionnement sur les requêtes juridiques</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Vérification de la conformité CNB et RGPD</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Plan d'action personnalisé pour votre cabinet</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6B4DE6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Consultation téléphonique de 30 minutes avec un expert</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

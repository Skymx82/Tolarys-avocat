'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl text-gray-800">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Politique de Confidentialité
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Introduction</h2>
            <p className="mb-4">
              Chez Tolarys, nous accordons une importance particulière à la protection de vos données personnelles. 
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et 
              protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
            <p className="mb-4">
              Cette politique s'applique au site tolarys-toulouse.fr et à tous les services proposés par Tolarys.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Collecte des données personnelles</h2>
            <p className="mb-4">
              Nous collectons les données personnelles suivantes :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom du cabinet d'avocat</li>
              <li>Spécialité juridique</li>
              <li>URL du site web (si existant)</li>
              <li>Informations fournies volontairement dans les messages</li>
            </ul>
            <p className="mb-4">
              Ces informations sont collectées lorsque vous :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Remplissez un formulaire de contact ou d'audit</li>
              <li>Vous inscrivez à notre newsletter</li>
              <li>Demandez un devis ou des informations sur nos services</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Utilisation des données</h2>
            <p className="mb-4">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Vous fournir les services demandés (audit de site web, conseils en marketing digital, etc.)</li>
              <li>Communiquer avec vous concernant nos services</li>
              <li>Vous envoyer des informations importantes relatives à votre compte ou à nos services</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
            </ul>
            <p className="mb-4">
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Confidentialité et secret professionnel</h2>
            <p className="mb-4">
              En tant que prestataire travaillant avec des cabinets d'avocats, nous comprenons l'importance du secret professionnel 
              et des obligations déontologiques. Nous nous engageons à :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Traiter toutes les informations relatives à vos clients et à vos affaires avec la plus stricte confidentialité</li>
              <li>Ne jamais divulguer d'informations couvertes par le secret professionnel</li>
              <li>Mettre en place des mesures de sécurité renforcées pour protéger vos données sensibles</li>
              <li>Former notre personnel aux exigences spécifiques de confidentialité du secteur juridique</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Conservation des données</h2>
            <p className="mb-4">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles 
              elles ont été collectées, ou pour respecter nos obligations légales.
            </p>
            <p className="mb-4">
              Pour les clients avec lesquels nous avons une relation contractuelle, les données sont conservées pendant 
              toute la durée de la relation commerciale et jusqu'à 3 ans après la fin de cette relation.
            </p>
            <p className="mb-4">
              Pour les prospects, les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Cookies et technologies similaires</h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits 
              fichiers texte stockés sur votre appareil qui nous permettent de :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Assurer le bon fonctionnement du site</li>
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic et l'utilisation du site</li>
            </ul>
            <p className="mb-4">
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Pour plus d'informations sur 
              la façon de le faire, consultez aboutcookies.org.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Vos droits</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement de vos données</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : 
              <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6B4DE6] hover:underline ml-1">tolarystoulouse@gmail.com</a>
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
              vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
            <p className="mb-4">
              Ces mesures incluent notamment :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Le chiffrement des données sensibles</li>
              <li>Des protocoles de sécurité pour les transferts de données</li>
              <li>Des accès restreints aux données personnelles</li>
              <li>Des audits de sécurité réguliers</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Modifications de la politique de confidentialité</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une date de mise à jour.
            </p>
            <p className="mb-4">
              Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière 
              dont nous protégeons vos informations.
            </p>
            <p className="mb-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant cette politique de confidentialité ou la manière dont nous traitons 
              vos données personnelles, veuillez nous contacter à :
            </p>
            <ul className="list-none pl-6 mb-4 space-y-1">
              <li><span className="font-medium">Email :</span> <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6B4DE6] hover:underline">tolarystoulouse@gmail.com</a></li>
              <li><span className="font-medium">Téléphone :</span> <a href="tel:+33679336812" className="text-[#6B4DE6] hover:underline">+33 6 79 33 68 12</a></li>
              <li><span className="font-medium">Adresse :</span> 4 avenue de Toulouse, Cugnaux, France</li>
            </ul>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#6B4DE6] hover:bg-[#5A3DD3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

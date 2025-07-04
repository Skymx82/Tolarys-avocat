'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
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
            Mentions Légales
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">1. Informations légales</h2>
            <p className="mb-4">Le site web tolarys-toulouse.fr est édité par :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><span className="font-medium">Raison sociale :</span> Mathevon Mattias</li>
              <li><span className="font-medium">Nom Commercial :</span> Tolarys</li>
              <li><span className="font-medium">Numéro SIRET :</span> 94208529100014</li>
              <li><span className="font-medium">Adresse :</span> 4 avenue de Toulouse, Cugnaux, France</li>
              <li><span className="font-medium">Email :</span> <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6B4DE6] hover:underline">tolarystoulouse@gmail.com</a></li>
              <li><span className="font-medium">Téléphone :</span> <a href="tel:+33679336812" className="text-[#6B4DE6] hover:underline">+33 6 79 33 68 12</a></li>
            </ul>
            <p className="mb-4"><span className="font-medium">Responsable de la publication :</span> Le responsable de la publication du site est Tolarys Toulouse.</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">2. Hébergement</h2>
            <p className="mb-4">Le site tolarys-toulouse.fr est hébergé par :</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><span className="font-medium">Société :</span> Vercel Inc.</li>
              <li><span className="font-medium">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><span className="font-medium">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#6B4DE6] hover:underline">vercel.com</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">3. Propriété intellectuelle</h2>
            <p className="mb-4">L'ensemble du contenu du site tolarys-toulouse.fr (textes, graphismes, logos, images, photos, vidéos, etc.) est la propriété exclusive de Tolarys Toulouse ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
            <p className="mb-4">Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable.</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">4. Protection des données personnelles</h2>
            <p className="mb-4">Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
            <p className="mb-4">Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6B4DE6] hover:underline">tolarystoulouse@gmail.com</a></p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">5. Cookies</h2>
            <p className="mb-4">Le site tolarys-toulouse.fr peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver l'utilisation de cookies en modifiant les paramètres de votre navigateur.</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">6. Loi applicable et juridiction</h2>
            <p className="mb-4">Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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

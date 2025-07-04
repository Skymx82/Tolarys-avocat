'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CGV() {
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
            Conditions Générales de Vente
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">1. Préambule</h2>
            <p className="mb-4">
              Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services 
              conclues entre Tolarys, représentée par Mathevon Mattias, SIRET 94208529100014, ci-après désignée 
              « le Prestataire », et ses clients professionnels, ci-après désignés « le Client ».
            </p>
            <p className="mb-4">
              Toute commande de prestations implique l'acceptation sans réserve par le Client et son adhésion pleine 
              et entière aux présentes CGV qui prévalent sur tout autre document du Client.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">2. Services proposés</h2>
            <p className="mb-4">
              Le Prestataire propose aux cabinets d'avocats des services de création et de développement de sites internet, 
              d'optimisation pour les moteurs de recherche (SEO), de marketing digital et de conseil en communication, 
              spécifiquement adaptés aux contraintes déontologiques de la profession d'avocat.
            </p>
            <p className="mb-4">
              Ces services comprennent notamment :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Création de sites internet pour cabinets d'avocats</li>
              <li>Refonte de sites existants</li>
              <li>Référencement naturel (SEO) adapté au secteur juridique</li>
              <li>Stratégie de contenu juridique</li>
              <li>Audit de site web et de présence en ligne</li>
              <li>Conseil en communication digitale respectant les règles déontologiques</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">3. Devis et commandes</h2>
            <p className="mb-4">
              Les prestations font l'objet d'un devis détaillé, établi gratuitement par le Prestataire sur la base des 
              informations communiquées par le Client.
            </p>
            <p className="mb-4">
              Le devis est valable pendant une durée de 30 jours à compter de sa date d'émission. L'acceptation du devis 
              se fait par signature électronique ou par retour du devis signé par email.
            </p>
            <p className="mb-4">
              La commande ne devient définitive qu'après réception par le Prestataire du devis signé par le Client et 
              du versement de l'acompte prévu.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">4. Prix et modalités de paiement</h2>
            <p className="mb-4">
              Les prix des prestations sont indiqués en euros et hors taxes. La TVA applicable est celle en vigueur 
              au jour de la facturation.
            </p>
            <p className="mb-4">
              Sauf mention contraire dans le devis, les modalités de paiement sont les suivantes :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>40% d'acompte à la commande</li>
              <li>30% à mi-parcours du projet</li>
              <li>30% à la livraison finale</li>
            </ul>
            <p className="mb-4">
              Pour les prestations récurrentes (maintenance, référencement mensuel, etc.), la facturation est mensuelle 
              et payable à réception de facture.
            </p>
            <p className="mb-4">
              Les paiements peuvent être effectués par virement bancaire ou par chèque à l'ordre de Tolarys.
            </p>
            <p className="mb-4">
              Tout retard de paiement entraînera l'application de pénalités de retard au taux d'intérêt légal majoré 
              de 10 points, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros, conformément 
              aux articles L.441-6 et D.441-5 du Code de commerce.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">5. Délais d'exécution</h2>
            <p className="mb-4">
              Le Prestataire s'engage à respecter les délais d'exécution indiqués dans le devis. Ces délais sont donnés 
              à titre indicatif et leur dépassement ne peut donner lieu à aucune pénalité, indemnité ou annulation de la commande.
            </p>
            <p className="mb-4">
              Les délais d'exécution sont conditionnés par la fourniture par le Client des informations et contenus 
              nécessaires à la réalisation des prestations dans les délais convenus.
            </p>
            <p className="mb-4">
              Tout retard du Client dans la transmission des éléments nécessaires à la réalisation des prestations 
              entraînera un report du délai d'exécution au moins équivalent à ce retard.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">6. Obligations du Prestataire</h2>
            <p className="mb-4">
              Le Prestataire s'engage à :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Exécuter les prestations conformément au devis accepté</li>
              <li>Respecter les règles déontologiques applicables à la profession d'avocat dans la réalisation des prestations</li>
              <li>Préserver la confidentialité des informations communiquées par le Client</li>
              <li>Conseiller le Client sur les meilleures pratiques en matière de communication digitale pour les avocats</li>
              <li>Mettre en œuvre tous les moyens nécessaires pour atteindre les objectifs définis avec le Client</li>
            </ul>
            <p className="mb-4">
              Le Prestataire est tenu à une obligation de moyens et non de résultat, notamment en ce qui concerne 
              le référencement naturel et les performances du site internet.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">7. Obligations du Client</h2>
            <p className="mb-4">
              Le Client s'engage à :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Fournir au Prestataire tous les éléments nécessaires à la réalisation des prestations (textes, images, informations, etc.)</li>
              <li>Garantir qu'il dispose des droits nécessaires sur les éléments fournis</li>
              <li>Collaborer activement avec le Prestataire pendant toute la durée du projet</li>
              <li>Valider les étapes intermédiaires dans les délais convenus</li>
              <li>Régler les factures dans les délais prévus</li>
            </ul>
            <p className="mb-4">
              Le Client est seul responsable du contenu qu'il fournit et de sa conformité avec les règles déontologiques 
              de la profession d'avocat et la législation en vigueur.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">8. Propriété intellectuelle</h2>
            <p className="mb-4">
              Le Prestataire cède au Client les droits d'utilisation des créations réalisées dans le cadre des prestations, 
              pour les utilisations prévues au contrat, après paiement intégral du prix convenu.
            </p>
            <p className="mb-4">
              Cette cession ne concerne pas les éléments préexistants appartenant au Prestataire ou à des tiers 
              (templates, plugins, photos, illustrations, etc.) qui sont utilisés dans le cadre des prestations.
            </p>
            <p className="mb-4">
              Le Prestataire se réserve le droit de mentionner sa réalisation pour le Client comme référence dans 
              le cadre de ses démarches de prospection commerciale, de communication externe et de publicité, 
              sauf mention contraire explicite du Client.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">9. Confidentialité et secret professionnel</h2>
            <p className="mb-4">
              Le Prestataire s'engage à respecter la plus stricte confidentialité concernant les informations et 
              documents qui lui sont communiqués par le Client dans le cadre de la réalisation des prestations.
            </p>
            <p className="mb-4">
              Le Prestataire reconnaît être informé que certaines informations communiquées par les cabinets d'avocats 
              peuvent être couvertes par le secret professionnel et s'engage à les traiter avec toutes les précautions 
              nécessaires.
            </p>
            <p className="mb-4">
              Cette obligation de confidentialité se poursuit après la fin de la relation contractuelle entre le 
              Prestataire et le Client.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">10. Garanties et responsabilités</h2>
            <p className="mb-4">
              Le Prestataire garantit que les créations réalisées sont originales et ne constituent pas une contrefaçon 
              d'œuvres préexistantes.
            </p>
            <p className="mb-4">
              La responsabilité du Prestataire ne pourra être engagée en cas de :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Fourniture par le Client d'informations erronées ou incomplètes</li>
              <li>Modification du site par le Client ou un tiers après livraison</li>
              <li>Force majeure ou causes indépendantes de la volonté du Prestataire</li>
              <li>Utilisation des prestations non conforme à leur destination</li>
            </ul>
            <p className="mb-4">
              En tout état de cause, la responsabilité du Prestataire est limitée au montant des sommes effectivement 
              versées par le Client.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">11. Résiliation</h2>
            <p className="mb-4">
              En cas de manquement par l'une des parties à l'une de ses obligations contractuelles, l'autre partie 
              pourra résilier le contrat après mise en demeure restée sans effet pendant 15 jours.
            </p>
            <p className="mb-4">
              En cas de résiliation par le Client en cours de projet, les sommes déjà versées resteront acquises au 
              Prestataire et le Client devra régler les prestations déjà réalisées.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6B4DE6]">12. Droit applicable et juridiction compétente</h2>
            <p className="mb-4">
              Les présentes CGV sont soumises au droit français.
            </p>
            <p className="mb-4">
              En cas de litige et après tentative de recherche d'une solution amiable, compétence exclusive est attribuée 
              aux tribunaux de Toulouse, nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
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

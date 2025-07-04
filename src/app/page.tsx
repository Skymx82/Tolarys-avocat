import HeroSection from "../components/HeroSection";
import CrucialSection from "../components/CrucialSection";
import AuditSection from "../components/AuditSection";
import TrustSection from "../components/TrustSection";
import ChallengesSection from "../components/ChallengesSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de Site Web pour Avocat | Tolarys - Expert Marketing Digital Juridique",
  description: "Tolarys crée des sites web pour avocats respectant les règles déontologiques. Développez votre présence en ligne et attirez de nouveaux clients grâce à nos solutions digitales sur-mesure.",
  keywords: "création site web avocat, site internet cabinet avocat, marketing digital juridique, site web avocat déontologie, référencement avocat, site internet juridique, création site avocat, webdesign cabinet d'avocats",
};

export default function Home() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Tolarys - Création de sites web pour avocats",
        "url": "https://avocat.tolarys-toulouse.fr",
        "logo": "https://avocat.tolarys-toulouse.fr/logo.png",
        "description": "Tolarys crée des sites web pour avocats respectant les règles déontologiques. Développez votre présence en ligne et attirez de nouveaux clients grâce à nos solutions digitales sur-mesure.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4 avenue de Toulouse",
          "addressLocality": "Cugnaux",
          "postalCode": "31270",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5373",
          "longitude": "1.3275"
        },
        "telephone": "+33679336812",
        "email": "tolarystoulouse@gmail.com",
        "sameAs": [
          "https://www.facebook.com/tolarystoulouse",
          "https://www.instagram.com/tolarys"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "€€",
        "serviceType": ["Création de site web pour avocat", "Référencement SEO juridique", "Marketing digital pour cabinet d'avocats"],
        "areaServed": ["Toulouse", "France"]
      })}} />
      
      <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="speciality" content="Création de site web pour avocat" />
        <meta itemProp="keywords" content="création site web avocat, site internet cabinet avocat, marketing digital juridique, site web avocat déontologie, référencement avocat" />
        
        <HeroSection />
        <TrustSection />
        <CrucialSection />
        <AuditSection />
        <ChallengesSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

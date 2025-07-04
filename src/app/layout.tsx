import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Création de Site Web pour Avocat | Tolarys - Expert Marketing Digital Juridique",
  description: "Tolarys crée des sites web pour avocats respectant les règles déontologiques. Développez votre présence en ligne et attirez de nouveaux clients grâce à nos solutions digitales sur-mesure.",
  keywords: "création site web avocat, site internet cabinet avocat, marketing digital juridique, site web avocat déontologie, référencement avocat, site internet juridique, création site avocat, webdesign cabinet d'avocats",
  authors: [{ name: "Tolarys", url: "https://www.tolarys-toulouse.fr" }],
  creator: "Tolarys",
  publisher: "Tolarys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Création de Site Web pour Avocat | Tolarys - Expert Marketing Digital Juridique",
    description: "Tolarys crée des sites web pour avocats respectant les règles déontologiques. Développez votre présence en ligne et attirez de nouveaux clients grâce à nos solutions digitales sur-mesure.",
    url: "https://www.tolarys-toulouse.fr",
    siteName: "Tolarys - Création de sites web pour avocats",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Site Web pour Avocat | Tolarys",
    description: "Tolarys crée des sites web pour avocats respectant les règles déontologiques. Développez votre présence en ligne et attirez de nouveaux clients.",
    creator: "@tolarys",
  },
  alternates: {
    canonical: "https://www.tolarys-toulouse.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

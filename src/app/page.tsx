import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import WhyUs from "@/components/sections/WhyUs";
import SalesProof from "@/components/services/SalesProof";
import MetaAdsResult from "@/components/services/MetaAdsResult";
import ClientReview from "@/components/services/ClientReview";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";
import Announcement from "@/components/ui/Announcement";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usama Bin Amir",
  description:
    "Transform your business with Pakistan's leading digital marketing expert. Meta Ads management, e-commerce solutions, and proven growth strategies that deliver real results.",
  keywords: [
    "Usama Bin Amir",
    "Global",
    "Products",
    "Services",
    "Ecommerce",
    "Digital Marketing",
    "Meta Ads",
  ],
  authors: [{ name: "Usama Bin Amir" }],
  openGraph: {
    title: "Best Digital Marketing & E-commerce Services | Usama Bin Amir",
    description:
      "Transform your business with Pakistan's leading digital marketing expert. Meta Ads management, e-commerce solutions, and proven growth strategies that deliver real results.",
    url: "https://usamabinamirglobal.com",
    siteName: "Usama Bin Amir Global",
  },
  metadataBase: new URL("https://usamabinamirglobal.com"),
  alternates: {
    canonical: "https://usamabinamirglobal.com",
  },
};

export default function HomePage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        <Announcement />
        <Navbar />
        <Hero />
        <AboutUs />
        <WhyUs />
        <SalesProof />
        <MetaAdsResult />
        <ClientReview />
        <Services />
      </main>
      <Footer />
    </>
  );
}

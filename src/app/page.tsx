import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import WhyUs from "@/components/sections/WhyUs";
import SalesProof from "@/components/services/SalesProof";
import MetaAdsResult from "@/components/services/MetaAdsResult";
import ClientReview from "@/components/services/ClientReview";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyUs />
      <SalesProof />
      <MetaAdsResult />
      <ClientReview/>
      <Services/>
      <Footer/>
    </main>
  );
}

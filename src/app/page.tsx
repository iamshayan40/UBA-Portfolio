import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>Usama Bin Amir Global - Official Website</title>
        <meta
          name="description"
          content="Welcome to Usama Bin Amir Global website - official portal for all services and products."
        />
        <meta
          name="keywords"
          content="Usama Bin Amir, Global, Products, Services, Ecommerce"
        />
        <meta name="author" content="Usama Bin Amir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://usamabinamirglobal.com" />
      </Head>

      <main className="bg-white min-h-screen">
        <Navbar />
        <Hero />
        <AboutUs />
        <WhyUs />
        <SalesProof />
        <MetaAdsResult />
        <ClientReview />
        <Services />
        <Footer />
      </main>
    </>
  );
}

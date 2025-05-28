import type { Metadata } from "next";
import { Poppins, Lexend, Montserrat } from "next/font/google";
import { ClientProvider } from "@/components/ClientProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/Preloader";
import { organizationJsonLd } from "./jsonld";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100","200","300","400","500","600","700","800","900"
  ],
  variable: "--font-poppins",
});
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Usama Bin Amir | Best Digital Marketing & E-commerce Services",
    template: "%s | Usama Bin Amir Global"
  },
  description:
    "Expert digital marketing, e-commerce, and global business solutions by Usama Bin Amir. Trusted by 100+ clients for Meta Ads, dropshipping, and proven business growth strategies with verifiable results.",
  keywords: [
    "Usama Bin Amir",
    "Digital Marketing Expert",
    "E-commerce Solutions",
    "Meta Ads Specialist",
    "Business Growth Strategy",
    "Dropshipping Expert",
    "Online Business Consultant",
    "Social Media Marketing",
    "E-commerce Optimization",
    "Business Development Services",
    "Global E-commerce Solutions",
    "Professional Marketing Services",
    "Meta Advertising Expert",
    "E-commerce Success Coach",
    "Digital Business Strategist",
    "Pakistani Digital Marketer",
    "E-commerce Consultant Pakistan",
    "Meta Ads Expert Pakistan"
  ],
  metadataBase: new URL("https://usamabinamirglobal.com"),
  alternates: {
    canonical: "https://usamabinamirglobal.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    notranslate: true
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
    yandex: "yandex-verification-code", // Optional: Add if targeting Russian market
  },
  openGraph: {
    title: "Usama Bin Amir | Expert Digital Marketing & E-commerce Solutions",
    description: "Transform your business with expert digital marketing and e-commerce solutions. Specializing in Meta Ads, dropshipping, and proven business growth strategies with 100+ satisfied clients.",
    url: "https://usamabinamirglobal.com",
    siteName: "Usama Bin Amir Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Usama Bin Amir Global - Digital Marketing & E-commerce Expert"
      },
      {
        url: "/WhyUsLogo.jpg",
        width: 1200,
        height: 630,
        alt: "Why Choose Usama Bin Amir - Digital Marketing Excellence"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Bin Amir | Digital Marketing & E-commerce Expert",
    description: "Expert digital marketing & e-commerce solutions. Meta Ads specialist with proven results. Transform your online business today!",
    creator: "@usamabinamir",
    images: ["/logo.png"]
  },
  authors: [{ name: "Usama Bin Amir" }],
  creator: "Usama Bin Amir",
  publisher: "Usama Bin Amir Global",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lexend.variable} ${montserrat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        {/* Prefetch common routes */}
        <link rel="prefetch" href="/team" as="document" />
        <link rel="prefetch" href="/reviews/client-reviews" as="document" />
        <link rel="prefetch" href="/proof/sales-proof" as="document" />
        <link rel="prefetch" href="/ads/meta-results" as="document" />
      </head>
      <body>
        <Preloader />
        <ClientProvider>
          {children}
          <ScrollToTop />
        </ClientProvider>
      </body>
    </html>
  );
}

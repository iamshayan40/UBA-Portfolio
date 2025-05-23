import type { Metadata } from "next";
import { Poppins, Lexend, Montserrat } from "next/font/google";
import { ClientProvider } from "@/components/ClientProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/Preloader";
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
  title: "Usama Bin Amir | Best Global Services",
  description:
    "Usama Bin Amir Global - Trusted platform for quality products and services.",
  keywords: [
    "UsamaBinAmir",
    "UsamaBinAmirGlobal",
    "Usama Bin Amir",
    "Usama Bin Amir Global",
    "Best Global Services",
    "Trusted Platform",
  ],
  metadataBase: new URL("https://usamabinamirglobal.com"),  // <<< yeh add karo
  openGraph: {
    title: "Usama Bin Amir | Best Global Services",
    description:
      "Explore Usama Bin Amir Global for quality products and services.",
    url: "https://usamabinamirglobal.com",
    siteName: "Usama Bin Amir Global",
    images: [
      {
        url: "/og-image.jpg",  // relative path ab metadataBase se resolve hoga
        width: 1200,
        height: 630,
        alt: "Usama Bin Amir Global",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Bin Amir | Best Global Services",
    description:
      "Explore Usama Bin Amir Global for quality products and services.",
    siteId: "@UsamaBinAmir", // agar Twitter handle hai to
    creator: "@UsamaBinAmir",
    images: ["/og-image.jpg"],  // relative path yahan bhi
  },
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

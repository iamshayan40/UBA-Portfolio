import { Organization, WithContext } from "schema-dts";

export const organizationJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Usama Bin Amir Global",
  description: "Expert digital marketing, e-commerce, and global business solutions by Usama Bin Amir.",
  url: "https://usamabinamirglobal.com",
  logo: "https://usamabinamirglobal.com/logo.png",
  sameAs: [
    // Add your social media profiles here
    "https://www.linkedin.com/in/usamabinamir",
    "https://twitter.com/UsamaBinAmir"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "", // Add your contact number
    contactType: "customer service",
    email: "" // Add your email
  },
  areaServed: "Worldwide",
  founder: {
    "@type": "Person",
    name: "Usama Bin Amir",
    jobTitle: "Founder & Digital Marketing Expert"
  }
};

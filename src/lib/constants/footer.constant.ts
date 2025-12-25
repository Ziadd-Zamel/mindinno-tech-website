import { Facebook, Instagram, Linkedin } from "lucide-react";

export const FOOTER_LINKS = {
  pages: [
    { name: "footer.pages.services", href: "/services" },
    { name: "footer.pages.industries", href: "/industries" },
    { name: "footer.pages.reviews", href: "/reviews" },
    { name: "footer.pages.case_studies", href: "/case-studies" },
  ],
  legal: [
    { name: "footer.legal.privacy_policy", href: "/privacy-policy" },
    { name: "footer.legal.help_center", href: "/help-center" },
  ],
};

export const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export const CONTACT_INFO = {
  phones: ["+1 526 220 0444", "+1 526 220 0000"],
  email: "example@gmail.com",
};

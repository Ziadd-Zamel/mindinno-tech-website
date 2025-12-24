import { Github, Linkedin, Twitter } from "lucide-react";

export const FOOTER_LINKS = {
  company: [
    { name: "footer.company.about_us", href: "#" },
    { name: "footer.company.careers", href: "#" },
    { name: "footer.company.blog", href: "#" },
    { name: "footer.company.press", href: "#" },
  ],
  services: [
    { name: "footer.services.web_development", href: "#services" },
    { name: "footer.services.mobile_apps", href: "#services" },
    { name: "footer.services.cloud_solutions", href: "#services" },
    { name: "footer.services.consulting", href: "#services" },
  ],
  legal: [
    { name: "footer.legal.privacy_policy", href: "#" },
    { name: "footer.legal.terms_of_service", href: "#" },
    { name: "footer.legal.cookie_policy", href: "#" },
    { name: "footer.legal.disclaimer", href: "#" },
  ],
};

export const SOCIAL_LINKS = [
  { name: "social.github", icon: Github, href: "#" },
  { name: "social.linkedin", icon: Linkedin, href: "#" },
  { name: "social.twitter", icon: Twitter, href: "#" },
];

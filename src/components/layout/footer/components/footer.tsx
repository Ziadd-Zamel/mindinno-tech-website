"use client";

import { motion } from "framer-motion";
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants/footer.constant";
import Logo from "@/components/common/logo";
import { useTranslations } from "next-intl";

export default function MainFooter() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="bg-background relative">
      <div className="box-container pt-20 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-gray-600 dark:text-white/70">
              {t("footer.brand.description")}
            </p>
          </motion.div>

          {/* Pages Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="space-y-3">
              {FOOTER_LINKS.pages.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-main text-sm text-gray-700 transition-colors dark:text-white/70"
                  >
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-main text-sm text-gray-700 transition-colors dark:text-white/70"
                  >
                    {t(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="hover:text-main text-sm text-gray-700 transition-colors dark:text-white/70"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ul className="space-y-3">
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-main text-sm text-gray-700 transition-colors dark:text-white/70"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-main text-main text-sm underline transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8"
        >
          <p className="text-center text-sm text-gray-600 dark:text-white/70" dir="ltr">
            {t("footer.copyright", { year: currentYear })}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

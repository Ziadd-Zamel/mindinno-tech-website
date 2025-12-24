"use client";
import { motion } from "framer-motion";
import { MobileMenu } from "./mobile-menu";
import { Link } from "@/i18n/routing";
import { NAVIGATION } from "@/lib/constants/header.constant";
import { SwitchLocale } from "./switch-lang";
import { ThemeSwitcher } from "./theme-switcher";
import Logo from "@/components/common/logo";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  return (
    <header className="border-border/40 bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <nav className="box-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex md:items-center md:gap-8"
          >
            {NAVIGATION.map((item) => (
              <Link href={`${item.href}`} key={item.href}>
                {t(item.name)}
              </Link>
            ))}
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {/* Switchers */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <SwitchLocale />
              <ThemeSwitcher />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

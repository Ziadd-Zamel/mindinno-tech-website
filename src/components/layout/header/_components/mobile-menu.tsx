"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { NAVIGATION } from "@/lib/constants/header.constant";
import { Menu, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SwitchLocale } from "./switch-lang";
import { ThemeSwitcher } from "./theme-switcher";
import Logo from "@/components/common/logo";
import { useLocale, useTranslations } from "next-intl";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const locale = useLocale();
  const t = useTranslations();
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side={locale === "ar" ? "right" : "left"}
        className="flex w-[85vw] flex-col p-0 sm:w-[400px]"
      >
        {/* Header */}
        <SheetHeader className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <div className="flex w-full items-center justify-between pe-5">
            <ThemeSwitcher />
            <SwitchLocale />
          </div>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {NAVIGATION.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center justify-between rounded-xl px-4 py-4 transition-all duration-200 hover:bg-blue-500/10 dark:hover:bg-blue-500/20"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 transition-opacity duration-200 dark:bg-blue-500/10 ${
                    hoveredIndex === index ? "opacity-100" : ""
                  }`}
                />

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  {/* Icon indicator */}
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-blue-400" />

                  {/* Link text */}
                  <span className="text-base font-medium text-gray-700 transition-colors group-hover:text-gray-900 dark:text-gray-100 dark:group-hover:text-white">
                    {t(item.name)}
                  </span>
                </div>

                {/* Arrow icon */}
                <ChevronRight
                  className={`h-5 w-5 text-gray-400 transition-all duration-200 rtl:rotate-180 dark:text-gray-500 ${
                    hoveredIndex === index ? "translate-x-1 text-blue-600 dark:text-blue-400" : ""
                  }`}
                />
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
          <Logo />
        </div>
      </SheetContent>
    </Sheet>
  );
}

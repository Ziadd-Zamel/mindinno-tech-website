"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { type Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

export function SwitchLocale() {
  // Translation
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  // Functions
  const switchLocale = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });
  };

  // Get the next language (not current)
  const nextLanguage = languages.find((lang) => lang.code !== locale);

  return (
    <Button
      onClick={() => switchLocale(nextLanguage?.code as Locale)}
      variant="ghost"
      className="h-9 w-9 hover:bg-transparent"
      size={"sm"}
    >
      <span className="">{nextLanguage?.name}</span>
      <Globe className="h-5 w-5" />
    </Button>
  );
}

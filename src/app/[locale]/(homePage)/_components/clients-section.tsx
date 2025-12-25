"use client";

import SectionHeader from "@/components/common/section-header";
import { Marquee } from "@/components/ui/marquee";
import { useTranslations } from "next-intl";

const clientLogos = [
  { id: 1, name: "logoipsum", alt: "Client 1" },
  { id: 2, name: "BOGO", alt: "Client 2" },
  { id: 3, name: "logoipsum", alt: "Client 3" },
  { id: 4, name: "LOGOIPSUM", alt: "Client 4" },
  { id: 5, name: "logoipsum", alt: "Client 5" },
  { id: 6, name: "logoipsum", alt: "Client 6" },
  { id: 7, name: "logoipsum", alt: "Client 7" },
  { id: 8, name: "LOGOIPSUM", alt: "Client 8" },
  { id: 9, name: "LOGOIPSUM", alt: "Client 9" },
  { id: 10, name: "logoipsum", alt: "Client 10" },
];

// Split logos into two rows
const firstRow = clientLogos.slice(0, 5);
const secondRow = clientLogos.slice(5, 10);

const LogoCard = ({ name }: { name: string; alt: string }) => (
  <div className="flex h-24 w-48 items-center justify-center rounded-3xl bg-[#EDF1F5] px-8 dark:bg-[#FFFFFF0D]">
    <span className="text-xl font-semibold text-gray-400">{name}</span>
  </div>
);

export default function ClientsSection() {
  const t = useTranslations("client");

  return (
    <section className="py-20">
      {/* Header */}
      <SectionHeader title={t("title")} description={t("subTitle")} />

      {/* Marquee Rows */}
      <div dir="ltr" className="relative -mt-3 flex flex-col gap-3 overflow-hidden">
        {/* First Row */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((logo) => (
            <LogoCard key={logo.id} name={logo.name} alt={logo.alt} />
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((logo) => (
            <LogoCard key={logo.id} name={logo.name} alt={logo.alt} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/constants/work.constant";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function IndustriesSection() {
  const t = useTranslations("work");
  return (
    <section className="box-container py-20">
      {/* Header */}
      <SectionHeader title={t("title")} description={t("subtitle")} />

      {/* Industries Grid */}
      <div className="-mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-[#121519]"
          >
            {/* Image */}
            <div className="relative h-72 w-full rounded-2xl">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="rounded-bl-4xl object-cover rtl:rounded-br-4xl"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white/90">
                {industry.title}
              </h3>

              <ul className="space-y-2">
                {industry.services.map((service, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-white/70">
                    • {service}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <Button className="rounded-xl px-7! py-3!">{t("action")}</Button>
      </div>
    </section>
  );
}

"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants/services.constant";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="box-container py-20">
      {/* Header */}
      <SectionHeader title={t("title")} description={t("subtitle")} />

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="group hover:bg-main dark:hover:bg-main relative cursor-pointer rounded-2xl bg-white px-8 py-10 transition-all duration-300 hover:shadow-2xl dark:bg-[#121519]"
          >
            {/* Icon */}
            <div className="mb-6">
              <service.icon className="h-8 w-8 text-[#EDCB50]" />
            </div>

            {/* Title */}
            <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 group-hover:text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 text-[15px] text-gray-700 transition-colors duration-300 group-hover:text-white dark:text-white/70">
              {service.description}
            </p>

            {/* Arrow Button */}
            <Button
              variant={"ghost"}
              className="flex-center border-main size-12 rounded-full border bg-transparent group-hover:border-white hover:bg-transparent"
            >
              <ArrowRight className="text-main group-hover:text-white" />
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

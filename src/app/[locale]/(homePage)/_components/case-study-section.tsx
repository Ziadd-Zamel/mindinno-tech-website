"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CaseStudiesSection() {
  const t = useTranslations("case");
  return (
    <section className="box-container py-20">
      {/* Header */}
      <SectionHeader title={t("title")} />

      {/* Case Studies Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* First Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group bg-main relative h-fit overflow-hidden rounded-4xl p-5 text-white md:p-10 lg:h-[560px] lg:p-14"
        >
          {/* Content */}
          <div className="relative z-10 mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Robotics & artificial intelligence
            </h3>
            <p className="mb-10 text-[15px] opacity-90">
              Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget
              vel. Convallis diam nunc, vitae, orci, nibh quam tristique pulvinar. In semper etiam
              aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo
              vestibulum. Adipiscing dictumst nunc enim massa.
            </p>
            <button className="flex cursor-pointer items-center gap-2 font-semibold transition-transform hover:translate-x-1">
              Read case study
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Image positioned at bottom right */}
          <Image
            src="/assets/case-1.png"
            alt="Robotics & artificial intelligence"
            width={330}
            height={330}
            className="absolute end-0 bottom-0 hidden lg:block rtl:rotate-93"
          />
        </motion.div>

        {/* Second Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group relative h-fit overflow-hidden rounded-4xl bg-[#448C74]/10 p-5 md:p-10 lg:h-[560px] lg:p-14"
        >
          {/* Content */}
          <div className="relative z-10 mb-8">
            <h3 className="text-main mb-4 text-xl font-semibold">
              Toothbrush from natural eco materials
            </h3>
            <p className="text-main mb-10 text-[15px] opacity-90">
              Rutrum diam euismod nec cursus velit dolor arcu ut. Lacus, diam non vitae nunc arcu
              leo. Nisl nulla pellentesque fames posuere fermentum odio fusce nunc tellus.
              Consectetur elit, at consequat non auctor nam at. Volutpat malesuada lorem turpis
              praesent condimentum potenti enim sed semper. Enim justo aliquam.
            </p>
            <button className="text-main flex cursor-pointer items-center gap-2 font-semibold transition-transform hover:translate-x-1">
              Read case study
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Image positioned at bottom right */}
          <Image
            src="/assets/case-2.png"
            alt="Robotics & artificial intelligence"
            width={250}
            height={250}
            className="absolute end-0 bottom-0 hidden lg:block"
          />
        </motion.div>
      </div>

      {/* Button */}
      <div className="mt-16 flex justify-center">
        <Button
          variant="outline"
          className="border-main text-main hover:bg-main rounded-xl hover:text-white"
        >
          {t("action")}
        </Button>
      </div>
    </section>
  );
}

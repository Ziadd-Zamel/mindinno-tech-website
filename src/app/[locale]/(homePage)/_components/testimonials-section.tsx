"use client";

import SectionHeader from "@/components/common/section-header";
import { testimonialGroups } from "@/lib/constants/testimonial";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);
  const currentGroup = testimonialGroups[activeIndex];

  return (
    <section className="box-container py-20">
      {/* Header */}
      <SectionHeader title={t("title")} />

      {/* Testimonials Grid */}
      <div className="relative mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"
          >
            {/* All Cards in Grid with Varying Heights */}
            {currentGroup.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  className={`mb-6 break-inside-avoid rounded-2xl bg-white p-8 dark:bg-[#121519]`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white/90">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#576071] dark:text-white/70">
                    {testimonial.content}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="mt-6 flex justify-center gap-3">
          {testimonialGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-main"
                  : "hover:bg-main border border-gray-400 bg-transparent dark:border-white"
              }`}
              aria-label={`Show testimonials group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

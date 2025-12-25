"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Array of statistics data
const stats = [
  { number: "540+", label: "happy-clients" },
  { number: "1240+", label: "projects-completed" },
  { number: "30", label: "full-specialists" },
  { number: "15+", label: "awards-won" },
];

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="box-container py-12 sm:py-16">
      {/* Stats grid - responsive layout */}
      <div className="grid min-h-[260px] grid-cols-1 gap-8 rounded-2xl bg-white px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10 xl:px-20 dark:bg-[#121519]">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="mx-auto my-auto flex flex-col items-center gap-2 sm:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            {/* Large number display */}
            <h3 className="text-main text-4xl font-semibold sm:text-5xl">{stat.number}</h3>

            {/* Descriptive label */}
            <p className="text-xs text-gray-600 sm:text-base dark:text-gray-400">{t(stat.label)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

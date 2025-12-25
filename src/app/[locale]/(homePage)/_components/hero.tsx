"use client";
import CallInput from "@/components/common/call-input";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("home");
  return (
    <section className="box-container flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
      {/* Left content section - fades in and slides up */}
      <motion.div
        className="flex flex-col items-start gap-4 sm:gap-7 lg:max-w-[480px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="max-w-[480px] text-2xl leading-10 font-semibold [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] sm:text-4xl sm:leading-18 xl:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mb-3 max-w-[480px] text-sm text-gray-500 sm:mb-6 sm:text-lg dark:text-white/70">
          {t("hero.subTitle")}
        </p>
        <CallInput />
      </motion.div>

      {/* Right image section - fades in and scales up */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src={"/assets/hero-bg.png"}
          alt="main-bg"
          width={526}
          height={0}
          className="w-full object-cover lg:w-[520px]"
        />
        <Image
          src={"/assets/hero-state-1.png"}
          alt="main-bg"
          width={100}
          height={0}
          className="absolute -start-10 top-12"
        />
        <Image
          src={"/assets/hero-state-2.png"}
          alt="main-bg"
          width={100}
          height={0}
          className="absolute -end-11 bottom-12"
        />
      </motion.div>
    </section>
  );
}

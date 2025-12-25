"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CTASection() {
  const t = useTranslations();

  return (
    <section className="bg-main py-20">
      <div className="box-container relative w-full">
        <div className="flex w-full items-center justify-center">
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Side - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-2xl leading-10 font-semibold text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] sm:text-4xl sm:leading-18 lg:max-w-[460px] xl:text-5xl">
                {t("cta.title")}
              </h2>
              <Image
                src={"/assets/cta.png"}
                alt="iamge"
                width={140}
                height={0}
                className="absolute -end-5 -bottom-10 hidden -rotate-12 lg:block rtl:hidden"
              />
            </motion.div>
            {/* Right Side - Description and Input */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center lg:max-w-[400px]"
            >
              <p className="mb-6 text-sm leading-relaxed text-white/90">
                Massa velitienes semper faucibus tristique id nibh elementum, id eu aliquamd diam mi
                tempus at laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit
                laoreet
              </p>
              <div className="flex h-14 w-full items-center justify-between rounded-2xl border border-[#D7DDE2] bg-transparent py-2 ps-4 pe-2 sm:ps-6 dark:border-[#FFFFFF4D]">
                <div className="flex h-full min-w-0 flex-1 items-center gap-2">
                  <Mail className="mt-0.5 size-5 flex-shrink-0 text-[#B4BBC3]" />
                  <input
                    type="text"
                    placeholder={t("common.mail-placeholder")}
                    className="h-full w-full min-w-0 border-none bg-transparent text-sm text-[#B4BBC3] placeholder:text-sm placeholder:text-[#B4BBC3] focus:ring-0 focus:outline-0"
                  />
                </div>
                <Button className="h-full bg-[#EDCB50] px-3 text-xs whitespace-nowrap hover:bg-[#EDCB50]/80 sm:px-4 sm:text-sm">
                  {t("common.call-booking")}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

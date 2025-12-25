"use client";

import { ceoInfo, steps } from "@/lib/constants/ceo.constant";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOStepsSection() {
  return (
    <section className="box-container pt-24 pb-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Side - CEO Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* CEO Image */}
          <div className="bg-main relative mb-8 h-[420px] w-full rounded-4xl rounded-tr-[150px] lg:w-[500px]">
            <Image
              src={ceoInfo.image}
              alt={ceoInfo.name}
              width={200}
              height={200}
              className="mx-auto -mt-20 h-[510px] w-[350px] object-cover"
            />
          </div>

          {/* CEO Details */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white/90">
              {ceoInfo.name}
            </h2>
            <p className="mb-6 text-lg text-gray-500 dark:text-white/70">{ceoInfo.title}</p>
            <p className="text-sm leading-[160%] text-[#576071] sm:text-[20px] lg:max-w-[500px] dark:text-white/70">
              {
                ceoInfo.description.split(
                  "to assess the state of your enterprise now and how you can achieve your goals.",
                )[0]
              }
              <strong>
                to assess the state of your enterprise now and how you can achieve your goals.
              </strong>
              {
                ceoInfo.description.split(
                  "to assess the state of your enterprise now and how you can achieve your goals.",
                )[1]
              }
            </p>
          </div>
        </motion.div>

        {/* Right Side - Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start"
            >
              {/* Card Content */}
              <div className="relative ml-5 flex w-full items-center gap-2 rounded-3xl bg-white p-8 ps-10 lg:ml-16 dark:bg-[#121519]">
                <div className="flex-center bg-main absolute -start-5 aspect-square size-8 rounded-full text-sm font-semibold text-white sm:size-12 sm:text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-bold text-gray-900 sm:text-lg dark:text-white/90">
                    {step.title}
                  </h3>
                  <p className="text-[10px] leading-relaxed text-[#576071] sm:text-sm dark:text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

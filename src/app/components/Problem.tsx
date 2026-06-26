
"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ShieldAlert,
  BellOff,
  Clock3,
} from "lucide-react";

const problems = [
  {
    icon: PhoneCall,
    title: "Interruptions",
  },
  {
    icon: ShieldAlert,
    title: "Spam Calls",
  },
  {
    icon: BellOff,
    title: "Missed Calls",
  },
  {
    icon: Clock3,
    title: "Voicemails",
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-200/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-w from-sky-50 via-white to-white px-8 py-14 md:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full border border-sky-200 bg-sky-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Why helloNova?
          </span>

          <h2 className="mt-7 text-4xl font-bold text-slate-900 md:text-5xl">
            Your phone shouldnt control your day.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Every incoming call demands your attention.
            Unknown callers, spam, and missed opportunities shouldnt
            interrupt what matters most.
          </p>
        </motion.div>

        {/* Horizontal Problems */}

        <div className="relative mt-16">

          {/* Connecting line */}

          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-slate-200 md:block" />

          <div className="relative grid grid-cols-2 gap-y-10 md:grid-cols-4">

            {problems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border border-sky-100 bg-white shadow-sm">
                    <Icon
                      size={24}
                      className="text-sky-600"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

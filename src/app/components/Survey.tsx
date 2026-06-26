"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Survey() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFFFFF]">

  <div className="pointer-events-none absolute inset-0">

    <div className="absolute left-1/2 top-[-0px] h-[100px] w-[900px] -translate-x-1/2 rounded-full bg-sky-300/15 blur-[220px]" />

    <div className="absolute right-[-120px] top-1/3 h-[200px] w-[500px] rounded-full bg-blue-200/20 blur-[180px]" />

    <div className="absolute left-[-120px] bottom-0 h-[100px] w-[500px] rounded-full bg-cyan-200/20 blur-[180px]" />
</div>

      <section className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
          className="flex flex-col items-center"
        >

          {/* Pill badge */}
          <span className="mb-8 inline-flex rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-sky-700 shadow-sm">
            2 minutes
          </span>

          {/* Canela headline */}
          <h1 className="font-canela italic text-slate-900 leading-[1.02] tracking-[-0.03em] text-[52px] md:text-[80px]">
            Help build<br />helloNova.
          </h1>

          {/* Sub */}
          <p className="mt-5 max-w-[300px] text-[15px] leading-relaxed text-slate-500">
            Your feedback shapes our first release.
          </p>

          {/* CTA */}
          <motion.a
            href="https://commit-survey-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-12 inline-flex items-center gap-4 rounded-full bg-white px-5 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-300 hover:shadow-[0_28px_80px_rgba(0,0,0,0.20)]"
          >
            <span className="pl-2 text-[15px] font-medium text-slate-900">
              Share feedback
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105">
              <ArrowRight size={16} className="text-white" />
            </span>
          </motion.a>

          <p className="mt-6 text-[12px] tracking-wide text-white/35">
            Early access · Guaranteed
          </p>

        </motion.div>

      </section>

    </main>
  );
}
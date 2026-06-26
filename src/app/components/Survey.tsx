
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Survey() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-sky-200/20 blur-[150px]" />
      </div>

      <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Help build helloNova.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Great products begin with great conversations.
            We would love yours.
          </p>

          {/* Curved Divider */}

          <div className="my-14 flex justify-center">

            <svg
              width="360"
              height="70"
              viewBox="0 0 360 70"
              fill="none"
              className="overflow-visible"
            >

              <defs>

                <linearGradient
                  id="curveGradient"
                  x1="0"
                  y1="0"
                  x2="360"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#BAE6FD" />
                  <stop offset="50%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#BAE6FD" />
                </linearGradient>

              </defs>

              <path
                d="M20 35 C90 5,270 5,340 35"
                stroke="url(#curveGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />

            </svg>

          </div>

          {/* CTA */}

          <motion.a
            href="https://commit-survey-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              mx-auto
              inline-flex
              items-center
              justify-between
              gap-10
              rounded-full
              bg-black
              px-7
              py-3
              text-white
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
              transition-all
              duration-300
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)]
            "
          >

            <span className="text-lg text-white font-medium">
              Share Feedback
            </span>

            <span
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-sky-500
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:scale-105
              "
            >
              <ArrowRight
                size={20}
                className="text-white"
              />
            </span>

          </motion.a>

          <p className="mt-8 text-sm text-slate-400">
            ~2 minutes • Early access • Shapes our first release
          </p>

        </motion.div>

      </section>

    </main>
  );
}

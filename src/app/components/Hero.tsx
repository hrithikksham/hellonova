
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroPhone from "../herophone.png";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-3 py-3 sm:px-5">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-[120px] sm:h-[600px] sm:w-[600px] lg:h-[750px] lg:w-[750px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-sky-200/30 blur-[150px] sm:h-[450px] sm:w-[450px]" />
      </div>

      {/* Card */}

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-b from-sky-400 via-sky-300 to-white">

   {/* Navbar */}

<header className="flex items-center justify-between px-5 py-5 sm:px-10 lg:px-12">

  <Link href="/">
    <Image
      src="/icon.png"
      alt="helloNova"
      width={220}
      height={90}
      priority
      className="
        h-auto
        w-[120px]
        sm:w-[1300px]
        lg:w-[190px]
      "
    />
  </Link>

  <a
    href="https://commit-survey-app.vercel.app/"
    className="
      inline-flex
      items-center
      rounded-full
      border
      border-white/60
      bg-white/80
      px-5
      py-2.5
      text-xs
      font-medium
      text-slate-900
      backdrop-blur-xl
      transition-all
      duration-300
      hover:scale-105
      hover:bg-white
      sm:px-6
      sm:text-sm
    "
  >
    Join Us
  </a>

</header>

        {/* Hero */}

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center px-6 pb-8 pt-6 text-center sm:px-8 lg:px-10"
        >

          {/* Badge */}

          <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur sm:text-xs">
            Coming Soon
          </span>

{/* Heading */}
<h1 className="mt-6 max-w-5xl leading-tight text-white">
  <span className="block font-canela text-4xl font-normal sm:text-4xl lg:text-5xl xl:text-5xl">
    Your AI Call Assistant
  </span>

  <span className="mt-2 block text-5xl font-bold sm:text-6xl lg:text-7xl">
    A Smarter Way to Answer!
  </span>
</h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg lg:text-xl">
            Experience helloNova — your AI phone assistant that answers
            calls, filters spam, and lets you focus on what truly matters.
          </p>

          {/* Waitlist */}

          <div
            id="waitlist"
            className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-3xl bg-white/20 p-2 backdrop-blur-lg sm:flex-row sm:rounded-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 w-full rounded-full bg-transparent px-6 text-white placeholder:text-white/70 outline-none"
            />

            <button className="flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 font-medium text-slate-900 transition-all hover:scale-[1.02]">
              Join Waitlist
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Phone */}

          <div className="relative mt-10 flex w-full justify-center sm:mt-14">

            <div className="absolute bottom-8 h-40 w-40 rounded-full bg-white/40 blur-3xl sm:h-60 sm:w-60 lg:h-72 lg:w-72" />

            <Image
              src={heroPhone}
              alt="helloNova Phone"
              priority
              className="
                relative
                z-10
                h-auto
                w-[240px]
                sm:w-[320px]
                md:w-[430px]
                lg:w-[540px]
                xl:w-[620px]
                2xl:w-[700px]
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

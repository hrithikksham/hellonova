
"use client";

import Link from "next/link";
import Image from "next/image";

import Hudo from "../hudo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-32">

{/* Background Glow */}

<div className="absolute bottom-[-120px] left-1/2 h-[420px] w-[1000px] -translate-x-1/2 rounded-full bg-sky-300/100 blur-[180px]" />

<div className="relative z-10 mx-auto max-w-7xl px-6">


        {/* Footer */}

        <div className="mt-20 flex flex-col items-center gap-8 border-t border-slate-200 py-8 lg:mt-24 lg:flex-row lg:justify-between">

          {/* Logo */}

          <div className="flex items-center">

            <Image
              src={Hudo}
              alt="HUDO"
              width={60}
              height={60}
              className="h-auto w-12 sm:w-14"
              priority
            />

          </div>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600">

            <Link
              href="/"
              className="transition-colors hover:text-black"
            >
              Features
            </Link>

            <Link
              href="/"
              className="transition-colors hover:text-black"
            >
              FAQ
            </Link>

            <Link
              href="/"
              className="transition-colors hover:text-black"
            >
              Privacy
            </Link>

            <Link
              href="/"
              className="transition-colors hover:text-black"
            >
              Contact
            </Link>

          </nav>

          {/* Copyright */}

          <p className="text-center text-sm text-slate-500">
            © 2026 HUDO Technologies.
            <br className="sm:hidden" />
            {" "}All rights reserved.
          </p>

        </div>

      </div>

      {/* Huge Brand Name */}

      <div className="relative mt-6 overflow-hidden">

        <h1
          className="
            select-none
            whitespace-nowrap
            text-center
            font-black
            leading-none
            tracking-[-0.08em]
            text-black
            text-[32vw]
            sm:text-[28vw]
            md:text-[24vw]
            lg:text-[22vw]
            xl:text-[20vw]
          "
        >
          helloNova
        </h1>

      </div>

    </footer>
  );
}

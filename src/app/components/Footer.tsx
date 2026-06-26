
"use client";

import Link from "next/link";
import Image from "next/image";

import Hudo from "../hudo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 sm:pt-22 lg:pt-28">

{/* Background Glow */}

<div className="absolute bottom-[-10px] left-1/2 h-[300px] w-[1000px] -translate-x-1/2 rounded-full bg-sky-300/100 blur-[180px]" />

<div className="relative z-10 mx-auto max-w-7xl px-6">


        {/* Footer */}

        <div className="mt-20 flex flex-col items-center gap-8  py-8 lg:mt-24 lg:flex-row lg:justify-between">

          {/* Logo */}

          <div className="flex items-center">

            <Image
              src={Hudo}
              alt="HUDO"
              width={80}
              height={100}
              className="h-auto w-18 sm:w-24"
              priority
            />

          </div>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600">

            <Link
              href=""
              className="transition-colors hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/"
              className="transition-colors hover:text-black"
            >
              Privacy
            </Link>

            <Link
              href="hellonova@hudo.co.in"
              className="transition-colors hover:text-black"
            >
              Contact
            </Link>

          </nav>

          {/* Copyright */}

          <p className="text-center text-sm text-slate-500">
            © 2026 HUDO.CO.IN. All rights reserved.
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
            text-[23vw]
            sm:text-[10vw]
            md:text-[10vw]
            lg:text-[10vw]
            xl:text-[10vw]
          "
        >
          HELLONOVA
        </h1>

      </div>

    </footer>
  );
}

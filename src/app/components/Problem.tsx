"use client";

import { motion } from "framer-motion";
import { PhoneCall, ShieldAlert, BellOff, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── types ──────────────────────────────────────────────── */
type Item = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent?: true;
};

/* ─── content ────────────────────────────────────────────── */
const items: Item[] = [
  {
    icon: PhoneCall,
    title: "Incoming calls",
    body: "Every ring demands attention. Most don't.",
  },
  {
    icon: ShieldAlert,
    title: "Spam & noise",
    body: "Most aren't important. All steal focus.",
  },
  {
    icon: BellOff,
    title: "Missed moments",
    body: "The ones that matter look just like the rest.",
  },
  {
    icon: Sparkles,
    title: "helloNova",
    body: "AI answers first. You decide later.",
    accent: true,
  },
];

/*
 * SVG curve path — viewBox 0 0 56 888
 * Center column is exactly w-14 (56 px).
 * With preserveAspectRatio="none", x scale = 56/56 = 1 (pixel-perfect).
 * y stretches to match actual rendered height.
 *
 * Row height estimate: py-9 (72 px) + card ~150 px = 222 px/row → 888 px total
 * Node y centers: 111 | 333 | 555 | 777
 * Path leans x=16 toward left cards (even), x=40 toward right cards (odd).
 */
const CURVE =
  "M28 0 " +
  "C28 55 16 75 16 111 C16 147 28 165 28 222 " +   // node 0 — left
  "C28 277 40 297 40 333 C40 369 28 387 28 444 " + // node 1 — right
  "C28 499 16 519 16 555 C16 591 28 609 28 666 " + // node 2 — left
  "C28 721 40 741 40 777 C40 813 28 850 28 888";   // node 3 — right

/* ─── section ────────────────────────────────────────────── */
export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-28 lg:py-40">

      <div className="relative mx-auto max-w-5xl px-6">

        {/* ── heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-24 text-center lg:mb-32"
        >
          <span className="inline-block rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[11px] uppercase tracking-[0.26em] text-sky-500">
            Why helloNova
          </span>

          <h2 className="mt-8 font-canela text-[clamp(2.8rem,8vw,5.75rem)] leading-[0.92] tracking-[-0.04em] text-slate-900">
            Your phone<br />
            shouldn&apos;t<br />
            run your day.
          </h2>

          <p className="mx-auto mt-6 max-w-xs text-[15px] leading-relaxed text-slate-500">
            Every call demands attention.<br />
            Most don&apos;t deserve it.
          </p>
        </motion.div>

        {/* ── desktop timeline ── */}
        <div className="relative hidden lg:block">

          {/*
           * The SVG is w-14 (56 px) — exactly matching grid-cols center column.
           * left-1/2 -translate-x-1/2 centers it on the midpoint.
           * preserveAspectRatio="none" → x scale is always 1×, y stretches to fit.
           */}
          <svg
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-full w-14 -translate-x-1/2"
            viewBox="0 0 56 888"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d={CURVE}
              stroke="#bae6fd"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          {items.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-56px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                // Three columns: [card area | 56px node col | card area]
                className="grid grid-cols-[1fr_56px_1fr] items-center py-9"
              >
                {/* Left slot — card on even rows, empty on odd */}
                <div className="pr-10">
                  {isLeft && <Card item={item} Icon={Icon} />}
                </div>

                {/* Node — always in the center column, always on the midline */}
                <div className="relative z-10 flex items-center justify-center">
                  <Node accent={item.accent} />
                </div>

                {/* Right slot — card on odd rows, empty on even */}
                <div className="pl-10">
                  {!isLeft && <Card item={item} Icon={Icon} />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── mobile timeline ── */}
        <div className="relative lg:hidden">
          {/* Left-rail line */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-[17px] top-2 border-l border-dashed border-sky-200"
          />

          <div className="flex flex-col gap-7">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-5"
                >
                  <div className="relative z-10 mt-4 flex-shrink-0">
                    <Node accent={item.accent} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Card item={item} Icon={Icon} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── node ───────────────────────────────────────────────── */
function Node({ accent }: { accent?: true }) {
  if (accent) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 shadow-[0_0_0_8px_rgba(186,230,253,0.35)]">
        <Sparkles size={15} className="text-white" strokeWidth={1.75} />
      </div>
    );
  }
  return (
    <div className="h-[18px] w-[18px] rounded-full border-2 border-sky-200 bg-white" />
  );
}

/* ─── card ───────────────────────────────────────────────── */
function Card({ item, Icon }: { item: Item; Icon: LucideIcon }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={[
        "rounded-[26px] border bg-white/80 p-7 backdrop-blur-sm",
        item.accent
          ? "border-sky-200 shadow-[0_12px_48px_rgba(14,165,233,0.09)]"
          : "border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.05)]",
      ].join(" ")}
    >
      <div
        className={[
          "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
          item.accent ? "bg-sky-500 text-white" : "bg-sky-50 text-sky-500",
        ].join(" ")}
      >
        <Icon size={20} strokeWidth={1.75} />
      </div>

      <h3 className="mt-5 font-canela text-[2.1rem] leading-none tracking-[-0.03em] text-slate-900">
        {item.title}
      </h3>

      <p className="mt-3.5 text-[13.5px] leading-[1.65] text-slate-500">
        {item.body}
      </p>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
      <div
        className="glow -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-accent-violet/25"
        aria-hidden="true"
      />
      <div
        className="glow top-40 right-0 h-[400px] w-[400px] bg-accent-cyan/15"
        aria-hidden="true"
      />
      <div
        className="glow top-10 left-0 h-[350px] w-[350px] bg-accent-pink/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm"
        >
          Curated by Farhan Innovation &amp; Technology (FIT)
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Find the{" "}
          <span className="gradient-text">prompt behind</span>
          <br className="hidden sm:block" /> your next image.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg"
        >
          Explore AI image prompts made to help you create better images. Find a prompt
          you like, copy it, and use it with your favorite AI tool. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
}

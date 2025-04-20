import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import SplineViewer from "./SplineViewer";

export const About = () => {
  return (
    <section id="about">
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="mx-auto grid max-w-4xl grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SplineBlock />
        <AboutBlock />
      </motion.div>
    </div>
    </section>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 md:col-span-6 bg-zinc-800 border border-zinc-700 rounded-lg p-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-2 size-14 rounded-full"
    />
    <h1 className="text-2xl font-medium leading-snug">
      Hi, I'm Ayush.{" "}
      <span className="text-zinc-400">I build cool websites like this one.</span>
    </h1>
  </Block>
);

const SplineBlock = () => (
  <motion.div
    variants={{
      initial: { scale: 0.5, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
    }}
    transition={{
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    }}
    className="col-span-12 md:col-span-6 flex items-center justify-center"
  >
    <SplineViewer />
  </motion.div>
);

const AboutBlock = () => (
  <Block className="col-span-12 bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-2xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion.
      </span>
    </p>
  </Block>
);
"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { slideInFromLeft } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion';

export function Project() {
  return (
    <>
      <motion.div
        variants={slideInFromLeft(0.8)}
        className='Welcome-box py-[16px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-[2px] h-7 w-10' />
        <h1 className="Welcome-text text-[13px]">Some Of My Visual Work</h1>
      </motion.div>
      <HeroParallax products={products} />
    </>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://i.ibb.co/pwVjytQ/american.jpg",
  },
];

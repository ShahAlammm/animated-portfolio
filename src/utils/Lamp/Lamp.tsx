"use client"
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Image from "next/image";


export function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  py-4  tracking-tight"
      >
        <Image
        src={'https://i.ibb.co/pwVjytQ/american.jpg'}
        height={500}
        width={500}
        alt="image"
        className="z-10"
        />
      </motion.h1>
    </LampContainer>
  );
}

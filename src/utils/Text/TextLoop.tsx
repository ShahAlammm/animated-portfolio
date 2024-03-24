"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TextLoop() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Shah Alam.",
      className: "text-blue-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

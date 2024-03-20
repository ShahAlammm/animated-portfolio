"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TextLoop() {
  const words = [
    {
      text: "My",
    },
    {
      text: "Name",
    },
    {
      text: "Is",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
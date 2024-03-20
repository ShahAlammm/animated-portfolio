
import React from "react";
import {TextRevealCard} from "../../components/ui/text-reveal-card";


export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-start bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Front-End Developer"
        revealText="MERN-Stack Developer"
      >

      </TextRevealCard>
    </div>
  );
}

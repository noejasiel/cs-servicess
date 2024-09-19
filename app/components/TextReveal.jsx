"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function TextRevealCardPreview({
    msg1,
    msg2
}) {
  return (
    (<div
      className="flex items-center justify-center  rounded-2xl w-full">
      <TextRevealCard text={msg1} revealText={msg2} >
        {/* <TextRevealCardTitle>
            {msg1}  
        </TextRevealCardTitle> */}
        {/* <TextRevealCardDescription>
            {msg2}
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>)
  );
}

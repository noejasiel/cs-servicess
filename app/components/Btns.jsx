"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo({msg}) {
  return (
    (<div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#e4787e]/50 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
       {msg}
      </Button>
    </div>)
  );
}

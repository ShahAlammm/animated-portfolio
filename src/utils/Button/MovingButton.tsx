"use client";
import React from "react";
import { Button } from "../../components/ui/moving-border";

export function MovingBorder() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Resume
      </Button>
    </div>
  );
}

"use client";
import React from "react";
import { Button } from "../../components/ui/moving-border";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export function MovingBorder() {
  return (
    <div className="z-40">
      <Link href='https://drive.google.com/file/d/1wAoSrVzjn7m35KLt_g90HumslvthfLVL/view?usp=drive_link'>
        <Button
          borderRadius="1rem"
          className=" dark:bg-slate-900 button-primary dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Resume
        </Button>
      </Link>
    </div>
  );
}

"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

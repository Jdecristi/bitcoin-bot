import { Inter } from "next/font/google";

import "@/src/globals.css";

import type { Metadata } from "next";
import type { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin Bot",
  description: "A bot to manage bitcoin tades",
};

type RootLayoutComponent = FC<{
  children: JSX.Element;
}>;

const RootLayout: RootLayoutComponent = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;

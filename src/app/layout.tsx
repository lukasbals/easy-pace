import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContextProviders from "@/components/ContextProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Pace",
  description: "Radeln ohne schlechtes Gewissen",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProviders>{children}</ContextProviders>
      </body>
    </html>
  );
}

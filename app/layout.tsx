import "./globals.css";
import type { Metadata } from "next";
import { Asap } from "next/font/google";
import { cn } from "@/lib/utils";

const fontDisplay = Asap({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const fontBody = Asap({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Synapsis.id - Connect Everything",
  description:
    "PT. Synapsis Sinergi Digital, is a company that working on system prototyping especially Internet of Things systems and devices. We provide an effective and efficient solution to help our partners &amp; clients using advanced and reliable technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased font-body bg-white text-slate-800/75",
          fontDisplay.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

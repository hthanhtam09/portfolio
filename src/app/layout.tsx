import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FirstMountProvider } from "./provider";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <AnimatePresence mode="wait">
          <FirstMountProvider>{children}</FirstMountProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}

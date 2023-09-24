import HeaderComponent from "@components/Header";
import PluginsComponent from "@components/Plugins";
import cc from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@styles/root.css";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaming Landing Page",
  description: "Generated by tai.sugar1001@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <PluginsComponent />

      <body
        className={cc(
          process.env.NODE_ENV === "development" ? "debug-screens" : "",
          inter.className
        )}
      >
        <main id='root' className='min-h-screen px-24'>
          <HeaderComponent />

          {children}
        </main>
      </body>
    </html>
  );
}

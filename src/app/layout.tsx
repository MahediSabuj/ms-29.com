import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import styles from "./page.module.css";

import "./globals.css";

const adobeCleanFont = localFont({ src: "./AdobeClean-Regular.otf" });

export const metadata: Metadata = {
  title: "MS-29"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={adobeCleanFont.className}>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

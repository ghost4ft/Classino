import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import {Footer} from "./_components/footer/";
import { Header } from "./_components/header/";



const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/Yekan/Yekan-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Yekan/Yekan-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Yekan/Yekan-Medium.woff",
      weight: "500",
      style: "medium",
    },
  ],
  display: "swap",
  variable: "--font-yekan",
});

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Classino",
  description: "Classino is a platform for creating and sharing courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${yekan.variable} ${roboto.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

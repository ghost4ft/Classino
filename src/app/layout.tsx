import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

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
      <body className="flex flex-col min-h-screen font-bold uppercase bg-white text-base-100 dark:bg-base-100 dark:text-base-content">
        <header className="flex items-center justify-center text-3xl h-20">
          دوره معماری ری اکت
        </header>
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <footer className="flex items-center justify-center text-3xl h-20">
          FOOTER
        </footer>
      </body>
    </html>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather",
  description: "Weather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(geistSans.variable, geistMono.variable)}>
        <div className="container py-5 px-5 min-vh-100">{children}</div>
      </body>
    </html>
  );
}

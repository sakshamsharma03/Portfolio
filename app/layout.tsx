import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham Sharma | Freelance Mobile App Developer",
  description: "High-performance React Native mobile applications and Java Spring Boot backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          "antialiased bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary"
        )}
      >
        {children}
      </body>
    </html>
  );
}

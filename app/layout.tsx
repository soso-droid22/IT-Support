import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT-Support / Links ",
  description: "ALL Website Link List for free ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={inter.className}>
       <meta charSet="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SpeedInsights/>
        <Analytics/>
         <Header />
       <main>{children}</main>
      </body>
    </html>
  );
}

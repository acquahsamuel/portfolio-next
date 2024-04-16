import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat  } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../components/navbar";

const inter = Inter({ subsets: ["latin"], weight : ["400", "700"]  });
const CaveatFont = Caveat({ subsets : ['latin'] , weight : ["400", "700"] });
const RobotoFont = Roboto({ subsets : ['latin'] , weight : ["400", "700"] });


export const metadata: Metadata = {
  title: "Samuel Acquah portfolio",
  description: "Building Startups, Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

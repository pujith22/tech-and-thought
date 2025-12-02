import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pujith Sai Kumar Korlepara - Systems & Machine Intelligence",
    template: "%s | Pujith Sai Kumar Korlepara",
  },
  description: "Personal blog and portfolio of Pujith Sai Kumar Korlepara - M.Tech CS @ IIT Bombay. Exploring systems engineering, machine intelligence, and technical explorations.",
  keywords: ["Machine Learning", "Systems Engineering", "Computer Science", "IIT Bombay", "GATE", "Distributed Systems"],
  authors: [{ name: "Pujith Sai Kumar Korlepara" }],
  creator: "Pujith Sai Kumar Korlepara",
  publisher: "Pujith Sai Kumar Korlepara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pujith.com",
    siteName: "Pujith's Tech & Thought",
    title: "Pujith Sai Kumar Korlepara - Systems & Machine Intelligence",
    description: "Personal blog and portfolio exploring systems engineering, machine intelligence, and technical deep dives.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pujith Sai Kumar Korlepara",
    description: "Systems & Machine Intelligence | M.Tech CS @ IIT Bombay",
    creator: "@pujith28",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const canonicalUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pujith.com";
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="canonical" href={canonicalUrl} />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

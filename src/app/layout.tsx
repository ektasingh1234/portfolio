import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekta Singh — AI/ML Engineer | GenAI | Data Science",
  description: "Ekta Singh is a Computer Science (Data Science) student building AI/ML, Generative AI, MLOps and research-driven software systems.",
  keywords: ["Ekta Singh", "AI ML Engineer", "GenAI Developer", "Data Science", "MLOps", "PRISM", "PHANTOM", "NeuroSearch", "Manipal University Jaipur", "Top 50 Female Coders"],
  authors: [{ name: "Ekta Singh" }],
  openGraph: {
    title: "Ekta Singh — AI/ML Engineer | GenAI | Data Science",
    description: "Building Intelligent Systems That Solve Real Problems. Production AI/ML, RAG, MLOps, and Applied Machine Learning Research.",
    url: "https://github.com/ektasingh1234",
    siteName: "Ekta Singh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekta Singh — AI/ML Engineer | GenAI | Data Science",
    description: "Building Intelligent Systems That Solve Real Problems.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='24' fill='%230F172A'/><text x='50%' y='62%' font-family='sans-serif' font-weight='900' font-size='50' fill='%236366F1' text-anchor='middle'>ES</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500 selection:text-white flex flex-col transition-colors duration-300">
        <ThemeProvider>
          {/* Desktop Custom Cursor */}
          <CustomCursor />

          {/* Right Edge Scroll Progress */}
          <ScrollProgress />

          {/* Page Content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

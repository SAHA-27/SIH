import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QuantumBackground from "@/components/QuantumBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AITutorModal from "@/components/AITutorModal";
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
  title: "Quantum xplore",
  description:
    "Learn quantum concepts, build quantum circuits, run simulations, visualize the Bloch Sphere, and interact with an AI Quantum Tutor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050814] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider>
          <QuantumBackground />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <AITutorModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
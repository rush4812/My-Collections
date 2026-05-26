import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rushali Jivrajani | Software Developer",
  description: "Ultra-premium futuristic developer portfolio of Rushali Jivrajani, specializing in React.js, Next.js, Node.js, and immersive web experiences.",
  keywords: ["Rushali Jivrajani", "Software Developer", "React Developer", "Full Stack", "Portfolio", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-zinc-100 selection:bg-white/20`}>
        <PageLoader />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-800/10 blur-[150px] mix-blend-screen" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-700/10 blur-[120px] mix-blend-screen" />
            </div>
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

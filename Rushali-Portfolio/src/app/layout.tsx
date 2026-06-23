import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter" // Keep variable name same to avoid breaking other things, or rename it
});

export const metadata: Metadata = {
  title: "Rushali Jivrajani | Software Developer",
  description: "Professional medical-inspired clean portfolio of Rushali Jivrajani, specializing in React.js, Next.js, Node.js, and immersive web experiences.",
  keywords: ["Rushali Jivrajani", "Software Developer", "React Developer", "Full Stack", "Portfolio", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-white text-[#0B253D] selection:bg-[#009ca6]/20 selection:text-[#0B253D]`}>
        <PageLoader />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

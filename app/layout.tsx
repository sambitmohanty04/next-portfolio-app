import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Footer from '@/components/home/Footer/Footer'
import ScrollToTop from "@/components/helper/ScrollToTop";
import Chat from '@/components/Chat/Chat';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0127]`}
      >
        <ResponsiveNav />
        {children}
        <Toaster position="top-right" containerStyle={{
          top: 80,     
          right: 10,    
          left: "auto",  
          bottom: "auto",
          zIndex: 9999,
          width:300
        }}/>
        <Chat />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

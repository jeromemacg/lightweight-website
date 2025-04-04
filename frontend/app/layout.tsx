import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J's thoughts and musings on tech",
  description: "The random musings of J",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar /> {/* ✅ Navbar added here */}
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

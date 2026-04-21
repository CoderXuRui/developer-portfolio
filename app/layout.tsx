import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "张栩睿 | 后端开发工程师",
  description: "个人技术作品集 - Java技术栈后端开发工程师，专注于构建高效、可靠的后端系统",
  keywords: ["后端开发", "Java", "Spring Boot", "个人作品集", "技术博客"],
  authors: [{ name: "张栩睿" }],
  openGraph: {
    title: "张栩睿 | 后端开发工程师",
    description: "个人技术作品集 - Java技术栈后端开发工程师",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans, Outfit } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEn = locale === "en";

  return {
    title: isEn ? "Zhang Xurui | Backend Engineer" : "张栩睿 | 后端开发工程师",
    description: isEn
      ? "Personal tech portfolio - Java backend engineer focused on building efficient and reliable systems"
      : "个人技术作品集 - Java技术栈后端开发工程师，专注于构建高效、可靠的后端系统",
    keywords: isEn
      ? ["Backend", "Java", "Spring Boot", "Portfolio", "Tech Blog"]
      : ["后端开发", "Java", "Spring Boot", "个人作品集", "技术博客"],
    authors: [{ name: isEn ? "Zhang Xurui" : "张栩睿" }],
    openGraph: {
      title: isEn ? "Zhang Xurui | Backend Engineer" : "张栩睿 | 后端开发工程师",
      description: isEn
        ? "Personal tech portfolio - Java backend engineer"
        : "个人技术作品集 - Java技术栈后端开发工程师",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

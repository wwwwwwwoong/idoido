import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDO - 아이와 함께 만드는 동화책",
  description: "아이가 그린 낙서가 마법처럼 동화책 속 캐릭터가 되어요. AI와 함께 나만의 특별한 동화책을 만들어보세요.",
  keywords: ["동화책", "어린이", "AI", "그림", "이야기", "교육"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundColor: "var(--background)" }}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumya Agency | Transformando histórias em potência",
  description:
    "Agência inclusiva para creators, streamers e apresentadores digitais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-[#071b3a] antialiased`}>
        {children}
      </body>
    </html>
  );
}
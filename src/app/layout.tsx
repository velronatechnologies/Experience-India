import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anek-latin",
});

export const metadata: Metadata = {
  title: "Experience India | A Ticpin Giveback",
  description: "Experience India is shaped by millions of Indians with one powerful vision: to build a better society through every child.",
  icons: {
    icon: "/favicon.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={anekLatin.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Experience India | A Ticpin Giveback",
  description: "We’re quietly working on new ways to make a bigger difference. Updates will be shared soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/WEB FAV ICON.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

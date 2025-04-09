import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "TGO Spring Games",
  description: "The Great Outdoors Spring Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-100`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import ClientLayoutWrapper from "@/ClientLayoutWrapper";
import { Inter } from 'next/font/google';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Next.js Dashboard",
  description: "A modern dashboard built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/layout/Navbar';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Footer from '@/components/layout/Footer';
import { ThemeInitializer } from '@/components/providers/ThemeInitializer';
import "./globals.css";
import "@/shared/override.css";
import 'katex/dist/katex.min.css';

export const metadata = {
  title: 'SaukCode',
  description: 'Plataforma personal de recopilación de contenido académico',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeInitializer />
        <Navbar />
        <Breadcrumb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
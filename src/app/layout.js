'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Breadcrumb from '@/components/layout/Breadcrumb';
import "@/styles/override.css";
import Footer from '@/components/layout/Footer';
import 'katex/dist/katex.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Limpiar todas las clases de tema existentes
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark-mode-override');
    document.documentElement.classList.remove('light-mode-override');
    
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Inicializando tema desde layout:', {
      savedTheme,
      prefersDark
    });
    
    // Aplicar el tema según las preferencias
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark-mode-override');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.add('light-mode-override');
    } else if (prefersDark) {
      document.documentElement.classList.add('dark-mode');
    }
    // Si no hay preferencia y el sistema está en modo claro, no necesitamos clase
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <Breadcrumb />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
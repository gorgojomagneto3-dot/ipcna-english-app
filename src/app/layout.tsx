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
  title: "English Academy - Aprende Inglés con el Método Pareto",
  description: "Aprende inglés de manera efectiva aplicando la Ley de Pareto: el 20% del contenido que te dará el 80% de los resultados. Cursos estructurados de nivel básico a avanzado.",
  keywords: ["inglés", "aprender inglés", "cursos de inglés", "método pareto", "english academy"],
  authors: [{ name: "English Academy" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "English Academy - Aprende Inglés",
    description: "El 20% del contenido que te dará el 80% de los resultados.",
    type: "website",
    siteName: "English Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Academy - Aprende Inglés",
    description: "El 20% del contenido que te dará el 80% de los resultados.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

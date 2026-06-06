import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOSTERRA Mezcal · El espíritu de nuestra tierra",
  description:
    "Mezcal artesanal oaxaqueño de Casa Jiménez Elixirs & Spirits. Agave Espadín, tahona de piedra y alambique de cobre.",
  // Demo educativa: no indexar para no competir con el sitio real.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-obsidian text-ivory font-body">
        {children}
      </body>
    </html>
  );
}

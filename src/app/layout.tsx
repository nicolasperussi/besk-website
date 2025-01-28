import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Bergstein Skorkowski Advogados",
  description:
    "Bergstein Skorkowski Advogados é um escritório com sólida experiência na área da saúde.",
};

const larken = localFont({
  src: [
    {
      path: "../../public/fonts/larken-variable.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-larken",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${larken.variable} antialiased`}>
        <Header />
        {children}
        <Contact />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

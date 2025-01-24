import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${larken.variable} antialiased`}>{children}</body>
    </html>
  );
}

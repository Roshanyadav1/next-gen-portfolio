import type { Metadata } from "next";
import "./globals.css";
import 'animate.css';

export const metadata: Metadata = {
  title: "Roshan Personal Portfolio",
  description: "Front-end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

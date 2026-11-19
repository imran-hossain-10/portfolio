
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rifat Hossain | Full Stack Web Developer",
  description:
    "Personal portfolio of Rifat Hossain, a Full Stack Web Developer building modern and responsive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

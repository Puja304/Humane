import type { Metadata } from "next";
import {inter, playfair} from "../fonts"
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: "Humane The Thrift Store",
  description: "Ethical. Local. Circular ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-XN9C0ZQ98G" />
      </body>
    </html>
  );
}


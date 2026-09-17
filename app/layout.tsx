import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "African Footprint Technologies | Clouding a Brighter Africa",
  description: "African Footprint Technologies helps organisations build, secure and scale their technology footprint across Africa through cloud, cybersecurity, data, AI and digital transformation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

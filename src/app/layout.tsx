import type { Metadata } from "next";
import "./globals.scss";

import { Analytics } from "@vercel/analytics/next"

export const runtime = "edge"


export const metadata: Metadata = {
  title: "ZEONG's",
  description: "Hello,^^",
  icons: {
    icon: "/zeongFace.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

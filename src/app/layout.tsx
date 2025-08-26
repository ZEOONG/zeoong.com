import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./globals.scss";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "ZEONG's",
  description: "Hello,^^",
  icons: {
    icon: "/zeongFace.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

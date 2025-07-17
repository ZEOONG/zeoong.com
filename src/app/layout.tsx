import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "ZEOONG's",
  description: "Hello,^^",
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
      </body>
    </html>
  );
}

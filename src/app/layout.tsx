import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next/Typescript-Template",
  description: "Tailwind CSS, TypeScript and Next.js template",
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
      </body>
    </html>
  );
}

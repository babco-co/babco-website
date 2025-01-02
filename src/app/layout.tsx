import type { Metadata } from "next";
import { TransitionProvider } from "@/components/page-transition";
import { geistMono, geistSans, inter } from "@/styles/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Babco.co",
  description: "Babco.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

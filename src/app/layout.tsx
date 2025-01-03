import type { Metadata } from "next";
import { TransitionProvider } from "@/components/page-transition";
import Footer from "@/components/footer";
import { helveticaNeue, inter } from "@/styles/fonts";
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
        className={`${helveticaNeue.variable} ${inter.variable} antialiased`}
      >
        <TransitionProvider>
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}

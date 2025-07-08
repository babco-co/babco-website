import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import TransitionProvider from "@/components/page-transition";
import { helveticaNeue, inter } from "@/styles/fonts";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import CustomCursor from "@/components/custom-cursor";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${helveticaNeue.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <TransitionProvider>
            <CustomCursor />
            {children}
            <SanityLive />
            <Footer />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

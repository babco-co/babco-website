import type { Metadata } from "next";
import TransitionProvider from "@/components/page-transition";
import { helveticaNeue, inter } from "@/styles/fonts";
import Footer from "@/components/footer";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
            {children}
            <Footer />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

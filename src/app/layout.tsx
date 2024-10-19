import type { Metadata } from "next";
import Header from "@/components/layout/header";
import { ModalProvider } from "@/components/ui/contact-us/modal-context";
import { geistMono, geistSans, inter } from "@/styles/fonts";
import Modal from "@/components/ui/contact-us/modal";
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
        <ModalProvider>
          <Header />
          {children}
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}

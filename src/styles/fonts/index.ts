import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const helveticaNeue = localFont({
  src: [
    {
      path: "./HelveticaNeue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HelveticaNeue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./HelveticaNeue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./HelveticaNeue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica", // CSS variable
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

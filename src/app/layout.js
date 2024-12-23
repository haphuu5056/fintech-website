import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/NavBar";
import Header from "@/components/header/PreHeader";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Fintech Application",
  description: "Empowering financial solutions with modern technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          <Header/>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}

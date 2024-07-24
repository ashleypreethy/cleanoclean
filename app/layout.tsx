import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavbar";



export const metadata: Metadata = {
  title: "CleanO -Cleaning Services",
  description: "Cleaning Service App",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNavbar/>
        <Navbar/>
        <main className="relative overflow-hidden">
           {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

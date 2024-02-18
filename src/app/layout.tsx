import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { CartProvider } from "@/context/CartContext";
import { getCart } from "./api/cart/cart";
import { Search } from "@/components/search/Search";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Washazon",
  description: "Washazon: The best place to buy washers and dryers.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <CartProvider cart={cart}>
          <Header />
          <Search />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

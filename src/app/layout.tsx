import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { CartProvider } from "@/context/CartContext";
import { getCart } from "./api/cart/cart";
import { Search } from "@/components/search/Search";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
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
      <UserProvider>
        <body className={inter.className} suppressHydrationWarning>
          <CartProvider cart={cart}>
            <Header />
            <Suspense>
              <Search />
            </Suspense>
            {children}
            <Footer />
          </CartProvider>
        </body>
      </UserProvider>
    </html>
  );
}

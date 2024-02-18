import { AccordionProvider } from "@/context/AccordionContext";

export default function ProductPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AccordionProvider>{children}</AccordionProvider>
    </div>
  );
}

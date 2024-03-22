import { NavbarDemo } from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";



export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    return (
      <html lang={locale}>
        <body className="">
          <div className="relative w-full flex items-center justify-center">
          <NavbarDemo/>
          </div>
          <StarsCanvas/>
          {children}
        </body>
      </html>
    );
  }
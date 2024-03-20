import { NavbarDemo } from "@/components/Navbar";



export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    return (
      <html lang={locale}>
        <body>
          <div className="relative w-full flex items-center justify-center">
          <NavbarDemo/>
          </div>
          {children}
        </body>
      </html>
    );
  }
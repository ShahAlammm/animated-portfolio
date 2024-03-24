

import Navbar from "@/components/Navbar";
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
        <body>
          <div>
          <Navbar/>
          </div>
          {/* <StarsCanvas/> */}
          {children}
        </body>
      </html>
    );
  }
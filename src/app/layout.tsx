import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers/page";
import NavberComponents from "@/components/navber/page";
import ReduxProvider from "@/components/reduxProvider/reduxProvider";
import { Toaster } from 'react-hot-toast';
import FooterPage from "@/components/footer/page";
import SearchNavber from "@/components/commentInput/searchNavber/page";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >

          
        <ReduxProvider> 
        
        <Providers>   {/* next ui provider  */}   
        <NavberComponents/>
        <SearchNavber/>
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
        <FooterPage/>
        <Toaster /> 
        </Providers>
        
        </ReduxProvider>



      </body>
    </html>
  );
}

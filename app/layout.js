import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata = {
  title: "Income Expense Tracker",
  description: "Generated by create next app",
};


const inter = Inter({
  subsets: ['latin'],
  preload: true,
});
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">

    <head>
        <link rel="icon" href="/fevican.png" type="image/png" sizes="32x32" />

        <title>Income Expense Tracker</title>
        <meta name="description" content="Track your income and expenses efficiently with our smart financial tracker." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <body
        className={`${inter.className}`}
        // this is just used for the error solution
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""

        >
        {/*Header*/}
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors/>
        {/*Footer*/}
        <footer className="border-t border-gray-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm  text-black">
              © {new Date().getFullYear()} IET. Made with ❤️. All rights reserved.
            </p>
          </div>
        </footer>
        
      </body>
    </html>
    </ClerkProvider>
  );
}

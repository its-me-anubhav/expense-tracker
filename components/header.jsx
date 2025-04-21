import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className=" fixed top-0 w-full backdrop-blur-md bg-[#d3edf1] z-50 border-b">
      <nav className="container mx-auto px-4 py-1 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logofinal.png"}
            alt="Welth Logo"
            width={200}
            height={80}
            className="h-20 w-auto object-contain pl-0"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8 text-center">
          <SignedOut>
            <p>Hey, Welcome to Expense Tracker App</p>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className=" text-black hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline" className='bg-[#3da8a4] hover:bg-[#477a79]'>
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center bg-[#3da8a4] hover:bg-[#477a79] gap-2">
                <PenBox className="text-black" size={18} />
                <span className="hidden md:inline text-black">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className='bg-[#3da8a4] hover:bg-[#477a79]'>Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

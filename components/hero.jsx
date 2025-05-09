"use client";
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null)

   useEffect(( ) => {
    if (!imageRef.current) return;
   const imageElement = imageRef.current; 

   const handleScroll = () =>{
     const scrollPosition = window.scrollY;
     const scrollTheresold = 100;
      
     if (imageElement) {
     if(scrollPosition>scrollTheresold){
        imageElement.classList.add("scrolled");
     } else    {
        imageElement.classList.remove("scrolled");
     }
   }
  }
   window.addEventListener("scroll", handleScroll)
   return () =>window.removeEventListener("scroll", handleScroll);
   },[]);

  return (
   <div className="min-h-screen bg-gradient-to-b from-[#d3edf1] via-white to-[#e7f8f9] px-4 py-12 text-black">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-6 sm:mb-10 leading-snug sm:leading-tight">
            Experience a smarter way to manage your finances
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-64 bg-[#3da8a4] hover:bg-[#518d8a] text-black">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-4 sm:gap-6 pt-6 mb-10">
            <img src="/pp.png" alt="PayPal" className="h-10 sm:h-12" />
            <img src="/ap.png" alt="Apple Pay" className="h-8 sm:h-9" />
            <img src="/vs.png" alt="Visa" className="h-5 sm:h-6" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div id="why-us" className="max-w-7xl mx-auto space-y-6 pt-0 sm:pt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-10 text-center sm:text-left">
          Why Choose Us?
        </h2>
        <p className="text-base sm:text-lg text-center sm:text-left">
          Our expense tracker app combines top-notch security, a user-friendly experience, 
          and powerful features to help you monitor your spending, stay on budget, and reach 
          your financial goals. Whether you're tracking daily expenses or planning for the future,
          we've got you covered—effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <div className="bg-[#e5f1f3] p-4 rounded-lg shadow-lg w-full sm:w-1/2">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Real-Time Financial Insights</h3>
            <p className="text-sm sm:text-base">Stay on top of your money with smart categorization and up-to-date expense tracking powered by AI.</p>
          </div>
          <div className="bg-[#e5f1f3] p-4 rounded-lg shadow-lg w-full sm:w-1/2">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Personalized Budgeting Tools</h3>
            <p className="text-sm sm:text-base">Create budgets that adapt to your spending habits and get notified before you overspend.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HeroSection

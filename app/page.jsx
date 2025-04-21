"use client";

import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { Card,CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  // Stats Section Data
  const statsData = [
    { value: "10K+", label: "Users" },
    { value: "50M+", label: "Transactions" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  // Features Section Data
  const featuresData = [
    {
      title: "AI Insights",
      description: "Get automated insights into your spending habits.",
      icon: "🤖",
    },
    {
      title: "Expense Tracking",
      description: "Easily categorize and track your expenses.",
      icon: "💰",
    },
    {
        "title": "Monthly Financial Summary Emails",
        "description": "Receive monthly emails with a summary of your income and expenses.",
        "icon": "📩"
    },
    {
      title: "Recurring Transactions",
      description: "Automate and manage your recurring bills and subscriptions.",
      icon: "🔁",
    },
    {
      title: "Smart Budgeting",
      description: "Set monthly budgets and get alerts when you're nearing limits.",
      icon: "📊",
    },
    {
      title: "Savings Goals",
      description: "Create and track goals to boost your savings progress.",
      icon: "🏦",
    },
  ];

  // How It Works Section Data
  const howItWorksData = [
    {
      title: "Connect Your Accounts",
      description: "Sync all your financial accounts securely.",
      icon: "🔗",
    },
    {
      title: "Track Your Spending",
      description: "Get real-time updates on where your money goes.",
      icon: "📊",
    },
    {
      title: "Optimize Your Budget",
      description: "Use AI-powered tools to manage your budget efficiently.",
      icon: "📉",
    },
  ];

  // Testimonials Section Data (Dynamically Managed)
  const [testimonialsData, setTestimonialsData] = useState([
    {
      name: "Rohan Ray",
      role: "Small Business Owner",
      quote:
        "Expense tracker app has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
      image: "/6.jpg",
    },
    {
      name: "Ametya Singh",
      role: "Student",
      quote:
        "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
      image: "/2.jpeg",
    },
    {
      name: "Kaushik Chandra",
      role: "Traveler",
      quote:
      "I recommend this app to all my clients. The monthly email reports and easy-to-read insights make it perfect for staying on track.",
      image: "/3.jpeg",
    },
  ]);

  return (
    <div className="mt-17">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#0f706c] mb-2">
                  {stat.value}
                </div>
                <div className="text-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0f706c] mb-12">
          Everything You Need to Manage Your Finances — Track, Save, and Grow with Confidence.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6 hover:text-[#e74c3c] cursor-pointer hover:bg-[#d3edf1] transition-all duration-300 ease-in-out transform hover:scale-105">
              <CardContent className="space-y-4 pt-4 ">
                <div className="text-4xl flex justify-center">{feature.icon}</div> {/* Centered the icon */}
                <h3 className="text-xl font-semibold text-center">{feature.title}</h3> {/* Centered the title */}
                <p className="text-black group-hover:text-black transition-colors duration-300 text-center">{feature.description}</p> {/* Text color update */}
              </CardContent>
            </Card>
            
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0f706c] text-center mb-8">How It Works: From Spending to Smart Tracking</h2>
          <p className="text-lg text-black max-w-2xl mx-auto mb-10">
        A simple, step-by-step journey to smarter money management — from signup to success.
      </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-black">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0f706c] text-center mb-8">
          How Expense Tracker Is Transforming the Way People Manage Money and Build Wealth
          </h2>
          <p className="text-black max-w-2xl py-5 text-lg text-center mx-auto mb-10 italic tracking-wide leading-relaxed animate-fade-in">
            Here’s what some of them have to say:
           </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-[#d3edf1] hover:text-black">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-black">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-black">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0f706c] mb-4">
          Ready to Take Control of Your Finances — and Your Future?
          </h2>
        
          <p className=" text-black mb-16 max-w-2xl mx-auto">
      Start your journey toward smarter budgeting, effortless saving, and investing — all in one powerful platform. 
      Join thousands already thriving with <span className="font-semibold text-black">Income Expense Tracker</span>.
    </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="text-black bg-[#5cbdb9] py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#4ca39d] transition-colors duration-300"            >
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

   <footer className=" text-black py-16">
     <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Logo & Contact */}
    <div>
      <h2 className="text-2xl text-[#0f706c] font-bold mb-4">Income Expense Tracker</h2>
      <p className="text-sm  text-black mb-2">New Delhi, INDIA</p>
      <p className="text-sm  text-black mb-4">+91 1234567890</p>
      <div className="flex space-x-4 mt-4">
        {/* Facebook */}
        <a href="#" aria-label="Facebook">
          <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.006 3.66 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.34 21.128 22 17.006 22 12z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" aria-label="Instagram">
          <svg className="w-5 h-5" fill="#E1306C" viewBox="0 0 24 24">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-2.5a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </a>
        {/* Twitter */}
        <a href="#" aria-label="Twitter">
          <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.89-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0015.5 4a4.29 4.29 0 00-4.28 4.29c0 .34.04.67.11.98A12.16 12.16 0 013 5.1a4.29 4.29 0 001.33 5.72 4.27 4.27 0 01-1.94-.54v.06a4.29 4.29 0 003.44 4.2c-.47.13-.96.2-1.47.2a4.16 4.16 0 01-.81-.08 4.3 4.3 0 004 2.98A8.6 8.6 0 012 19.53a12.14 12.14 0 006.57 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.65 8.65 0 0024 5.1a8.44 8.44 0 01-2.54.7z"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Headline Section */}
    <div className="md:col-span-2">
    <h3 className="text-3xl text-[#0f706c] font-bold mb-4 leading-snug">
  🚀 Take Control of Your Finances —<br />
  Say Goodbye to Stress & Hello to Freedom 💼
    </h3>
    </div>

   {/* Tips + Features */}
<div className="grid grid-cols-2 gap-6 text-sm">
  <div>
    <h4 className="font-semibold text-[#0f706c] mb-2">Helpful Tips</h4>
    <ul className="space-y-2 text-black">
      <li>Track your expenses daily</li>
      <li>Set monthly spending limits</li>
      <li>Review weekly reports</li>
    </ul>
  </div>
  <div>
    <h4 className="font-semibold text-[#0f706c] mb-2">App Features</h4>
    <ul className="space-y-2 text-black">
      <li>Smart budget planner</li>
      <li>Automatic reminders</li>
      <li>Visual spending insights</li>
    </ul>
  </div>
</div>

  </div>

  
</footer>

    </div>
  );
}

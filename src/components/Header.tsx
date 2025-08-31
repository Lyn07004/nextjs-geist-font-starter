"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">♥</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">AB ACTUALIS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">
              service
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              about
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              contact
            </a>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="bg-red-600 text-white border-red-600 hover:bg-red-700">
              ENG
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

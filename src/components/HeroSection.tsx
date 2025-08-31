"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                AB ACTUALIS
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Your Growth with Smart, Specialized Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our services are tailored to meet modern demands in finance, actuarial science, accounting, and beyond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                learn more
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                contact us
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://placehold.co/600x400?text=Professional+workspace+with+laptop+charts+and+office+supplies" 
              alt="Professional workspace with laptop, charts and office supplies"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

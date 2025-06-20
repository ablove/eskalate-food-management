"use client";

import type React from "react";

import { useState } from "react";
import { Search, Bike, MapPin } from "lucide-react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"delivery" | "pickup">("delivery");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Are you starving?
        </h1>
        <p className="text-xl text-white/90 mb-12">
          Within a few clicks, find meals that are accessible near you
        </p>

        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
          {/* Delivery/Pickup Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("delivery")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                activeTab === "delivery"
                  ? "bg-white text-orange-500 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Bike className="w-5 h-5" />
              Delivery
            </button>
            <button
              onClick={() => setActiveTab("pickup")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                activeTab === "pickup"
                  ? "bg-white text-orange-500 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <MapPin className="w-5 h-5" />
              Pickup
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What do you like to eat today?"
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium whitespace-nowrap"
            >
              Find Meal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onAddMeal: () => void;
}

export default function Header({ onAddMeal }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Menu className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">FoodWagen</h1>
          </div>

          <button
            onClick={onAddMeal}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Add Meal
          </button>
        </div>
      </div>
    </header>
  );
}

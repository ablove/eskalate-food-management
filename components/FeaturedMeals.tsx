"use client";

import type { Food } from "@/types/food";
import MealCard from "./MealCard";
import { Loader2 } from "lucide-react";

interface FeaturedMealsProps {
  meals: Food[];
  loading: boolean;
  onEdit: (food: Food) => void;
  onDelete: (food: Food) => void;
}

export default function FeaturedMeals({
  meals,
  loading,
  onEdit,
  onDelete,
}: FeaturedMealsProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Meals
        </h2>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            <span className="ml-2 text-gray-600">Loading meals...</span>
          </div>
        ) : meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <MealCard
                key={meal.id}
                food={meal}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state-message">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No meals found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or add some meals to get started!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

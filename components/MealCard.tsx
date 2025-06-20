"use client";

import type { Food } from "@/types/food";
import Image from "next/image";
import { Star, Edit, Trash2, Clock } from "lucide-react";

interface MealCardProps {
  food: Food;
  onEdit: (food: Food) => void;
  onDelete: (food: Food) => void;
  showActions?: boolean;
}

export default function MealCard({
  food,
  onEdit,
  onDelete,
  showActions = true,
}: MealCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={food.food_image || "/placeholder.svg?height=200&width=300"}
          alt={food.food_name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          crossOrigin="anonymous"
        />

        {/* Price Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white font-bold text-sm px-3 py-1 rounded-full">
            ${food.price || "0.00"}
          </span>
        </div>

        {/* Action Buttons */}
        {showActions && (
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onEdit(food)}
              className="p-2 bg-white/90 text-blue-600 rounded-full hover:bg-white shadow-sm transition-colors"
              aria-label="Edit Food"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onDelete(food)}
              className="p-2 bg-white/90 text-red-600 rounded-full hover:bg-white shadow-sm transition-colors"
              aria-label="Delete Food"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {food.food_name}
            </h3>
            <p className="text-gray-600 text-sm">{food.restaurant_name}</p>
          </div>

          <div className="flex items-center gap-1 ml-2">
            <Image
              src={
                food.restaurant_logo || "/placeholder.svg?height=24&width=24"
              }
              alt={food.restaurant_name}
              width={24}
              height={24}
              className="rounded-full"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500 font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>{food.food_rating}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                food.restaurant_status === "Open Now"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {food.restaurant_status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { Food, FoodFormData, FormErrors } from "@/types/food";
import { validateFoodForm } from "@/lib/validation";

interface MealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FoodFormData) => Promise<void>;
  food?: Food | null;
  title: string;
}

export default function MealModal({
  isOpen,
  onClose,
  onSubmit,
  food,
  title,
}: MealModalProps) {
  const [formData, setFormData] = useState<FoodFormData>({
    food_name: "",
    food_rating: 0,
    food_image: "",
    restaurant_name: "",
    restaurant_logo: "",
    restaurant_status: "Open Now",
    price: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (food) {
      setFormData({
        food_name: food.food_name,
        food_rating: food.food_rating,
        food_image: food.food_image,
        restaurant_name: food.restaurant_name,
        restaurant_logo: food.restaurant_logo,
        restaurant_status: food.restaurant_status,
        price: food.price || "",
      });
    } else {
      setFormData({
        food_name: "",
        food_rating: 0,
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: "Open Now",
        price: "",
      });
    }
    setErrors({});
  }, [food, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFoodForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "food_rating" ? Number(value) : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Food Name */}
          <div>
            <label
              htmlFor="food_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Food Name
            </label>
            <input
              type="text"
              id="food_name"
              name="food_name"
              value={formData.food_name}
              onChange={handleChange}
              placeholder="Enter food name"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900 placeholder-gray-500"
            />
            {errors.food_name && (
              <p id="food-name-error" className="text-red-500 text-sm mt-1">
                {errors.food_name}
              </p>
            )}
          </div>

          {/* Food Image URL */}
          <div>
            <label
              htmlFor="food_image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Food Image URL
            </label>
            <input
              type="url"
              id="food_image"
              name="food_image"
              value={formData.food_image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900 placeholder-gray-500"
            />
            {errors.food_image && (
              <p id="food-image-error" className="text-red-500 text-sm mt-1">
                {errors.food_image}
              </p>
            )}
          </div>

          {/* Food Rating */}
          <div>
            <label
              htmlFor="food_rating"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Food Rating
            </label>
            <input
              type="number"
              id="food_rating"
              name="food_rating"
              value={formData.food_rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              placeholder="Enter rating (0-5)"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900 placeholder-gray-500"
            />
            {errors.food_rating && (
              <p id="food-rating-error" className="text-red-500 text-sm mt-1">
                {errors.food_rating}
              </p>
            )}
          </div>

          {/* Restaurant Name */}
          <div>
            <label
              htmlFor="restaurant_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurant_name"
              name="restaurant_name"
              value={formData.restaurant_name}
              onChange={handleChange}
              placeholder="Enter restaurant name"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900 placeholder-gray-500"
            />
            {errors.restaurant_name && (
              <p
                id="restaurant-name-error"
                className="text-red-500 text-sm mt-1"
              >
                {errors.restaurant_name}
              </p>
            )}
          </div>

          {/* Restaurant Logo URL */}
          <div>
            <label
              htmlFor="restaurant_logo"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant Logo URL
            </label>
            <input
              type="url"
              id="restaurant_logo"
              name="restaurant_logo"
              value={formData.restaurant_logo}
              onChange={handleChange}
              placeholder="Enter logo URL"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900 placeholder-gray-500"
            />
            {errors.restaurant_logo && (
              <p
                id="restaurant-logo-error"
                className="text-red-500 text-sm mt-1"
              >
                {errors.restaurant_logo}
              </p>
            )}
          </div>

          {/* Restaurant Status */}
          <div>
            <label
              htmlFor="restaurant_status"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Restaurant Status
            </label>
            <select
              id="restaurant_status"
              name="restaurant_status"
              value={formData.restaurant_status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900"
            >
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
            {errors.restaurant_status && (
              <p
                id="restaurant-status-error"
                className="text-red-500 text-sm mt-1"
              >
                {errors.restaurant_status}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price (e.g., 12.99)"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 transition-colors font-medium"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

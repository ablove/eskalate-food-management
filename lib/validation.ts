import type { FoodFormData, FormErrors } from "@/types/food";

export function validateFoodForm(data: FoodFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.food_name.trim()) {
    errors.food_name = "Food Name is required";
  }

  if (!data.food_rating || isNaN(data.food_rating)) {
    errors.food_rating = "Food Rating must be a number";
  } else if (data.food_rating < 0 || data.food_rating > 5) {
    errors.food_rating = "Food Rating must be between 0 and 5";
  }

  if (!data.food_image.trim()) {
    errors.food_image = "Food Image URL is required";
  }

  if (!data.restaurant_name.trim()) {
    errors.restaurant_name = "Restaurant Name is required";
  }

  if (!data.restaurant_logo.trim()) {
    errors.restaurant_logo = "Restaurant Logo URL is required";
  }

  if (
    !data.restaurant_status ||
    !["Open Now", "Closed"].includes(data.restaurant_status)
  ) {
    errors.restaurant_status =
      "Restaurant Status must be 'Open Now' or 'Closed'";
  }

  if (!data.price || !data.price.trim()) {
    errors.price = "Price is required";
  }

  return errors;
}

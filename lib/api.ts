import type { Food, FoodFormData } from "@/types/food";

const API_BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io";

export class FoodAPI {
  /**
   * Get all food items from the API
   */
  static async getAllFoods(): Promise<Food[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/Food`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch foods: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching foods:", error);
      throw new Error("Failed to load meals. Please try again.");
    }
  }

  /**
   * Search for food items by name
   */
  static async searchFoods(searchParam: string): Promise<Food[]> {
    try {
      const encodedSearch = encodeURIComponent(searchParam.trim());
      const response = await fetch(
        `${API_BASE_URL}/Food?name=${encodedSearch}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to search foods: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error searching foods:", error);
      throw new Error("Failed to search meals. Please try again.");
    }
  }

  /**
   * Create a new food item
   */
  static async createFood(foodData: FoodFormData): Promise<Food> {
    try {
      const response = await fetch(`${API_BASE_URL}/Food`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_name: foodData.food_name,
          food_rating: Number(foodData.food_rating),
          food_image: foodData.food_image,
          restaurant_name: foodData.restaurant_name,
          restaurant_logo: foodData.restaurant_logo,
          restaurant_status: foodData.restaurant_status,
          price: foodData.price,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to create food: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating food:", error);
      throw new Error("Failed to add meal. Please try again.");
    }
  }

  /**
   * Update an existing food item
   */
  static async updateFood(id: string, foodData: FoodFormData): Promise<Food> {
    try {
      const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_name: foodData.food_name,
          food_rating: Number(foodData.food_rating),
          food_image: foodData.food_image,
          restaurant_name: foodData.restaurant_name,
          restaurant_logo: foodData.restaurant_logo,
          restaurant_status: foodData.restaurant_status,
          price: foodData.price,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update food: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating food:", error);
      throw new Error("Failed to update meal. Please try again.");
    }
  }

  /**
   * Delete a food item
   */
  static async deleteFood(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to delete food: ${response.status} ${response.statusText}`
        );
      }

      // MockAPI returns the deleted object, but we don't need it
      await response.json();
    } catch (error) {
      console.error("Error deleting food:", error);
      throw new Error("Failed to delete meal. Please try again.");
    }
  }

  /**
   * Get a single food item by ID (optional utility method)
   */
  static async getFoodById(id: string): Promise<Food> {
    try {
      const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch food: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching food by ID:", error);
      throw new Error("Failed to load meal details. Please try again.");
    }
  }
}

/**
 * Alternative export for individual functions if preferred
 */
export const foodAPI = {
  getAllFoods: FoodAPI.getAllFoods,
  searchFoods: FoodAPI.searchFoods,
  createFood: FoodAPI.createFood,
  updateFood: FoodAPI.updateFood,
  deleteFood: FoodAPI.deleteFood,
  getFoodById: FoodAPI.getFoodById,
};

/**
 * Utility function to handle API errors consistently
 */
export function handleAPIError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred. Please try again.";
}

/**
 * Type guard to check if response is valid Food array
 */
export function isFoodArray(data: unknown): data is Food[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "id" in item &&
        "food_name" in item
    )
  );
}

/**
 * Type guard to check if response is valid Food object
 */
export function isFood(data: unknown): data is Food {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "food_name" in data &&
    "food_rating" in data &&
    "restaurant_name" in data
  );
}

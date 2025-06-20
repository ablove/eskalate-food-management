export interface Food {
  id: string;
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
  price: string;
  createdAt?: string;
}

export interface FoodFormData {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
  price: string;
}

export interface FormErrors {
  food_name?: string;
  food_rating?: string;
  food_image?: string;
  restaurant_name?: string;
  restaurant_logo?: string;
  restaurant_status?: string;
  price?: string;
}

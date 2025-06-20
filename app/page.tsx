"use client";

import { useState, useEffect } from "react";
import type { Food, FoodFormData } from "@/types/food";
import { FoodAPI } from "@/lib/api";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedMeals from "@/components/FeaturedMeals";
import MealModal from "@/components/MealModal";
import DeleteModal from "@/components/DeleteModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [meals, setMeals] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Food | null>(null);

  // Load meals on component mount
  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = async () => {
    try {
      setLoading(true);
      const data = await FoodAPI.getAllFoods();
      setMeals(data);
    } catch (error) {
      console.error("Error loading meals:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setSearchQuery(query);

      if (query.trim()) {
        const data = await FoodAPI.searchFoods(query);
        setMeals(data);
      } else {
        await loadMeals();
      }
    } catch (error) {
      console.error("Error searching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMeal = async (formData: FoodFormData) => {
    try {
      await FoodAPI.createFood(formData);
      await loadMeals();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding meal:", error);
      throw error;
    }
  };

  const handleEditMeal = async (formData: FoodFormData) => {
    if (!selectedMeal) return;

    try {
      await FoodAPI.updateFood(selectedMeal.id, formData);
      await loadMeals();
      setIsEditModalOpen(false);
      setSelectedMeal(null);
    } catch (error) {
      console.error("Error updating meal:", error);
      throw error;
    }
  };

  const handleDeleteMeal = async () => {
    if (!selectedMeal) return;

    try {
      await FoodAPI.deleteFood(selectedMeal.id);
      await loadMeals();
      setIsDeleteModalOpen(false);
      setSelectedMeal(null);
    } catch (error) {
      console.error("Error deleting meal:", error);
    }
  };

  const openEditModal = (meal: Food) => {
    setSelectedMeal(meal);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (meal: Food) => {
    setSelectedMeal(meal);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddMeal={() => setIsAddModalOpen(true)} />

      <main>
        <HeroSection onSearch={handleSearch} />
        <FeaturedMeals
          meals={meals}
          loading={loading}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />
      </main>

      <Footer />

      {/* Modals */}
      <MealModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddMeal}
        title="Add Food"
      />

      <MealModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedMeal(null);
        }}
        onSubmit={handleEditMeal}
        food={selectedMeal}
        title="Edit Food"
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedMeal(null);
        }}
        onConfirm={handleDeleteMeal}
        food={selectedMeal}
      />
    </div>
  );
}

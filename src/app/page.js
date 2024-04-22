import React from "react";
import HeroSection from "./components/Home/HeroSection";
import RecipeSidebar from "./components/Home/RecipeSidebar";
import RecipeCard from "./components/Home/RecipeCard";
import { db } from "@/db";

const HomePage = async () => {
  const { recipes, groupedRecipes } = await db.AllRecipes();

  return (
    <>
      <HeroSection></HeroSection>
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <RecipeSidebar groupedRecipes={groupedRecipes}></RecipeSidebar>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

import { RecipeModel } from "@/model/recipes";

import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

const AllRecipes = async () => {
  try {
    const recipes = await RecipeModel.find().lean();
    const groupedRecipes = await RecipeModel.aggregate([
      { $group: { _id: "$category" } },
    ]);
    return {
      recipes: replaceMongoIdInArray(recipes),
      groupedRecipes,
    };
  } catch (error) {
    throw error;
  }
};
async function findRecipeById(recipeId) {
  try {
    const recipe = await RecipeModel.findById(recipeId).lean();
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    return replaceMongoIdInObject(recipe);
  } catch (error) {
    throw error;
  }
}
async function findRecipesByCategory(category) {
  try {
    const recipes = await RecipeModel.find({ category }).lean();
    return replaceMongoIdInArray(recipes);
  } catch (error) {
    throw error;
  }
}

export const db = {
  AllRecipes,
  findRecipeById,
  findRecipesByCategory,
};

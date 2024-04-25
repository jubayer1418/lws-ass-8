"use server";

import { UserModel } from "@/model/users";
import { dbConnect } from "@/server/db";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  try {
    const userData = Object.fromEntries(formData);
    await dbConnect();
    const user = await UserModel.findOne({ email: userData.email });
    if (user) {
      throw new Error("Your email is already registered !");
    }

    await UserModel.create(userData);
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
    };
  }
};
export const loginUser = async (formData) => {
  try {
    const { email, password } = Object.fromEntries(formData);

    await dbConnect();
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    return await UserModel.findOne({ email }).lean();
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
async function addFavorite(userId, recipeId) {
  try {
    await dbConnect();
    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }
    if (!user.favourites.includes(recipeId)) {
      user.favourites.push(recipeId);
      await user.save();
    }
    return await UserModel.findById(userId).lean();
  } catch (error) {
    return error;
  }
}
export default addFavorite;

export async function removeFavorite(userId, recipeId) {
  try {
    await dbConnect();
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.favourites = user.favourites.filter(
      (id) => id.toString() !== recipeId
    );

    await user.save();
    return await UserModel.findById(userId).lean();
  } catch (error) {
    return error;
  }
}

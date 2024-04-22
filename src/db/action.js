"use server";


import { UserModel } from "@/model/users";
import { dbConnect } from "@/server/db";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  try {
    const user = Object.fromEntries(formData);
    await dbConnect();
    await UserModel.create(user);
    redirect("/login");
  } catch (error) {
    throw error;
  }
};
export const  loginUser=async(formData)=> {
    try {
        const {email,password} = Object.fromEntries(formData);

        await dbConnect();
      const user = await UserModel.findOne({ email });
      
      if (!user) {
        throw new Error("User not found");
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new Error("Incorrect password");
      }
      
    return await UserModel.findOne({ email }).lean()
      
    } catch (error) {
      throw error;
    }
  }
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
      return  await UserModel.findById(userId).lean();
    } catch (error) {
      throw error;
    }
  }
  export default addFavorite

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
      return  await UserModel.findById(userId).lean();
    } catch (error) {
      throw error;
    }
  }

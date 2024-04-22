import { db } from "@/db";
import Link from "next/link";

const RecipeSidebar = async ({groupedRecipes}) => {
 

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {groupedRecipes.map((category) => (
          <li key={category._id}>
            <Link href={`/category/${category._id}`}>{category._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSidebar;

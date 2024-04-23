import RecipeDetails from "@/app/components/RecipeDetails/RecipeDetails";
import RecipeSteps from "@/app/components/RecipeDetails/RecipeSteps";
import { db } from "@/db";
import { dbConnect } from "@/server/db";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;
  await dbConnect();
  const recipe = await db.findRecipeById(id);

  return {
    title: `${recipe.name} Recipe`,
    description: recipe.description,
  };
}

export const generateStaticParams = async () => {
  await dbConnect();
  const {recipes} = await db.AllRecipes();

  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
};
const page = async ({ params: { id } }) => {
  await dbConnect();
  const recipe = await db.findRecipeById(id);

  return (
    <main>
      <RecipeDetails id={id} recipe={recipe}></RecipeDetails>
      <RecipeSteps steps={recipe.steps}></RecipeSteps>
    </main>
  );
};

export default page;

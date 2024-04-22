import RecipeCard from "@/app/components/Home/RecipeCard";
import { db } from "@/db";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  return {
    title: `${decodeURIComponent(id)} Recipes`,
    description:
      "A recipe is simply defined as a set of instructions with a list of ingredients used to prepare a particular food, dish or drink. People use recipes to replicate foods they enjoy that they otherwise do not know how to make. Chefs use recipes to make sure a dish tastes the same each time it is ordered.",
  };
}
async function page({ params: { id } }) {
  const categories = await db.findRecipesByCategory(decodeURIComponent(id));

  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">Appetizers & Snacks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {categories?.map((category) => (
            <RecipeCard recipe={category} key={category.id}></RecipeCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;

import { useContext } from "react";
import { MealContext } from "../Mealcontext";
import Loading from "./Loading";

export default function Recipe({Searchmeals}) {
  const meal = Searchmeals.length > 0 ? Searchmeals : useContext(MealContext);
  // console.log(meal);
  if (!meal || meal.length === 0) return (<Loading/>);  
  return (
 

<div className="bg-white">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
  <h2 className="sr-only">Recipes</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {meal.map((item) => (
      <center>
        <div >
      <a key={item.strMeal} href={`/recipe/${item.idMeal}`} className="group block ">
        <img
          alt={item.strMeal}
          src={item.strMealThumb}
          className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
        />
        <h3 className="mt-4 text-xl text-gray-800">{item.strMeal}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{item.strArea}</p>
        <p className="text-gray-700 mb-6 hidden">{item.strInstructions}</p> 
        {/* i dont like this para here in desktop view so i changed */}

      </a>
      </div>
      </center>
    ))}
  </div>
</div>
</div>

  )
}

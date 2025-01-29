import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

function RecipeDetails({ addFavorite, removeFavorite }) {
  const { id } = useParams();      //getting id from url params 
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals[0]));

  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  console.log(recipe.strYoutube);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];    // in api ingrident and measuremetare in different key
    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`); // so i merge them and add in ingredients variable
    }
  }

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite(recipe);
    }
    setIsFavorite(!isFavorite); // Toggle the favorite state
  };

  return (
    <>
    <Header/>
    <div className="bg-white px-6 py-10 ">
      <div className="max-w-4xl mx-auto mt-1">
        <img
          alt={recipe.strMeal}
          src={recipe.strMealThumb}
          className="rounded-lg w-full mb-6"
        />
        <div className='flex justify-between'> 
          <div>
        <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
        <p className="text-lg text-gray-700 mb-6">{recipe.strArea} - {recipe.strCategory}</p>
        </div>
         <div className='cursor-pointer' onClick={handleFavoriteClick}>{/* Add to faviroute btn */}
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill={isFavorite ? "red" : "currentColor"} class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
          <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
        </svg>
        </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-6">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
        <p className="text-gray-700 mb-6">{recipe.strInstructions}</p>
        {recipe.strSource && (
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Source
          </a>
        )}
        {recipe.strYoutube && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Watch on YouTube:</h2>
            <iframe
              width="100%"
              height="315"
              src={recipe.strYoutube.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <button className='w-20 mt-16 mb-16 p-2 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none cursor-pointer' onClick={() => navigate('/')}>Back</button>

      </div>
    </div>
    </>
  );
}

export default RecipeDetails;

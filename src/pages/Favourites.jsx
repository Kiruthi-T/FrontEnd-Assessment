import React from 'react'
import { Link } from 'react-router-dom';

const Favourites = ({favorites}) => {
  // console.log(favorites);
  
  return (
    <>
    <h1 className='text-3xl font-bold text-center'>Favourites</h1>
    {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((item, index) => (
            <div >
        <Link to={`/recipe/${item.idMeal}`} className="group block">
        <img
              alt={item.strMeal}
              src={item.strMealThumb}
              className="aspect-square rounded-lg bg-gray-200  group-hover:opacity-75"
              height="200px"
              width="200px"
            />
            <h3 className="mt-4 text-xl text-gray-800">{item.strMeal}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{item.strArea}</p>
           
    
          </Link>
          </div>
        ))}
      </div>
      )}
    </>
  )
}

export default Favourites

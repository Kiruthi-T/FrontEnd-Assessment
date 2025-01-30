import React, { Suspense, useState } from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import './App.css'
import { MealProvider } from "./Mealcontext";
import RecipeDetails from "./pages/DetailedRecipe";
import Footer from "./components/Footer";
import Favourites from "./pages/Favourites";
import Loading from "./components/Loading";


const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(recipe => recipe.idMeal !== id));
  };

  return (
    <div>
       
    <MealProvider>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<RecipeDetails addFavorite={addFavorite} removeFavorite={removeFavorite} />} />
        <Route path="/fav" element={<Favourites favorites={favorites}/>}/>
      </Routes>
      <Footer/>
      </Suspense>
      </MealProvider>
    </div>
  );
};

export default App;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const fetchMeal = async () => {
      const apiKey = "1"; // Free API key
      const url = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`; //i cant buy the api you give so i use this 
      const randomMeals = [];
      try {
        for (let i = 0; i < 10; i++) {      //this api provides only one random...so i looped
          const response = await axios.get(url);
          const data = response.data;
          randomMeals.push(data.meals[0]);
        }
        setMeal(randomMeals); // Update state with fetched meals
        console.log(meal);
        
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };
    fetchMeal();
  }, []);

  return (
    <MealContext.Provider value={meal}>
      {children}
    </MealContext.Provider>
  );
};



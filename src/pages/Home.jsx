import React, { lazy, Suspense, useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import Loading from '../components/Loading';
import Recipe from '../components/Recipe';

// const Recipe=lazy(()=>import ('../components/recipe'))


function Home() {
  const [SearchTerm, SetSearchTerm] = useState('');
  const [Searchmeals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      if (!SearchTerm) return;
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchTerm}`
        );
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals([]);
      }
    };

    fetchMeals();
  }, [SearchTerm]);
  return (
    <>
      <Header SetSearchTerm={SetSearchTerm} />
      {/* <Suspense fallback={<Loading />}>
          <Recipe Searchmeals={Searchmeals} SearchTerm={SearchTerm} />
      </Suspense> */}
    
    </>
  )
}

export default Home

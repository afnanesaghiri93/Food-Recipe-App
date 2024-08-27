import { useState, useEffect } from "react"
import { Route, Routes} from "react-router-dom";
import recipeImage from '../assets/images/meal2.jpg'

// import RecipesForm from "../components/RecipesForm";
function RecipesPage() {
  
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]); // State to store fetched recip
  const [error, setError] = useState(null);  // To handle any errors
  
    // Function to fetch data from TheMealDB API
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        
        if (data.meals) {
          setRecipes(data.meals);  // Set the fetched meals to state
        } else {
          setRecipes([]);  // If no meals found, set recipes to empty array
        }
      } catch (error) {
        setError('Failed to fetch recipes');
      }
    };
  
    // Handle input change
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    // Fetch recipes when the query changes
    
    useEffect(() => {
      if (query.trim() !== '') {
        fetchRecipes();
      } else {
        setRecipes([]);
      }
    }, [query]);
  
    return (
      <>
      <div style={{ fontSize: '48px', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  }}>
        <h1 style={{backgroundImage: `url(${recipeImage})`,  backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px',
          textAlign: 'center',
          width: '100%', 
          marginBottom: '50px'}}>Search for Recipes</h1>
        <p>Type in the search bar below to find your favorite recipes!</p>
        
        <div className="search-bar" style={{ position: 'relative', width: '50%', maxWidth: '600px' }}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by name"
            style={{
              padding: '10px 40px 10px 20px', 
              width: '100%',
              borderRadius: '20px',
            }}
          />
        </div>
        </div>
        
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
  
        <div className="recipes-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.idMeal} className="recipe-card" style={{ width: '200px', textAlign: 'center' }}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
                <h3 style={{ margin: '10px 0' }}>{recipe.strMeal}</h3>
                <p style={{ color: '#777' }}>{recipe.strCategory}</p>
              </div>
            ))
          ) : (
            <p style={{ fontSize: '20px', marginBottom: '20px', }}>No recipes found</p>
          )}
        </div>
    
      </>
    );
  }

export default RecipesPage
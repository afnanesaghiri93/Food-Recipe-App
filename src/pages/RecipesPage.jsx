import { useState, useEffect } from "react"
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
      <div style={{ backgroundColor: 'rgba(198, 4, 162, 0.627)', padding: '20px', borderRadius: '10px' }}>
        <h1>Search for Recipes</h1>
        <p>Type in the search bar below to find your favorite recipes!</p>
        
        <div className="search-bar" style={{ margin: '20px 0' }}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by name"
            style={{ padding: '10px', width: '50%' }}
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
            <p>No recipes found</p>
          )}
        </div>
    
      </>
    );
  }

export default RecipesPage
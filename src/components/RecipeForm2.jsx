import { useState, useEffect }  from 'react'
import axios from 'axios';
import RecipesForm from './RecipesForm';




function RecipeForm2() {
    onst [recipes, setRecipes] = useState([]);
    const [updateMade, setUpdateMade] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(null);
  
    const LOCAL_URL = 'http://localhost:5051';
  
    // Fetch recipes whenever updateMade changes
    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get(`${LOCAL_URL}/api/recipes`);
          setRecipes(response.data);
        } catch (err) {
          console.error('Error fetching recipes:', err);
        }
      };
  
      fetchRecipes();
    }, [updateMade]);
  
    return (
      <div>
        <RecipesForm
          updateMade={updateMade}
          setUpdateMade={setUpdateMade}
          recipeToEdit={recipeToEdit}
        />
        
        <h2>Recipe List</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              {recipe.name} - {recipe.text}
              <button onClick={() => setRecipeToEdit(recipe)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default RecipeForm2
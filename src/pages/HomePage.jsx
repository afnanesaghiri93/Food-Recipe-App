import {useState} from 'react'
import RecipesForm from '../components/RecipesForm'
import RecipeList from '../components/RecipeList'
import recipeImsge from '../assets/images/meal3.jpg'
// import Nav from '../components/Nav';



function HomePage() {

const [updateMade, setUpdateMade] = useState(false);
  return (
    <div>
    <h1  style={{ 
          backgroundImage: `url(${recipeImsge})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          fontSize: '40px',
          padding: '200px 20px',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(114, 63, 95, 0.7)', 
          borderRadius: '10px',
        }}>Welcome to Yummy Recipes</h1>
    <p> See existing recipe, add new recipe, edit an existing recipe, delete an existing recipe </p>
    <h2>Add an new recipe</h2>
    <RecipesForm  updateMade ={updateMade} setUpdateMade={setUpdateMade}/>
    <h2>Add Functionality- view all</h2>
    <RecipeList updateMade ={updateMade} setUpdateMade={setUpdateMade}/>
    <h3>Edit </h3>
    <h3>Delete </h3>
    </div>
  )
}

export default HomePage
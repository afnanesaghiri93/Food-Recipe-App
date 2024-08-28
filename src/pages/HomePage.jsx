import {useState} from 'react'
import RecipesForm from '../components/RecipesForm'
import RecipeList from '../components/RecipeList'
import recipeImg from '../assets/images/meal3.jpg'
// import Nav from '../components/Nav';



function HomePage() {

const [updateMade, setUpdateMade] = useState(false);
  return (
    <div>
    <h1  style={{ 
          backgroundImage: `url(${recipeImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          fontSize: '40px',
          padding: '200px 20px',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(114, 63, 95, 0.7)', 
          
        }}>Welcome to Yummy Recipes</h1>
    <p style={{ fontSize: '20px', marginBottom: '20px', textAlign:'center'}}> See existing recipe, add new recipe, edit an existing recipe, delete an existing recipe </p>
    <h2 style={{ fontSize: '20px', textAlign:'center', }}>Add an new recipe</h2>
    <RecipesForm  updateMade ={updateMade} setUpdateMade={setUpdateMade}/>
    
    <RecipeList updateMade ={updateMade} setUpdateMade={setUpdateMade}/>
    
    </div>
  )
}

export default HomePage
import {useState} from 'react'
import RecipesForm from '../components/RecipesForm'
import RecipeList from '../components/RecipeList'




function HomePage() {

const [updateMade, setUpdateMade] = useState(false);
  return (
    <>
    <h1>Home </h1>
    <p> See existing recipe, add new recipe, edit an existing recipe, delete an existing recipe </p>
    <h2>Add an new recipe</h2>
    <RecipesForm  updateMade ={updateMade} setUpdateMade={setUpdateMade}/>
    <h2>Add Functionality- view all</h2>
    <RecipeList updateMade ={updateMade} setUpdateMade={setUpdateMade}/>
    <h3>Edit </h3>
    <h3>Delete </h3>
    </>
  )
}

export default HomePage
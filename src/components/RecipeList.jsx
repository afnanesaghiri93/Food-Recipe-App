import {useState, useEffect} from 'react'
import axios from 'axios';
import Recipe from './Recipe';

 function RecipeList({updateMade, setUpdateMade}) {
    const [Recipe, setRecipe] = useState([]);
    const LOCAL_URL = 'http://localhost:5051';
    useEffect(() => {
        getRecipe();
    } , [updateMade])
    
const getRecipe= async () => {
    console.log('in getRecipe');
    try{

        const response = await axios.get(`${LOCAL_URL}/api/recipes`);
        console.log(response.data);
        setRecipe(response.data);
    } catch (err) {
        console.error(err);
    }
}

const loaded = ()=>{
    console.log(Recipe);

}
return (
   <ul style = {{listStyleType: 'none'}}>
    {Recipe.map ((recipe) => {
        return(<Recipe recipe={recipe}/>)
    }) }
    </ul>
    
)
const loading = () => {
    return (
        <h1>Loading</h1>
      )
}
  return (
    <>
    <div>RecipeList</div>
    <Recipe/>
    </>
  )
}

export default RecipeList
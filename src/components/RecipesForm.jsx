import {useState}from 'react'
import AboutPage from '../pages/AboutPage';
 

 
function RecipesForm() {
const [formData, setFormData] = useState({
    text:'',
    completed: false,
})

//I can type things, and I can add a new recipes. 
const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]:evt.target.value })// I'm going to structure the original form data to make sure that I have everything
}
const handleSubmit = (evt) => {
    evt.preventDefault();//to prevent default ebt dot prevent default, so it stops refreshing every time you click that button.
    console.log(formData);
    addRecipe(formData);
    setFormData({
        text:'',
        completed: false,
    })
}
const handleToggle = (evt) => {
    console.log('in handleToggle')
    console.log(evt.target.name);
    console.log(formData[evt.target.name]);
    setFormData({...formData,[evt.target.name]: !formData[evt.target.name]})//start with destructuring form data to make sure that we keep all of the other fields in addition to the field that we're currently changing
}
const addRecipe = async (formData) =>{
    console.log(`in addRecipe and this is my form : ${formData}`)
    console.log('eventully this will send a post request to my backend')
}
// before we can fully implement
//we need to import axios. Implement this on my serverback end and no out to a candle the response
//It's going to be 
//this is my endpoit: post route to 'api/recipe' with the new to do in the req.body.

  return (
    <div>
        <form onSubmit= {handleSubmit}>
             <input 
             type="text" 
             name='text' 
             required
             onChange={handleChange}
             value={formData.text}
             placeholder='Enter your recipe'/>

             <input 
             type="checkbox" 
             name='completed'
             onChange={handleToggle}
             checked={formData.completed}/>
              <input type="submit" value='add new recipe' />

        </form>
    </div>
  )
}

export default RecipesForm
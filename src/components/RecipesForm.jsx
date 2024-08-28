import {useState}from 'react'
// import AboutPage from '../pages/AboutPage';
import axios from 'axios'

 

 
function RecipesForm({updateMade, setUpdateMade}) {
const [formData, setFormData] = useState({
    name:'',
    text:'',
    completed: false,
    ingredients: '',
    instructions:'',
    image:''
})
const [isEditing, setIsEditing] = useState(false);
const LOCAL_URL = 'http://localhost:5051';


//I can type things, and I can add a new recipes. 
const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]:evt.target.value })// I'm going to structure the original form data to make sure that I have everything
}

const handleToggle = (evt) => {
    console.log('in handleToggle')
    console.log(evt.target.name);
    console.log(formData[evt.target.name]);
    setFormData({...formData,[evt.target.name]: !formData[evt.target.name]})//start with destructuring form data to make sure that we keep all of the other fields in addition to the field that we're currently changing
}
// add new recipe function
const addRecipe = async (formData) =>{
    console.log(`in addRecipe and this is my form : ${formData}`)
    console.log('eventully this will send a post request to my backend')
    try {
const response = await axios.post(`${LOCAL_URL}/api/recipes`,formData)
console.log(response.data);
setUpdateMade(!updateMade);
    } catch (err){
console.error(err);
    }
}


//this is my endpoit: post route to 'api/recipe' with the new recipe in the req.body.
// Handle form submission
const handleSubmit = (evt) => {
    evt.preventDefault();
    addRecipe(formData);
    setFormData({
      name: '',
      text: '',
      completed: false,
      ingredients: '',
      instructions: '',
      image: ''
    });
  };
  
  return (
    <div className="recipes-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">Recipe Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter recipe name"
            className="input"
          />
        </div>
   
        <div className="form-group">
          <label className="label" htmlFor="text">Description</label>
          <textarea
            name="text"
            required
            onChange={handleChange}
            value={formData.text}
            placeholder="Enter your recipe description"
            className="textarea"
          />
        </div>
   
        <div className="form-group">
          <label className="label" htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            required
            onChange={handleChange}
            value={formData.ingredients}
            placeholder="Enter ingredients"
            className="textarea"
          />
        </div>
   
        <div className="form-group">
          <label className="label" htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            required
            onChange={handleChange}
            value={formData.instructions}
            placeholder="Enter instructions"
            className="textarea"
          />
        </div>
   
        <div className="form-group">
          <label className="label" htmlFor="image">Image URL</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={formData.image}
            placeholder="Enter image URL"
            className="input"
          />
        </div>
   
        <div className="checkbox-label">
          <input
            type="checkbox"
            name="completed"
            onChange={handleToggle}
            checked={formData.completed}
            className="checkbox"
          />
          <label>Completed</label>
        </div>
   
        <button type="submit" className="button">Add New Recipe</button>
      </form>
    </div>
   );
   }
   
   export default RecipesForm;
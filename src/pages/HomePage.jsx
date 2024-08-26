import React from 'react'
import RecipesForm from '../components/RecipesForm'
function HomePage() {
  return (
    <>
    <h1>Home </h1>
    <p> See existing recipe, add new recipe, edit an existing recipe, delete an existing recipe </p>
    <h2>Add an new recipe</h2>
    <RecipesForm/>
    </>
  )
}

export default HomePage
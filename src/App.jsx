// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage  from './pages/AboutPage'
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import UserPage from './pages/UserPage'
//You have to say the path which you're going to have in your URL
function App() {
  

  return (
    <>
  <h1>This is my main components</h1>
 <Routes> 
  <Route path= "/" element= {<HomePage/>}/>/
  <Route path= 'About' element={<AboutPage/>}/>
  <Route path= '' element={<RecipesPage/>}/>
  
  </Routes>
  <UserPage/>
  
    </>
  )
}

export default App

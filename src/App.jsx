// import { useState } from 'react
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage  from './pages/AboutPage'
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
// import UserPage from './pages/UserPage'
// import LoginForm from './components/LoginForm'
import Nav from './components/Nav'

//You have to say the path which you're going to have in your URL
function App() {
  

  return (
    <>
   
   <h1 style={{  color: '#8E44AD', fontFamily: 'fantasy', textAlign: 'center' }}>Yummy Recipes</h1>
  <Nav/>
 <Routes> 
  <Route path= "/" element= {<HomePage/>}/>/
  <Route path= '/recipespage' element={<RecipesPage/>}/>
  <Route path= '/aboutpage' element={<AboutPage/>}/>
  <Route path='./loginpage' element={<LoginPage/>}/>
  <Route path='./signuppage' element={<SignUpPage/>}/>

  
  </Routes>
  
  
    </>
  )
}

export default App

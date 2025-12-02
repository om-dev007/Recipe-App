import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import RecipeDetail from './pages/RecipeDetail'
import Recipe from './pages/Recipe'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`min-h-screen ${theme == 'light'? 'bg-black text-white': ' bg-white text-black'}  `}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe' element={<Recipe/>} />
        <Route path='/recipe/:id' element={<RecipeDetail/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
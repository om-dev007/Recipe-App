import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className='flex justify-between items-center p-5 rounded-2xl'>
      <div className='font-semibold text-2xl p-2'>RecipeApp</div>
      <div className="hidden md:flex gap-4 items-center p-2">
        <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-black')} to='/' >Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-black')} to='/recipe' >Recipe</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-black')} to='/about' >About</NavLink>
        <button onClick={toggleTheme} className="bg-orange-600 px-2 py-2 cursor-pointer hover:scale-105 transition-all rounded text-white outline-0 "> Change to {theme} </button>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-5 bg-white dark:bg-black border rounded shadow-lg md:hidden flex flex-col gap-2 p-4">
          <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-white')} to='/' onClick={toggleMenu}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-white')} to='/recipe' onClick={toggleMenu}>Recipe</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-white')} to='/about' onClick={toggleMenu}>About</NavLink>
          <button onClick={() => { toggleTheme(); toggleMenu(); }} className="bg-orange-600 px-2 py-2 cursor-pointer hover:scale-105 transition-all rounded text-white outline-0 "> Change to {theme} </button>
        </div>
      )}
    </div>
  )
}

export default Navbar

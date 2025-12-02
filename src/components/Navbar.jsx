import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  console.log(theme);
  
  return (
    <div className=' flex justify-between p-5 rounded-2xl '>
      <div className='font-semibold text-2xl p-2'>RecipeApp</div>
      <div className="flex gap-4 items-center p-2">
        <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-black')} to='/' >Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-black')} to='/recipe' >Recipe</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-red-700' : (theme === 'light' ? 'text-white' : 'text-black')} to='/about' >About</NavLink>
          <button onClick={toggleTheme} className="bg-orange-600 px-2 py-2 cursor-pointer hover:scale-105 transition-all rounded text-white outline-0 "> Change to {theme} </button>
      </div>
    </div>
  )
}

export default Navbar
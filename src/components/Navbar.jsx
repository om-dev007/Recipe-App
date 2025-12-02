import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=' flex justify-between p-5 rounded-2xl '>
      <div className='font-semibold text-2xl p-2'>RecipeApp</div>
      <div className="flex gap-4 items-center p-2">
        <NavLink className={({ isActive }) =>  ` ${isActive ? "text-red-700" : "text-black"} `} to='/' >Home</NavLink>
        <NavLink className={({ isActive }) => ` ${isActive ? "text-red-700" : "text-black"} `}
 to='/recipe' >Recipe</NavLink>
        <NavLink className={({ isActive }) => ` ${isActive ? "text-red-700" : "text-black"} `}
          to='/about' >About</NavLink>
          <button className="bg-orange-600 px-2 py-2 cursor-pointer hover:scale-105 transition-all rounded text-white "> Change to theme </button>
      </div>
    </div>
  )
}

export default Navbar
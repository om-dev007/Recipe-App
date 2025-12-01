import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=' flex justify-between p-5 rounded-2xl '>
      <div className='font-semibold text-2xl p-2'>RecipeApp</div>
      <div className="flex gap-4 p-2">
        <NavLink className={({ isActive }) =>  ` ${isActive ? "text-red-700" : "text-black"} `} to='/' >Home</NavLink>
        <NavLink className={({ isActive }) => ` ${isActive ? "text-red-700" : "text-black"} `}
 to='/recipe' >Recipe</NavLink>
        <NavLink className={({ isActive }) => ` ${isActive ? "text-red-700" : "text-black"} `}
          to='/about' >About</NavLink>
      </div>
    </div>
  )
}

export default Navbar
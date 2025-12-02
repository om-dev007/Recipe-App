import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({items}) => {

  return (
    <div className='p-5 w-full sm:w-80 md:w-72 lg:w-64'>
      <div className='p-2'>
        <img className='w-full rounded h-48 object-cover' src={items.img} alt={items.title} />
      </div>
      <div className='font-semibold text-center text-lg'> {items.title} </div>
      <div className='text-wrap overflow-hidden text-center text-sm px-2'> {items.decs} </div>
      <div className='flex justify-center mt-2'>
        <Link to={`/recipe/${items.id}`}>
          <button className='bg-orange-600 px-4 py-2 rounded cursor-pointer hover:scale-105 transition-all text-white '>View Recipe</button>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
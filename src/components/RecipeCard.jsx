import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({items}) => {
    
  return (
    <div className='p-5'>
      <div className='p-2'>
        <img className='w-60 rounded h-50' src={items.img} alt="" />
      </div>
      <div className='font-semibold text-center'> {items.title} </div>
      <div className='text-wrap overflow-hidden text-center text-sm'> {items.decs} </div>
      <div className='flex justify-center mt-2'>
        <Link to={`/recipe/${items.id}`}>
          <button className='bg-orange-600 px-2 py-2 rounded cursor-pointer hover:scale-105 transition-all text-white '>View Recipe</button>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
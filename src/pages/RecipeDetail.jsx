import React from 'react'
import { useParams } from 'react-router-dom'
import { recipes } from './Recipe'

const RecipeDetail = () => {
  const {id} = useParams()
  const recipe = recipes.find((item) => item.id == id);
  console.log(recipe);

  return (
    <div className='text-center'>
      <div className='object-contain flex justify-center'>
        <img className='w-100 h-100 rounded-2xl' src={recipe.img} alt="" />
      </div>
      <div className='p-5'>
        <h1 className='font-semibold text-2xl'> {recipe.title} </h1>
      </div>
      <div>
        <h1 className='font-light text-sm'> {recipe.decs} </h1>
      </div>
    </div>
  )
}

export default RecipeDetail
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const getRecipeBtnClicked = () => {
    navigate('/recipe')
  }
  return (
    <div className=''>
        <div className='hero-container flex items-center justify-center'>
            <h1 className='text-white font-semibold text-center z-10 text-3xl md:text-5xl px-4'>Discover Delicious Recipes</h1>
        </div>
        <div className=''>
            <div className='p-5'>
                <h1 className='font-semibold text-xl md:text-2xl text-center'>Search Your Recipe Here...</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-center items-center w-full px-5'>
              <div className='w-full md:w-auto'>
                <input className='border-2 border-gray-600 rounded px-5 py-2 outline-0 w-full md:w-80' type="text" placeholder='Enter your recipe...' />
              </div>
              <div className='items-center content-center'>
                <button onClick={getRecipeBtnClicked} className='bg-orange-600 text-white px-5 py-2 cursor-pointer hover:scale-105 transition-all rounded w-full md:w-auto'>Get Recipe</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
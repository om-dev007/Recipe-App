import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const getRecipeBtnClicked = () => {
    navigate('/recipe')
  }
  return (
    <div className='  '>
        <div className='hero-container h-80 flex items-center justify-center'>
            <h1 className='text-white font-semibold text-center z-10 text-5xl'>Discover Delicious Recipes</h1>
        </div>
        <div className=''>
            <div className='p-5'>
                <h1 className='font-semibold text-2xl text-center '>Search Your Recipe Here...</h1>
            </div>
            <div className='flex gap-5 justify-center w-full'>
              <div>
                <input className='border-2 border-gray-600 rounded  px-5 py-2 outline-0' type="text" placeholder='Enter your recepe...' />
              </div>
              <div className='items-center content-center'>
                <button onClick={getRecipeBtnClicked} className='bg-blue-600 px-5 py-2 cursor-pointer hover:scale-105 transition-all rounded'>Get Recipe</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import RecipeCard from '../components/RecipeCard'

export const recipes = [
    {
      id: 1,
      title: 'Creamy Pasta',
      img: '/pasta.jpg',
      decs: 'Delicious Italian creamy pasta.'
    },
    {
      id: 2,
      title: 'Cheese Pizza ',
      img: '/pizza.jpg',
      decs: 'Classic margherita with basil.'
    },
    {
      id: 3,
      title: 'Cheese Burger',
      img: '/cheeseburger.jpg',
      decs: 'Juicy and crispy veggie burger.'
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      img: '/cholate-cake.jpg',
      decs: 'Soft, sweet and creamy cake.'
    },
    {
      id: 5,
      title: 'Indian Briyani',
      img: '/briyani.jpg',
      decs: 'Most loved, briyani'
    },
    {
      id: 6,
      title: 'Dosa',
      img: '/dosa.jpg',
      decs: 'South Indians favorite'
    },
    {
      id: 7,
      title: 'Green Salad',
      img: '/green-salad-recipes.jpg',
      decs: 'Protien rich salad'
    },
    {
      id: 8,
      title: 'Paneer Butter Masala',
      img: '/paneer-butter-masala-recipe.jpg',
      decs: 'Yummy paneer butter masala sabzi'
    }
  ]

const Recipe = () => {

  const data = [
    {
      id: 1,
      title: 'Creamy Pasta',
      img: '/pasta.jpg',
      decs: 'Delicious Italian creamy pasta.'
    },
    {
      id: 2,
      title: 'Cheese Pizza ',
      img: '/pizza.jpg',
      decs: 'Classic margherita with basil.'
    },
    {
      id: 3,
      title: 'Cheese Burger',
      img: '/cheeseburger.jpg',
      decs: 'Juicy and crispy veggie burger.'
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      img: '/cholate-cake.jpg',
      decs: 'Soft, sweet and creamy cake.'
    },
    {
      id: 5,
      title: 'Indian Briyani',
      img: '/briyani.jpg',
      decs: 'Most loved, briyani'
    },
    {
      id: 6,
      title: 'Dosa',
      img: '/dosa.jpg',
      decs: 'South Indians favorite'
    },
    {
      id: 7,
      title: 'Green Salad',
      img: '/green-salad-recipes.jpg',
      decs: 'Protien rich salad'
    },
    {
      id: 8,
      title: 'Paneer Butter Masala',
      img: '/paneer-butter-masala-recipe.jpg',
      decs: 'Yummy paneer butter masala sabzi'
    }
  ]

  return (
    <div className='flex p-5 justify-center flex-wrap gap-5'>
      {data.map((items) => {
        return (
          <RecipeCard key={items.id} items={items} />
        )
      })}
    </div>
  )
}

export default Recipe   
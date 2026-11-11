
import React, { useState } from 'react'
import dishes from '../data/dishes'
import FoodCard from './FoodCard'

export default function MenuItems() {

  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Desserts",                                              
    "Beverages"
  ]

  const filteredDishes = activeCategory === "All"
    ? dishes
    : dishes.filter((dish) => dish.category === activeCategory)

  return (
    <section className="bg-[#F4EBDD] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-[#A4774F] text-xs tracking-[5px] mb-5">
            EXPLORE OUR MENU
          </p>

          <h2 className="text-4xl md:text-5xl text-[#48251F] mb-5">
            Discover Our <span className="italic">Flavours.</span>
          </h2>

          <p className="text-[#855B39] text-sm leading-7 max-w-xl mx-auto">
            From timeless classics to our chef's special creations,
            find something delightful for every occasion.
          </p>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-xs tracking-wider transition duration-300 border ${
                activeCategory === category
                  ? "bg-[#48251F] text-[#F4EBDD] border-[#48251F]"
                  : "border-[#C5A477] text-[#48251F] hover:bg-[#48251F] hover:text-[#F4EBDD]"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {filteredDishes.map((dish) => (

            <FoodCard
              key={dish.id}
              name={dish.name}
              image={dish.image}
              description={dish.description}
              price={dish.price}
              category={dish.category}
            />

          ))}

        </div>

        {/* Dish Count */}
        <p className="text-center text-[#855B39] text-xs mt-12 tracking-wider">
          SHOWING {filteredDishes.length} DISHES
        </p>

      </div>

    </section>
  )
}

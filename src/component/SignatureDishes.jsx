
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import FoodCard from './FoodCard'
import dishes from '../data/dishes'

export default function SignatureDishes() {

    const signaturedishes= dishes.slice(0,6);
 

  return (
    <section className="bg-[#F4EBDD] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-[#A4774F] text-xs tracking-[5px] mb-5">
            OUR SPECIALITIES
          </p>

          <h2 className="text-4xl md:text-6xl text-[#48251F] mb-6">
            A Symphony of <span className="italic">Flavours.</span>
          </h2>

          <p className="text-[#855B39] max-w-xl mx-auto text-sm leading-7">
            Discover our carefully curated signature dishes,
            crafted with authentic ingredients and timeless
            Indian culinary traditions.
          </p>

        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {signaturedishes.map((dish) => (
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

        {/* View Menu Button */}
        <div className="flex justify-center mt-16">

          <Link
            to="/menu"
            className="flex items-center gap-5 bg-[#48251F] text-[#F4EBDD] px-9 py-5 text-xs tracking-widest hover:bg-[#855B39] transition duration-300"
          >
            VIEW FULL MENU
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  )
}

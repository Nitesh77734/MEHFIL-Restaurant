
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import dishes from '../data/dishes'

export default function ChefSpecial() {

  const specialDish = dishes.find((dish) => dish.popular)

  if (!specialDish) return null

  return (
    <section className="bg-[#48251F] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Dish Image */}
          <div className="relative overflow-hidden group">
            <img
              src={specialDish.image}
              alt={specialDish.name}
              className="w-full h-87.5 md:h-125 object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute top-6 left-6 bg-[#D5B58A] text-[#48251F] px-5 py-3 text-xs tracking-widest">
              CHEF'S SPECIAL
            </div>
          </div>

          {/* Dish Details */}
          <div>

            <p className="text-[#D5B58A] text-xs tracking-[5px] mb-6">
              HANDPICKED BY OUR CHEF
            </p>

            <h2 className="text-4xl md:text-6xl text-[#F4EBDD] mb-7">
              A Taste of <span className="italic">Royalty.</span>
            </h2>

            <h3 className="text-2xl text-[#D5B58A] mb-5">
              {specialDish.name}
            </h3>

            <p className="text-[#E5D4C0] text-sm leading-8 mb-8 max-w-lg">
              {specialDish.description}
            </p>

            <div className="flex items-center gap-3 mb-8">

              <div className="flex items-center gap-2 text-[#D5B58A]">
                <FaStar />
                <span>{specialDish.rating}</span>
              </div>

              <span className="text-[#D5B58A]">|</span>

              <span className="text-[#E5D4C0] text-sm">
                {specialDish.category}
              </span>

            </div>

            <p className="text-[#F4EBDD] text-2xl mb-9">
              ₹{specialDish.price}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-5 border border-[#D5B58A] text-[#F4EBDD] px-8 py-5 text-xs tracking-widest hover:bg-[#D5B58A] hover:text-[#48251F] transition duration-300"
            >
              RESERVE YOUR TABLE
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

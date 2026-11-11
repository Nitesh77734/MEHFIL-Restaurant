
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function FoodCard({ name, image, description, price, category }) {
  return (
    <div className="group bg-white overflow-hidden">

      {/* Food Image */}
      <div className="relative overflow-hidden h-70">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <span className="absolute top-5 left-5 bg-[#F4EBDD] text-[#48251F] px-4 py-2 text-[10px] tracking-widest">
          {category}
        </span>

      </div>

      {/* Card Content */}
      <div className="p-6">

        <div className="flex justify-between items-center gap-3 mb-3">

          <h3 className="text-2xl text-[#48251F] font-serif">
            {name}
          </h3>

          <span className="text-[#A4774F] font-medium whitespace-nowrap">
            ₹{price}
          </span>

        </div>

        <p className="text-sm text-[#855B39] leading-7 mb-6">
          {description}
        </p>

        <div className="border-t border-[#E8DCCB] pt-5 flex justify-between items-center">

          <span className="text-[10px] tracking-[2px] text-[#855B39]">
            SIGNATURE DISH
          </span>

          <FaArrowRight className="text-[#48251F] group-hover:translate-x-2 transition duration-300" />

        </div>

      </div>

    </div>
  )
}

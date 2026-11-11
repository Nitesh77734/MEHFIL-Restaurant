
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function AboutCTA() {
  return (
    <section className="relative bg-[#48251F] py-24 px-5 overflow-hidden">

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#D5B58A] uppercase tracking-[4px] text-sm mb-5">
          Your Table Awaits
        </p>

        <h2 className="text-4xl md:text-6xl font-serif text-[#F4EBDD] leading-tight mb-6">
          Experience The Art Of
          <span className="block text-[#D5B58A]">
            Indian Dining
          </span>
        </h2>

        <p className="text-[#E5D5C3] max-w-2xl mx-auto leading-8 mb-10">
          Discover timeless recipes, authentic flavours and warm
          hospitality at MEHFIL. We look forward to welcoming you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/menu"
            className="bg-[#D5B58A] text-[#48251F] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-[#F4EBDD] transition duration-300"
          >
            Explore Our Menu
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="border border-[#D5B58A] text-[#F4EBDD] px-8 py-4 rounded-full font-semibold hover:bg-[#D5B58A] hover:text-[#48251F] transition duration-300"
          >
            Reserve Your Table
          </Link>

        </div>

      </div>

    </section>
  )
}

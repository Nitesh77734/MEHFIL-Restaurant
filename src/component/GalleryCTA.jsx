
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function GalleryCTA() {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-5"
      style={{
        backgroundImage: "url('/images/gallery-3.jpg')"
      }}
    >

      <div className="absolute inset-0 bg-[#281510]/80"></div>

      <div className="relative max-w-3xl mx-auto text-center">

        <p className="text-[#D5B58A] uppercase tracking-[4px] text-sm mb-5">
          More Than Just A Meal
        </p>

        <h2 className="text-4xl md:text-6xl font-serif text-[#F4EBDD] mb-6">
          Create Beautiful
          <span className="block text-[#D5B58A]">
            Moments With Us
          </span>
        </h2>

        <p className="text-[#F4EBDD]/90 leading-8 mb-10">
          Beautiful food, royal ambience and unforgettable hospitality.
          Your MEHFIL experience is just one visit away.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/menu"
            className="bg-[#D5B58A] text-[#48251F] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-[#F4EBDD] transition"
          >
            Explore Our Menu
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="border border-[#D5B58A] text-[#F4EBDD] px-8 py-4 rounded-full font-semibold hover:bg-[#D5B58A] hover:text-[#48251F] transition"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  )
}

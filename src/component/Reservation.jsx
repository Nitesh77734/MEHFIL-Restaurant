
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function Reservation() {

  return (
    <section className="relative bg-[url('/images/reservation.jpg')] bg-cover bg-center py-32">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#24120F]/75"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <p className="text-[#D5B58A] text-xs tracking-[5px] mb-6">
          AN EVENING TO REMEMBER
        </p>

        <h2 className="text-4xl md:text-6xl text-[#F4EBDD] mb-7">
          Your Table <span className="italic">Awaits.</span>
        </h2>

        <p className="text-[#E5D4C0] text-sm md:text-base leading-8 max-w-2xl mx-auto mb-10">
          Make your special moments unforgettable.
          Join us for an extraordinary dining experience
          where every detail is crafted with elegance.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-5 bg-[#D5B58A] text-[#48251F] px-9 py-5 text-xs tracking-widest hover:bg-[#F4EBDD] transition duration-300"
        >
          RESERVE YOUR TABLE
          <FaArrowRight />
        </Link>

      </div>

    </section>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

        <div className="max-w-3xl hero-content">

          <p className="text-[#D5B58A] tracking-[5px] text-xs md:text-sm mb-7">
            JAIPUR · EST. 2026
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F4EBDD] leading-[1.1] mb-7">
            A Royal Affair
            <br />
            With Every
            <span className="block italic text-[#D5B58A]">
              Bite.
            </span>
          </h1>

          <p className="text-white/75 text-sm md:text-base leading-8 max-w-xl mb-10">
            Discover the timeless flavours of India,
            where royal traditions meet extraordinary
            culinary experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5">

            <Link
              to="/menu"
              className="flex items-center gap-4 bg-[#F4EBDD] text-[#48251F] px-7 py-4 text-xs tracking-widest hover:bg-[#D5B58A] transition duration-300"
            >
              EXPLORE MENU
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="border border-white/60 text-white px-7 py-4 text-xs tracking-widest hover:bg-white hover:text-[#48251F] transition duration-300"
            >
              RESERVE A TABLE
            </Link>

          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 right-10 hidden md:flex items-center gap-4 text-white/70">
        <span className="text-[10px] tracking-[3px]">
          SCROLL TO DISCOVER
        </span>
        <FaArrowDown className="text-[#D5B58A] animate-bounce" />
      </div>

    </section>
  )
}

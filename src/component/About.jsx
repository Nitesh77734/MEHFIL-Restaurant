
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function About() {
  return (
    <section className="bg-[#F4EBDD] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left Image */}
          <div className="relative">

            <div className="overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Royal Indian restaurant dining"
                className="w-full h-112.5 md:h-150 object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-3 md:-right-8 bg-[#48251F] text-[#F4EBDD] w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col justify-center items-center border-4 border-[#F4EBDD]">

              <span className="text-3xl font-semibold font-serif">
                100%
              </span>

              <span className="text-[9px] tracking-widest text-center mt-2">
                ROYAL
                <br />
                EXPERIENCE
              </span>

            </div>

          </div>

          {/* Right Content */}
          <div className="pt-8 md:pt-0">

            <p className="text-[#A4774F] text-xs tracking-[5px] mb-6">
              DISCOVER OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#48251F] leading-tight mb-8">
              Where Tradition
              <br />
              Meets <span className="italic">Taste.</span>
            </h2>

            <p className="text-[#855B39] leading-8 text-sm md:text-base mb-6">
              At MEHFIL, every meal is a celebration of
              India's rich culinary heritage. Inspired by
              royal kitchens and timeless traditions, we
              bring authentic flavours to your table.
            </p>

            <p className="text-[#855B39] leading-8 text-sm md:text-base mb-9">
              From carefully selected ingredients to
              beautifully crafted dishes, every detail
              reflects our passion for exceptional dining.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-4 border-b border-[#48251F] pb-3 text-[#48251F] text-xs tracking-widest hover:text-[#A4774F] hover:gap-6 transition-all duration-300"
            >
              DISCOVER OUR STORY
              <FaArrowRight />
            </Link>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-14 border-t border-[#CDBDA8] pt-8">

              <div>
                <h3 className="text-2xl md:text-3xl text-[#48251F] font-serif">
                  01
                </h3>
                <p className="text-[10px] text-[#855B39] mt-2 tracking-wider">
                  HERITAGE
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl text-[#48251F] font-serif">
                  02
                </h3>
                <p className="text-[10px] text-[#855B39] mt-2 tracking-wider">
                  FLAVOUR
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl text-[#48251F] font-serif">
                  03
                </h3>
                <p className="text-[10px] text-[#855B39] mt-2 tracking-wider">
                  EXPERIENCE
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}


import React from 'react'
import { FaAward, FaUtensils } from 'react-icons/fa'

export default function OurStory() {

  return (
    <section className="bg-[#F4EBDD] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">

            <img
              src="/images/about.jpg"
              alt="MEHFIL dining experience"
              className="w-full h-105 md:h-145 object-cover"
            />

            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-[#48251F] text-[#F4EBDD] p-7 md:p-9">

              <FaAward className="text-[#D5B58A] text-3xl mb-3" />

              <p className="text-2xl font-serif">
                Timeless
              </p>

              <p className="text-xs tracking-widest text-[#D5B58A] mt-2">
                INDIAN TRADITIONS
              </p>

            </div>

          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">

            <p className="text-[#A4774F] text-xs tracking-[5px] mb-6">
              OUR JOURNEY
            </p>

            <h2 className="text-4xl md:text-6xl text-[#48251F] leading-tight mb-8">
              More Than Food,
              <span className="italic block">It's an Experience.</span>
            </h2>

            <p className="text-[#855B39] text-sm leading-8 mb-6">
              At MEHFIL, we believe that Indian dining is more
              than a meal. It is a celebration of culture,
              flavours and togetherness.
            </p>

            <p className="text-[#855B39] text-sm leading-8 mb-10">
              Inspired by India's rich culinary heritage,
              our kitchen brings together traditional recipes,
              carefully selected ingredients and thoughtful
              presentation to create memorable dining moments.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 border-t border-[#D5C4AD] pt-8">

              <div>
                <FaUtensils className="text-[#A4774F] text-2xl mb-4" />

                <h3 className="text-[#48251F] text-lg mb-2">
                  Authentic Flavours
                </h3>

                <p className="text-[#855B39] text-xs leading-6">
                  Inspired by timeless Indian recipes.
                </p>
              </div>

              <div>
                <FaAward className="text-[#A4774F] text-2xl mb-4" />

                <h3 className="text-[#48251F] text-lg mb-2">
                  Royal Hospitality
                </h3>

                <p className="text-[#855B39] text-xs leading-6">
                  Every guest deserves a special experience.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

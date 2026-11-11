
import React from 'react'

export default function MenuHero() {

  return (
    <section className="relative min-h-120 md:min-h-187.5 flex items-center justify-center bg-[url('/images/menu-hero.jpg')] bg-cover bg-center">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#24120F]/70"></div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl mx-auto">

        <p className="text-[#D5B58A] text-xs tracking-[6px] mb-6">
          THE ART OF INDIAN DINING
        </p>

        <h1 className="text-5xl md:text-7xl text-[#F4EBDD] mb-7">
          Our Culinary <span className="italic">Collection.</span>
        </h1>

        <p className="text-[#E5D4C0] text-sm md:text-base leading-8 max-w-xl mx-auto">
          Explore a thoughtfully curated selection of
          authentic Indian delicacies, where timeless
          recipes meet extraordinary flavours.
        </p>

        <div className="w-20 h-px bg-[#D5B58A] mx-auto mt-10"></div>

      </div>

    </section>
  )
}


import React from 'react'

export default function AboutHero() {

  return (
    <section className="relative min-h-150 md:min-h- flex items-center justify-center bg-[url('/images/about.jpg')] bg-cover bg-center">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#24120F]/70"></div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl mx-auto">

        <p className="text-[#D5B58A] text-xs tracking-[6px] mb-6">
          THE STORY BEHIND MEHFIL
        </p>

        <h1 className="text-5xl md:text-7xl text-[#F4EBDD] mb-7">
          A Legacy of <span className="italic">Flavours.</span>
        </h1>

        <p className="text-[#E5D4C0] text-sm md:text-base leading-8 max-w-xl mx-auto">
          Where the richness of Indian traditions meets
          timeless elegance, creating an extraordinary
          experience with every visit.
        </p>

        <div className="w-20 h-1px bg-[#D5B58A] mx-auto mt-10"></div>

      </div>

    </section>
  )
}

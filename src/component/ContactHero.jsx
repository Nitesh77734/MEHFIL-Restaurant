
import React from 'react'

export default function ContactHero() {
  return (
    <section
      className="relative min-h-120 md:min-h-187.5 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/reservation.jpg')"
      }}
    >

      <div className="absolute inset-0 bg-[#281510]/70"></div>

      <div className="relative text-center px-5 max-w-3xl">

        <p className="text-[#D5B58A] uppercase tracking-[5px] text-sm mb-5">
          We Would Love To Hear From You
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-[#F4EBDD] mb-6">
          Get In Touch
        </h1>

        <p className="text-[#F4EBDD]/90 text-base md:text-lg leading-8">
          Have a question, planning a special occasion or simply
          wish to connect? We are always happy to welcome you.
        </p>

        <div className="w-20 h-0.5 bg-[#D5B58A] mx-auto mt-8"></div>

      </div>

    </section>
  )
}

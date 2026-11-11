
import React from 'react'
import { FaLeaf, FaMortarPestle, FaHeart } from 'react-icons/fa'

export default function OurPhilosophy() {

  const philosophies = [
    {
      icon: <FaLeaf />,
      title: "Authentic Ingredients",
      description: "We believe every great dish begins with the finest ingredients. Fresh produce, handpicked spices and quality ingredients make every bite special."
    },
    {
      icon: <FaMortarPestle />,
      title: "Traditional Recipes",
      description: "Our recipes celebrate India's rich culinary heritage, bringing generations of traditional flavours to your dining experience."
    },
    {
      icon: <FaHeart />,
      title: "Passionate Hospitality",
      description: "For us, hospitality is more than serving food. It's about making every guest feel welcomed, valued and truly special."
    }
  ]

  return (
    <section className="bg-[#F4EBDD] py-20 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-[#855B39] uppercase tracking-[4px] text-sm mb-4">
            What We Believe
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#48251F] mb-5">
            The Philosophy Behind Every Flavour
          </h2>

          <p className="text-[#855B39] leading-7">
            Our passion for exceptional dining is built on three timeless
            principles that define everything we do.
          </p>

        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {philosophies.map((item, index) => (

            <div
              key={index}
              className="bg-white/70 p-9 rounded-2xl text-center border border-[#D5B58A]/40 hover:shadow-xl transition duration-300"
            >

              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#48251F] text-[#D5B58A] flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif text-[#48251F] mb-4">
                {item.title}
              </h3>

              <p className="text-[#855B39] leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

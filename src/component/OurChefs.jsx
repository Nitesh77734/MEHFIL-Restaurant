
import React from 'react'
import { FaUtensils } from 'react-icons/fa'

export default function OurChefs() {

  const chefs = [
    {
      id: 1,
      name: "Chef Arjun Rathore",
      role: "Head Chef",
      specialty: "Indian Cuisine",
      image: "/images/chef-1.jpg",
      description: "Bringing authentic Indian flavours to life with creativity, passion and years of culinary experience."
    },
    {
      id: 2,
      name: "Chef Meera Sharma",
      role: "Executive Chef",
      specialty: "Traditional Specialties",
      image: "/images/chef-2.jpg",
      description: "Celebrating India's culinary heritage through traditional recipes and carefully selected spices."
    },
    {
      id: 3,
      name: "Chef Kabira Malhotra",
      role: "Pastry Chef",
      specialty: "Desserts & Sweets",
      image: "/images/chef-3.jpg",
      description: "Creating delightful desserts that bring a perfect and memorable ending to every meal."
    }
  ]

  return (
    <section className="bg-[#F4EBDD] py-20 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-[#855B39] uppercase tracking-[4px] text-sm mb-4">
            The People Behind The Flavours
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#48251F] mb-5">
            Meet Our Master Chefs
          </h2>

          <p className="text-[#855B39] leading-7">
            Every memorable dish has a passionate chef behind it.
            Meet the culinary minds who bring the MEHFIL experience to life.
          </p>

        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {chefs.map((chef) => (

            <div
              key={chef.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D5B58A]/40 hover:shadow-xl transition duration-300"
            >

              {/* Chef Image */}
              <div className="h-95 overflow-hidden">

                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* Chef Details */}
              <div className="p-7 text-center">

                <div className="flex justify-center mb-4">
                  <FaUtensils className="text-[#C5A477] text-xl" />
                </div>

                <h3 className="text-2xl font-serif text-[#48251F] mb-2">
                  {chef.name}
                </h3>

                <p className="text-[#855B39] text-sm uppercase tracking-widest mb-1">
                  {chef.role}
                </p>

                <p className="text-[#C5A477] text-sm font-medium mb-4">
                  {chef.specialty}
                </p>

                <p className="text-gray-600 leading-7">
                  {chef.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

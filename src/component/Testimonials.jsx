
import React from 'react'
import { FaStar, FaQuoteRight } from 'react-icons/fa'

export default function Testimonials() {

  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      location: "Jaipur, India",
      review: "An unforgettable dining experience. The ambience was beautiful and the food was absolutely delicious.",
      rating: 5
    },
    {
      id: 2,
      name: "Meera Kapoor",
      location: "Delhi, India",
      review: "Every dish was full of authentic flavours. The hospitality and presentation were truly exceptional.",
      rating: 5
    },
    {
      id: 3,
      name: "Rohan Malhotra",
      location: "Mumbai, India",
      review: "A perfect place for a special evening. The royal atmosphere made our dinner memorable.",
      rating: 5
    }
  ]

  return (
    <section className="bg-[#F4EBDD] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#A4774F] text-xs tracking-[5px] mb-5">
            GUEST EXPERIENCES
          </p>

          <h2 className="text-4xl md:text-6xl text-[#48251F] mb-6">
            Words That <span className="italic">Warm Our Hearts.</span>
          </h2>

          <p className="text-[#855B39] max-w-xl mx-auto text-sm leading-7">
            Every visit creates a memory. Discover what our
            guests have to say about their MEHFIL experience.
          </p>

        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="bg-white p-8 md:p-10 border border-[#E8DCCB] hover:shadow-xl transition duration-500"
            >

              <div className="flex justify-between items-center mb-8">

                <div className="flex gap-1 text-[#C5A477]">
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <FaQuoteRight className="text-3xl text-[#E8DCCB]" />

              </div>

              <p className="text-[#855B39] text-sm leading-8 mb-10">
                "{item.review}"
              </p>

              <div className="border-t border-[#E8DCCB] pt-6">

                <h3 className="text-[#48251F] text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#A4774F] text-xs tracking-wider mt-2">
                  {item.location}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

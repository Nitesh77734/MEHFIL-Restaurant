
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function GalleryPreview() {

  const galleryImages = [
    {
      id: 1,
      image: "/images/gallery-1.jpg",
      title: "Royal Dining"
    },
    {
      id: 2,
      image: "/images/gallery-2.jpg",
      title: "Authentic Flavours"
    },
    {
      id: 3,
      image: "/images/gallery-3.jpg",
      title: "Fine Dining"
    },
    {
      id: 4,
      image: "/images/gallery-4.jpg",
      title: "Culinary Art"
    }
  ]

  return (
    <section className="bg-[#48251F] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#D5B58A] text-xs tracking-[5px] mb-5">
            A GLIMPSE OF MEHFIL
          </p>

          <h2 className="text-4xl md:text-6xl text-[#F4EBDD] mb-6">
            Moments Worth <span className="italic">Savouring.</span>
          </h2>

          <p className="text-[#D5B58A] max-w-xl mx-auto text-sm leading-7">
            From exquisite culinary creations to an atmosphere
            of timeless elegance, experience the world of MEHFIL.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {galleryImages.map((item, index) => (

            <div
              key={item.id}
              className={`relative overflow-hidden group h-75 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2 lg:h-155" : ""
              }`}
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to- from-black/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6">

                <h3 className="text-[#F4EBDD] text-xl md:text-2xl">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Gallery Button */}
        <div className="flex justify-center mt-16">

          <Link
            to="/gallery"
            className="flex items-center gap-5 border border-[#D5B58A] text-[#F4EBDD] px-9 py-5 text-xs tracking-widest hover:bg-[#D5B58A] hover:text-[#48251F] transition duration-300"
          >
            EXPLORE OUR GALLERY
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  )
}

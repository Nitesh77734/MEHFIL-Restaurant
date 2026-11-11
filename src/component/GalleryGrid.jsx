
import React, { useState } from 'react'

export default function GalleryGrid() {

  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Food", "Ambience", "Dining", "Desserts"]

  const gallery = [
    {
      id: 1,
      image: "/images/gallery-1.jpg",
      title: "Royal Dining Ambience",
      category: "Ambience"
    },
    {
      id: 2,
      image: "/images/gallery-2.jpg",
      title: "An Elegant Experience",
      category: "Dining"
    },
    {
      id: 3,
      image: "/images/gallery-3.jpg",
      title: "The MEHFIL Experience",
      category: "Ambience"
    },
    {
      id: 4,
      image: "/images/gallery-4.jpg",
      title: "Moments To Remember",
      category: "Dining"
    },
    {
      id: 5,
      image: "/images/biryani.jpg",
      title: "Royal Dum Biryani",
      category: "Food"
    },
    {
      id: 6,
      image: "/images/panner.jpg",
      title: "Signature Paneer",
      category: "Food"
    },
    {
      id: 7,
      image: "/images/butter-chicken.jpg",
      title: "Rich Indian Flavours",
      category: "Food"
    },
    {
      id: 8,
      image: "/images/gulab-jamun.jpg",
      title: "Sweet Endings",
      category: "Desserts"
    }
  ]

  const filteredGallery = activeCategory === "All"
    ? gallery
    : gallery.filter((item) => item.category === activeCategory)

  return (
    <section className="bg-[#F4EBDD] py-20 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-[#855B39] uppercase tracking-[4px] text-sm mb-4">
            Captured Moments
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#48251F]">
            Explore Our Gallery
          </h2>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? "bg-[#48251F] text-[#F4EBDD]"
                  : "border border-[#855B39]/40 text-[#48251F] hover:bg-[#48251F] hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredGallery.map((item) => (

            <div
              key={item.id}
              className="relative h-75 md:h-87.5 rounded-2xl overflow-hidden group cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-linear-to- from-[#281510]/80 via-transparent to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 p-6">

                <p className="text-[#D5B58A] text-xs uppercase tracking-[3px] mb-2">
                  {item.category}
                </p>

                <h3 className="text-white text-2xl font-serif">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

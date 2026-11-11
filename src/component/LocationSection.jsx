
import React from 'react'
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa'

export default function LocationSection() {
  return (
    <section className="bg-[#F4EBDD] px-5 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-[#855B39] uppercase tracking-[4px] text-sm mb-4">
            Visit Our Restaurant
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#48251F]">
            Find Your Way To MEHFIL
          </h2>

          <p className="text-[#855B39] mt-5">
            We look forward to welcoming you.
          </p>

        </div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="bg-[#48251F] rounded-2xl p-8 md:p-12">

            <div className="w-14 h-14 rounded-full bg-[#D5B58A] text-[#48251F] flex items-center justify-center text-2xl mb-7">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-3xl font-serif text-[#F4EBDD] mb-5">
              Visit MEHFIL
            </h3>

            <p className="text-[#E5D5C3] leading-8 mb-8">
              Experience authentic Indian cuisine, royal ambience
              and warm hospitality at MEHFIL.
            </p>

            <div className="border-t border-[#D5B58A]/40 pt-6">

              <p className="text-[#D5B58A] uppercase tracking-widest text-sm mb-3">
                Our Location
              </p>

              <p className="text-[#F4EBDD] text-lg mb-7">
                Jaipur, Rajasthan, India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jaipur+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D5B58A] text-[#48251F] px-7 py-4 rounded-full font-semibold hover:bg-[#F4EBDD] transition duration-300"
              >
                Get Directions
                <FaDirections />
              </a>

            </div>

          </div>

          {/* Right Side - Map */}
          <div className="h-87.5 md:h-112.5 rounded-2xl overflow-hidden shadow-lg">

            <iframe
              title="MEHFIL Location Map"
              src="https://maps.google.com/maps?q=Jaipur%2C%20Rajasthan&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  )
}

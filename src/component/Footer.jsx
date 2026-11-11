
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowUp
} from 'react-icons/fa'

export default function Footer() {

  return (
    <footer className="bg-[#48251F] text-[#F4EBDD]">

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-4xl tracking-[4px] mb-5">
              MEHFIL<span className="text-[#D5B58A]">.</span>
            </h2>

            <p className="text-[#D5B58A] text-sm leading-7 max-w-xs">
              The Art of Indian Dining. Experience the
              timeless flavours of India with a touch
              of royal elegance.
            </p>

            <div className="flex items-center gap-4 mt-7">

              <a href="#" aria-label="Instagram"
                className="w-10 h-10 border border-[#855B39] flex items-center justify-center hover:bg-[#D5B58A] hover:text-[#48251F] transition">
                <FaInstagram />
              </a>

              <a href="#" aria-label="Facebook"
                className="w-10 h-10 border border-[#855B39] flex items-center justify-center hover:bg-[#D5B58A] hover:text-[#48251F] transition">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="YouTube"
                className="w-10 h-10 border border-[#855B39] flex items-center justify-center hover:bg-[#D5B58A] hover:text-[#48251F] transition">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg mb-7">Explore</h3>

            <ul className="space-y-4 text-sm text-[#D5B58A]">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover:text-white transition">
                  Our Menu
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Opening Hours */}
          <div>

            <h3 className="text-lg mb-7">Opening Hours</h3>

            <div className="space-y-4 text-sm text-[#D5B58A]">

              <div>
                <p className="text-[#F4EBDD] mb-1">Monday – Friday</p>
                <p>12:00 PM – 11:00 PM</p>
              </div>

              <div>
                <p className="text-[#F4EBDD] mb-1">Saturday – Sunday</p>
                <p>12:00 PM – 11:30 PM</p>
              </div>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg mb-7">Visit MEHFIL</h3>

            <div className="space-y-4 text-sm text-[#D5B58A]">

              <p>
                Jaipur, Rajasthan, India
              </p>

              <p>
                For reservations and enquiries,
                please visit our contact page.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-[#F4EBDD] border-b border-[#D5B58A] pb-2 hover:text-[#D5B58A] transition"
              >
                GET IN TOUCH
                <FaArrowUp className="rotate-45" />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#855B39] mt-16 pt-7 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-xs text-[#D5B58A] text-center">
            © 2026 MEHFIL. All Rights Reserved.
          </p>

          <p className="text-xs text-[#D5B58A] tracking-wider">
            THE ART OF INDIAN DINING
          </p>

        </div>

      </div>

    </footer>
  )
}

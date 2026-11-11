
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="w-full bg-[#F4EBDD] relative">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex flex-col" onClick={closeMenu}>
          <span className="text-3xl font-semibold tracking-widest text-[#48251F]">
            MEHFIL
          </span>
          <span className="text-[9px] tracking-[3px] text-[#855B39]">
            THE ART OF INDIAN DINING
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm text-[#48251F]">
          <Link to="/" className="hover:text-[#A4774F] transition">Home</Link>
          <Link to="/menu" className="hover:text-[#A4774F] transition">Menu</Link>
          <Link to="/about" className="hover:text-[#A4774F] transition">Our Story</Link>
          <Link to="/gallery" className="hover:text-[#A4774F] transition">Gallery</Link>
          <Link to="/contact" className="hover:text-[#A4774F] transition">Contact</Link>
        </div>

        {/* Desktop Reservation Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-[#48251F] text-[#F4EBDD] px-6 py-3 text-xs tracking-widest hover:bg-[#855B39] transition duration-300"
        >
          RESERVE A TABLE
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#48251F] text-2xl"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F4EBDD] px-6 pb-6 flex flex-col gap-5 text-[#48251F] text-sm">

          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
          <Link to="/about" onClick={closeMenu}>Our Story</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-[#48251F] text-[#F4EBDD] px-5 py-3 text-center text-xs tracking-widest"
          >
            RESERVE A TABLE
          </Link>

        </div>
      )}

    </header>
  )
}

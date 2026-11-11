
import React, { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight
} from 'react-icons/fa'

export default function ContactInfo() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
  }

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      detail: "Jaipur, Rajasthan, India"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: "+91 98765 43210"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "hello@mehfilrestaurant.com"
    },
    {
      icon: <FaClock />,
      title: "Opening Hours",
      detail: "Monday - Sunday | 12 PM - 11 PM"
    }
  ]

  return (
    <section className="bg-[#F4EBDD] py-20 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-[#855B39] uppercase tracking-[4px] text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#48251F]">
            We'd Love To Hear From You
          </h2>

          <p className="text-[#855B39] mt-5 leading-7">
            Connect with us for reservations, enquiries and special occasions.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-serif text-[#48251F] mb-8">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {contactDetails.map((item, index) => (

                <div
                  key={index}
                  className="bg-white/70 p-6 rounded-2xl border border-[#D5B58A]/40"
                >

                  <div className="w-12 h-12 rounded-full bg-[#48251F] text-[#D5B58A] flex items-center justify-center text-lg mb-5">
                    {item.icon}
                  </div>

                  <h4 className="text-xl font-serif text-[#48251F] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-[#855B39] text-sm leading-6">
                    {item.detail}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 bg-[#48251F] rounded-2xl p-7">

              <h4 className="text-2xl font-serif text-[#F4EBDD] mb-3">
                Planning Something Special?
              </h4>

              <p className="text-[#E5D5C3] leading-7">
                Whether it's a family gathering or a special celebration,
                we'd be delighted to make your experience memorable.
              </p>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-7 md:p-10 shadow-sm">

            <h3 className="text-3xl font-serif text-[#48251F] mb-3">
              Send Us A Message
            </h3>

            <p className="text-[#855B39] mb-8">
              Fill out the form and let us know how we can help.
            </p>

            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-6">
                Thank you! Your demo form was submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-[#48251F] mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-[#D5B58A]/60 rounded-xl px-4 py-3 outline-none focus:border-[#48251F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label className="block text-[#48251F] mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                    className="w-full border border-[#D5B58A]/60 rounded-xl px-4 py-3 outline-none focus:border-[#48251F]"
                  />
                </div>

                <div>
                  <label className="block text-[#48251F] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone"
                    className="w-full border border-[#D5B58A]/60 rounded-xl px-4 py-3 outline-none focus:border-[#48251F]"
                  />
                </div>

              </div>

              <div>
                <label className="block text-[#48251F] mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="w-full border border-[#D5B58A]/60 rounded-xl px-4 py-3 outline-none focus:border-[#48251F]"
                />
              </div>

              <div>
                <label className="block text-[#48251F] mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full border border-[#D5B58A]/60 rounded-xl px-4 py-3 outline-none focus:border-[#48251F] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#48251F] text-[#F4EBDD] py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#855B39] transition duration-300"
              >
                Send Message
                <FaArrowRight />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

import React from 'react'
import Hero from '../component/Hero'
import SignatureDishes from '../component/SignatureDishes'
import About from '../component/About'
import GalleryPreview from '../component/GalleryPreview'
import Testimonials from '../component/Testimonials'
import Reservation from '../component/Reservation'

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <SignatureDishes/>
        <GalleryPreview/>
        <Testimonials/>
        <Reservation/>
    </div>
  )
}

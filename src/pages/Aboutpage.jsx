import React from 'react'
import AboutHero from '../component/AboutHero'
import OurStory from '../component/OurStory'
import OurPhilosophy from '../component/OurPhilosophy'
import OurChefs from '../component/OurChefs'
import AboutCTA from '../component/AboutCTA'

export default function Aboutpage() {
  return (
    <div>
        <AboutHero/>
        <OurStory/>
        <OurPhilosophy/>
        <OurChefs/>
        <AboutCTA/>
    </div>
  )
}

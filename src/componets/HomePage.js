import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'

const HomePage = () => {
  return (
    <div>
        {/* <Navigation/> */}
        <Hero/>
        {/* <AboutMe/> */}
        <Skills/>
        <Projects/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage
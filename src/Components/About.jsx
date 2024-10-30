
import React from 'react'
import CarousleComp from './CarousleComp'


const About = () => {

  const images = [
    'src/assets/Aboutus1.jpg',
    'src/assets/Aboutus2.jpg'
  ]
  return (
    <div>
        <h4 className='text-center'>About Us</h4>
        <CarousleComp images={images} autoSlideInterval = {3000} />
    </div>
  )
}

export default About
import React from 'react'
import CountryForm from './Countryform'
import bgImage from '../images/bg.jpg'
import NavBar from './NavBar'



export default function Calculator() {
  return (

    <div className="flex flex-column ">
      <div className="  flex items-start justify-center h-screen w-80 p-4 border-2 border-gray-500 bg-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: '0.9',
        }} >

        <p className='font-extrabold'> GET A QUOTE</p>

        <CountryForm />
        
      </div>

      <div className='bg-white'>


      </div>

    </div>
  )
}

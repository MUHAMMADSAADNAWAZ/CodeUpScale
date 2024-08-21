import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'


const Services = () => {
  return (
    <div className='services mt-6'>
        <h3 className='text-center text-2xl font-bold mb-2 text-[#5236ff]'>Our Services</h3>
        <h1 className='text-5xl font-bold text-center mb-14'>Services we Offer</h1>
        <div className="flex">
            <ServiceBox />
        </div>
    </div>
  )
}

export default Services
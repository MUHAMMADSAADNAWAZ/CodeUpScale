import React from 'react'
import testimonials from '../../assets/testominalBg.png'
import TestimonialsBox from '../TestimonialsBox/TestimonialsBox'

const Testimonials = () => {
  return (
    <div>
    <div className='testimonials bg-[#F9F9FD] pt-3 flex gap-6'>
        <div className="left w-1/3">
            <img src={testimonials} alt="Testimonials" className='w-[513px] h-[805px] p-4 rounded-[20px]'/>
        </div>
        <div className="right pt-10  w-2/3">
            <h2 className='text-2xl font-bold text-[#5236FF] mb-3'>Testimonials</h2>
            <h1 className='text-5xl font-bold text-[#111029] mb-3'>We've stopped counting. Over <br /> 500 brands count on us.</h1>
            <p className='text-lg font-normal text-[#6B6B6B] mb-3'>1,200+ projects executed successfully and an average relationship of over 3 years.</p>
        </div>
    </div>
        <TestimonialsBox />
    </div>
  )
}

export default Testimonials
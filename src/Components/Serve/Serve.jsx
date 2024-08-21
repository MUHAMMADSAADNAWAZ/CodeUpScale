import React from 'react'
import ServeBox from '../ServeBox/ServeBox'

const Serve = () => {
  return (
    <div className='serve bg-[#F9F9FD] mt-6 p-10'>
        <h5 className='text-2xl font-bold text-center text-[#5236FF] mt-5 mb-3'>We Serve</h5>
        <h2 className='text-5xl font-bold text-center mb-3'>Industries We Serve</h2>
        <p className='text-lg font-normal text-center text-[#6B6B6B] mb-10'>From mobile apps to sophisticated software, we are your go-to team for <br /> crafting applicatiosn of all kind.</p>
        <ServeBox />
    </div>
  )
}

export default Serve
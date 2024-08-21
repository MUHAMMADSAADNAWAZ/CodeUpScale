import React from 'react'
import arrow from '../../assets/arrow-right-white.png'

const Stories = () => {
  return (
    <div className='stories mx-8 rounded-2xl bg-[#5236FF] flex p-10 justify-between items-center relative top-[150px] mt-[-150px]'>
        <div className="left">
            <h2 className='text-2xl font-bold text-white p-2 ml-2'>Let’s Create Big Stories Together</h2>
            <p className='text-lg font-normal text-white p-4'>Technology is on our nerves. We don’t just build solutions, we create <br /> brands. Opting for our services is choosing excellence for your <br /> business.</p>
        </div>
            <button className='right w-[172px] h-[58px] bg-black flex items-center cursor-pointer gap-3 p-4 font-bold rounded-2xl'>
                <p className='text-base font-semibold text-white'>Get In Touch</p>
                <img src={arrow} alt="arrow"/>
            </button>
        
    </div>
  )
}

export default Stories
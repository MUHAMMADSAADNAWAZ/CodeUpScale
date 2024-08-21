import React from 'react'
import arrow_right from '../../assets/arrow-right.png'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero flex mt-10 gap-6'>
        <div className="left m-4 pb-10"> 
            <h1 className='text-7xl font-bold m-3 p-3'>Tech <br /> <span className='text-[#5236FF]'>Landscapes</span> for <span className='text-[#5236ff]'>Startups</span></h1>
            <p className='text-lg font-normal text-[#6B6B6B] m-3 p-2'>We transform your conceptual sketches into market-ready <br />
                products through seamless collaboration, creative ingenuity, <br />
             and technical expertise</p>
             <button className='w-[172px] h-[58px] g-10 font-bold bg-[#4C40F7] text-white flex justify-center items-center gap-3 rounded-lg m-3' > <p> Get Started</p> <img src={arrow_right} alt="arrow_right" className='w-5 h-4'/></button>
        </div>
        <div className="right">
            <img src={hero} alt="hero_img" className='h-full'/>
        </div>
    </div>
  )
}

export default Hero
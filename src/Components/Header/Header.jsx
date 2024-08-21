import React from 'react'
import logo from '../../assets/logo.png'
import HeaderNav from '../HeaderNav/HeaderNav'
// import dropdown_icon from '../../assets/dropdown.png'

const Header = () => {

  return (
    <div className='header flex justify-around sticky top-0 mb-2 mt-4 bg-white h-[88px] z-50'>
      <div className="left mt-4">
        <img src={logo} alt="Logo" className='mt-3 cursor-pointer'/>
      </div>
      <div className="right flex mt-4">
        
        <HeaderNav />
        <button className='text-[#5236FF] font-bold border-2 border-solid border-[#5236ff] mr-3 p-2 text-xs rounded-lg h-[45px]'>MVP Development</button>
        <button className='bg-[#5236FF] rounded-lg text-white text-xs p-2 font-medium h-10 w-[104px]'>Get in Touch</button>
      </div>
    </div>
  )
}

export default Header
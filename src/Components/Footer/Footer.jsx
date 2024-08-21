import React from 'react'
import logo from '../../assets/logo_white.png'
import linkddin_icon from '../../assets/Linkedin.png'
import facebook_icon from '../../assets/Facebook.png'
import twitter_icon from '../../assets/Twitter.png'
import FooterBox from '../FooterBox/FooterBox'
import FooterOffice from '../FooterOffices/FooterOffice'


const Footer = () => {
  return (
    <div className='footer bg-black text-white p-5 pt-52'>
      <div className='p-10 flex gap-14'>
        <div className="left w-[22%] ">
          <img src={logo} alt="logo" className='w-[191px] h-9 mb-5 cursor-pointer'/>
          <p className='text-base font-normal text-white mb-5 gap-3'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
          <img src={linkddin_icon} alt="linkedin" className='h-9 w-9 inline cursor-pointer'/>
          <img src={facebook_icon} alt="facebook" className='h-9 w-9 inline cursor-pointer mx-3'/>
          <img src={twitter_icon} alt="twitter" className='h-9 w-9 inline cursor-pointer'/>
        </div>
        <div className="right w-[75%]">
            <FooterBox />
        </div>
      </div>
      <h6 className='text-base font-semibold text-white my-4 pl-4'>Our Offices</h6>  
      <FooterOffice />
      <hr />
      <p className='text-center text-green-600 font-bold text-lg mt-3'>Made by Saad</p>
    </div>
  )
}

export default Footer
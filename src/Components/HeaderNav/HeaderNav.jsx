import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const HeaderNav = () => {
    
  const location = useLocation()
  const [activeElement , setActiveElement] = useState(location.pathname)

  useEffect(()=>{
    setActiveElement(location.pathname)
  } , [location.pathname])


    const elements = [
        {
            link : "/",
            name : "Home"
        },
        {
            link : "/about",
            name : "About"
        },
        {
            link : "/services",
            name : "Services"
        },
        {
            link : "/talent",
            name : "Hire Talent"
        },
        {
            link : "/portfolio",
            name : "Portfolio"
        },
        {
            link : "/careers",
            name : "Careers"
        }
    ]

  return (
    <ul className='flex p-3 gap-4 text-base font-medium'>
        {elements.map((element , index)=>{
          return (<li key={index} className={`cursor-pointer hover:text-[#5236FF] ${activeElement===element.link ? "text-blue-400" : ""}`}><NavLink to={element.link}>{element.name}</NavLink></li>)
        })}
    </ul>
  )
}

export default HeaderNav
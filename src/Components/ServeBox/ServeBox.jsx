import React from 'react'
import ecommerceLogo from '../../assets/ecommerceServeLogo.png'
import educationLogo from '../../assets/educationLogo.png'
import healthLogo from '../../assets/healthLogo.png'
import distributionLogo from '../../assets/distributionLogo.png'
import socialLogo from '../../assets/socialLogo.png'
import travelLogo from '../../assets/travelLogo.png'
import onDemandLogo from '../../assets/onDemandLogo.png'
import estateLogo from '../../assets/estateLogo.png'
import gameServeLogo from '../../assets/gameServeLogo.png'
import foodLogo from '../../assets/foodLogo.png'

const ServeBox = () => {

    const elements = [
        {
            logo : ecommerceLogo,
            desc : "Retail , Commerce"
        },
        {
            logo : educationLogo,
            desc : "Education & e-learning"
        },
        {
            logo : healthLogo,
            desc : "Healthcare & Fitness"
        },
        {
            logo : distributionLogo,
            desc : "Logitics & Distribution"
        },
        {
            logo : socialLogo,
            desc : "Social Networking"
        },
        {
            logo : travelLogo,
            desc : "Travel & Hospitality"
        },
        {
            logo : onDemandLogo,
            desc : "On-Demand Solutions"
        },
        {
            logo : estateLogo,
            desc : "Real Estate"
        },
        {
            logo : gameServeLogo,
            desc : "Gaming"
        },
        {
            logo : foodLogo,
            desc : "Food & Restaurant"
        }
    ]

  return (
    <div className='serveBox flex flex-wrap justify-center items-center gap-5'>
        {elements.map((element , index)=>{
            return(<div key={index} className='w-[180px] h-[152px] rounded-2xl py-6 px-11 gap-4 shadow-lg flex flex-col justify-center items-center'>
                <img src={element.logo} alt={element.desc} className='w-10 h-10'/>
                <p className='text-base font-semibold text-center'>{element.desc}</p>
            </div>)
        })}
    </div>
  )
}

export default ServeBox
import React from 'react'
import price from '../../assets/price.png'
import hire from '../../assets/hire.png'
import onSite from '../../assets/onSite.png'


const PartnershipBox = () => {

    const elements = [
        {
            logo: price,
            heading : "Fixed Price Model",
            desc: "This model outlines project scope, cost, and timeline upfront, ideal for longer engagements. Clients gain budget assurance and suits those with clear requirements and vision."
        },
        {
            logo: hire,
            heading : "Hire Dedicated Model",
            desc: "Clients pay for developer hours in this straightforward model, facilitating easy project initiation and feature updates. Precise payment transparency enhances trust and communication."
        },
        {
            logo: onSite,
            heading : "On Site Development Model",
            desc: "Clients choose this model for on-site development support. Its cost-effective, promotes face-to-face interaction, and aids timely delivery through continuous communication, ensuring deadline achievement."
        }
    ]

  return (
    <div className='partnershipbox flex gap-5 my-6'>
        {elements.map((element , index)=>{
            return(<div key={index} className='flex flex-col gap-6 w-1/3 shadow-lg p-11 rounded-[20px] h-[420px]'>
                <img src={element.logo} alt={element.heading} className='h-10 w-10'/>
                <h3 className='text-lg font-bold text-[#02010F] leading-8'>{element.heading}</h3>
                <p className='text-lg font-normal text-[#6B6B6B] leading-8'>{element.desc}</p>
            </div>)
        })}
    </div>
  )
}

export default PartnershipBox
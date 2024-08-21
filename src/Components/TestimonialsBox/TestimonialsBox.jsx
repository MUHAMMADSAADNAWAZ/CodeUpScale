import React from 'react'
import ment from '../../assets/ment.png'
import editable from '../../assets/ediable.png'
import driverfly from '../../assets/driverfly.png'
import arrow from '../../assets/right_arrow.png'

const TestimonialsBox = () => {

    const elements = [
        {
            logo : ment,
            arrow : arrow,
            desc : "Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.",
            name: "Ment.ai CEO",
            writer : "Michael Jhonson"
        },
        {
            logo : editable,
            arrow : arrow,
            desc : "Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.",
            name: "EDM CEO",
            writer : "Alan"
        },
        {
            logo : driverfly,
            arrow : arrow,
            desc : "Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.",
            name: "Driverfly CEO",
            writer : "."
        }
    ]

  return (
    <div className='testimonialsbox flex gap-10 relative top-[-550px] pl-6 h-0'>
        {elements.map((element , index)=>{
            return(<div key={index} className='w-[360px] h-[510px] p-6 rounded-3xl bg-white'>
                <div className='flex justify-between my-4'>
                    <img src={element.logo} alt="element" />
                    <img src={element.arrow} alt="arrow" className='h-4 w-4'/>
                </div>
                <p className='text-lg font-normal text-[#667085] py-4'>{element.desc}</p>
                <h4 className='text-lg font-semibold text-[#5236FF] py-2'>{element.name}</h4>
                <h5 className='text-lg font-normal text-[#02010F] pb-4'>{element.writer}</h5>
            </div>)
        })}
    </div>
  )
}

export default TestimonialsBox
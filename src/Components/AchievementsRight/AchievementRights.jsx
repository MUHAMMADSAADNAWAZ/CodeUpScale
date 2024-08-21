import React from 'react'
import award1 from '../../assets/award1.png'
import award2 from '../../assets/award2.png'
import award3 from '../../assets/award3.png'
import award4 from '../../assets/award4.png'
import award5 from '../../assets/award5.png'
import award6 from '../../assets/award6.png'

const AchievementRights = () => {

    const elements = [
        {
            logo : award1,
            desc : "Achievement in Customer Satisfaction 2022"
        },
        {
            logo : award2,
            desc : "America's Fastest Growing Companies 2022"
        },
        {
            logo : award3,
            desc : "Top 100 Global Outsourcing Providers and Advisors 2023"
        },
        {
            logo : award4,
            desc : "IT Service Provider of the Year 2022"
        },
        {
            logo : award5,
            desc : "Excellence in Customer Service 2022"
        },
        {
            logo : award6,
            desc : "Best Agile Project 2022"
        }
    ]

  return (
    <div className='acievemntright flex flex-wrap gap-7'>
        {elements.map((element , index)=>{
            return(<div key={index} className='flex flex-col gap-4 w-[30%] mb-5 items-center'>
                <img src={element.logo} alt="awards" className='w-[128px] h-[86px]'/>
                <p className='text-xs font-normal text-center text-white'>{element.desc}</p>
            </div>)
        })}
    </div>
  )
}

export default AchievementRights
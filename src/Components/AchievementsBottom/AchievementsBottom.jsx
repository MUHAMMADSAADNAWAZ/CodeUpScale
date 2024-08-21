import React from 'react'
import rating from '../../assets/achieve_bottom.png'

const AchievementsBottom = () => {

    const elements = [
        {
            logo : rating,
            numbers : "100+",
            desc : "Skilled team of Superheroes"
        },
        {
            logo : rating,
            numbers : "700+",
            desc : "Global Footprint"
        },
        {
            logo : rating,
            numbers : "99%",
            desc : "Customer Retention"
        }
    ]

  return (
    <div className='achivementbottom flex gap-7 items-center justify-center'>
        {elements.map((element , index)=>{
          return(  <div key={index} className='w-[30%]'>
            <img src={element.logo} alt="ratings" className='w-[242px] h-[242px] '/>
                <div className='flex flex-col relative top-[-185px] gap-4 w-[150px] left-[50px]'>
                    <h1 className='text-5xl font-bold text-white text-center'>{element.numbers}</h1>
                    <p className='text-lg font-semibold text-white text-center'>{element.desc}</p>
                </div>
            </div> )
        })}
    </div>
  )
}

export default AchievementsBottom
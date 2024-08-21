import React from 'react'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import researcher1 from '../../assets/researcher1.png'
import researcher2 from '../../assets/researcher2.png'
import researcher3 from '../../assets/researcher3.png'
import top_right_icon from '../../assets/top_right_icon.png'


const ArticleBox = () => {

    const elements = [
        {
            logo : article1,
            name : "Management",
            heading : "Bill Walsh leadership",
            arrow : top_right_icon,
            desc : "Would you like to know the secrets of transforming a 2-14 team into a winning one?",
            researcher : researcher1,
            researcherName : "Alec Whitten",
            researchDate : "17 Jan 2022"
        },
        {
            logo : article2,
            name : "Product",
            heading : "PM mental models",
            arrow : top_right_icon,
            desc : "Mental models are simple expressions of complex processe",
            researcher : researcher2,
            researcherName : "Demi WIlkinson",
            researchDate : "16 Jan 2022"
        },
        {
            logo : article3,
            name : "Design",
            heading : "What is Wireframing?",
            arrow : top_right_icon,
            desc : "Introduction to Wireframing and its Principles. Learn from the best",
            researcher : researcher3,
            researcherName : "Candice Wu",
            researchDate : "15 Jan 2022"
        }
    ]

  return (
    <div className='researchbox flex gap-8 items-center justify-center'>
        {
            elements.map((element , index)=>{
               return( <div key={index} className='w-[360px] h-[516px] p-6 pb-8 rounded-[20px] bg-white shadow-lg gap-8'>
                    <img src={element.logo} alt="research" className='w-[312px] h-[240px] rounded-[20px] mb-5'/>
                    <h5 className='text-sm font-semibold text-[#5236FF] mb-3'>{element.name}</h5>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className='text-2xl font-bold'>{element.heading}</h2>
                        <img src={element.arrow} alt="arrow" className='w-2.5 h-2.5'/>
                    </div>
                    <p className='text-lg font-normal text-[#667085] mb-4'>{element.desc}</p>
                    <div className="flex gap-3">
                        <img src={element.researcher} alt="researcher" className='w-10 h-10 rounded-[200px]'/>
                        <div className='flex flex-col gap-1'>
                            <h6 className='text-sm font-medium'>{element.researcherName}</h6>
                            <p className='text-sm font-normal text-[#667085]'>{element.researchDate}</p>
                        </div>
                    </div>
                </div>)
            })
        }
    </div>
  )
}

export default ArticleBox
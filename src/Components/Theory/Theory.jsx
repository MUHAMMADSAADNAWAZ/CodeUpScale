import React from 'react'
import bgImg from '../../assets/theoryBG.png'
import thoeryImg from '../../assets/theory.png'

const Theory = () => {
  return (
    <div className='theory bg-cover bg-center w-full h-[696px] py-10 flex gap-7 px-8' style={{
        backgroundImage: `url(${bgImg})`,
        backgroundColor: 'rgb(31 , 11 , 155)',
        backgroundBlendMode: 'screen',
      }}>
        <div className="left w-1/2">
            <h1 className='text-5xl font-bold text-white mb-5'>Our Theory</h1>
            <p className='text-lg font-normal text-white mb-5'>Code UpScale is an innovative technology company that specializes in a wide range of services, including Software development, App development, UI/UX design, Product management support, Blockchain, and AI, among others.</p>
            <p className='text-lg font-normal text-white mb-5'>Our name reflects our commitment to assisting clients in the challenging journey of expanding their software solutions, all while striking the right balance between quality, speed, and cost-effectiveness. We achieve this through the following key elements:</p>
            <p className='text-lg font-normal text-white mb-5'>1. A robust network of highly specialized talent. <br />
            2. Our team of dedicated managers based in the United States maintain direct communication with our overseas QA and development teams. This approach ensures project alignment and collaboration with both the client and end-users.</p>
            <p className='text-lg font-normal text-white mb-5'>Our founders, who bring extensive experience from top-tier tech companies, have instilled the best practices within our organization. This has resulted in a proven track record of consistently delivering projects on time and achieving peak performance, helping our clients reach their goals successfully.</p>
        </div>
        <div className="right">
            <img src={thoeryImg} alt="Theory" className='w-[408px] h-[477px]'/>
        </div>
    </div>
  )
}

export default Theory
import React from 'react'
import blue_arraw from '../../assets/blue_arrow.png'
import AchievementRights from '../AchievementsRight/AchievementRights'
import AchievementsBottom from '../AchievementsBottom/AchievementsBottom'

const Achievements = () => {
  return (
    <div className='achievements p-5 m-6 rounded-3xl bg-black'>
        <div className="flex p-6 mb-6">
            <div className="left w-1/2">
                <h2 className='text-2xl font-bold text-[#5236FF] mb-3'>Excellence</h2>
                <h1 className='text-5xl font-bold text-white mb-3'>Our minimum bar <br /> for client delivery.</h1>
                <p className='text-lg font-normal text-white p-3 pl-0'>Over 30 awards, accolades, and achievements <br /> showcase our quality and commitment to client success.</p>
                <div className="btn flex py-5 gap-2 items-center">
                    <p className='cursor-pointer text-sm font-semibold text-[#5236FF]'>Our Trophy Cabinet</p>
                    <img src={blue_arraw} alt="blue_arrow" className='w-4 h-4 cursor-pointer'/>
                </div>
            </div>
            <div className="right w-1/2">
                <AchievementRights />
            </div>
        </div>
        <AchievementsBottom />
    </div>
  )
}

export default Achievements
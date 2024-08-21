import React from 'react'
import img from '../../assets/execution.png'
import phone from '../../assets/phone.png'
import person from '../../assets/person.png'
import track from '../../assets/track.png'
import line from '../../assets/line.png'
import curve from '../../assets/IdeationCurve.png'
import circle from '../../assets/IdeationCircle.png'

const Execution = () => {
  return (
    <div className='execution m-5'>
        <h4 className='text-2xl font-bold text-[#5236FF] text-center'>Ideation to Execution</h4>
        <h1 className='text-5xl font-bold text-center'>Our Process : Simple , Seamless , <br /> Streamlined!</h1>
        <div className="theoryBox flex gap-10 mt-12 mx-4">
            <div className="left w-1/2">
                <img src={img} alt="Theory man" className='w-[555px] h-[665px] rounded-[20px] '/>
                <img src={curve} alt="curve" className='relative bottom-[700px] right-[100px] rotate-180 z-[-1] w-[146px] h-[117px]'/>
                <img src={circle} alt="circle" className='h-12 w-12 relative bottom-[680px] right-[60px] z-[-1]'/>
            </div>
                    <img src={line} alt="line" className='h-[763px] w-[62px] z-[-1] relative left-[45px]'/>
            <div className="right flex flex-col gap-16 w-1/2 relative right-[75px]">
                <div className="phone flex gap-6">
                    <img src={phone} alt="phone" className='w-12 h-12 '/>
                    <div>
                        <p className='text-sm font-bold text-[#687580] mb-2'>Step 1</p>
                        <h2 className='text-2xl font-bold mb-5'>Participate in an exploratory meeting</h2>
                        <p className='text-lg font-normal text-[#6B6B6B]'>Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.</p>
                    </div>
                </div>
                <div className="person flex gap-6">
                    <img src={person} alt="person" className='w-12 h-12'/>
                    <div>
                        <p className='text-sm font-bold text-[#687580] mb-2'>Step 2</p>
                        <h2 className='text-2xl font-bold mb-5'>Exploring Solution and Team Setup</h2>
                        <p className='text-lg font-normal text-[#6B6B6B]'>In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.</p>
                    </div>
                </div>
                <div className="track flex gap-6">
                    <img src={track} alt="track" className='w-12 h-12'/>
                    <div>
                        <p className='text-sm font-bold text-[#687580] mb-2'>Step 3</p>
                        <h2 className='text-2xl font-bold mb-5'>Commence/Start and Monitor Progress</h2>
                        <p className='text-lg font-normal text-[#6B6B6B]'>Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.</p>
                    </div>
                </div>
                <button className='w-[172px] h-[58px] gap-10 py-4 px-3 text-white bg-[#4C40F7] rounded-lg relative left-[72px] top-[20px]'>Schedule a Call</button>
            </div>
        </div>

    </div>
  )
}

export default Execution
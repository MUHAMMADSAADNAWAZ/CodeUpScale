import React from 'react'

const MyForm = () => {

    const elements = [
        {
            name : "Name*",
            type : "text"
        },
        {
            name : "Email*",
            type : "email"
        },
        {
            name : "Phone*",
            type : "text"
        },
        {
            name : "Company*",
            type : "text"
        }
    ]

  return (
    <div className='myform'>
        <form>
            {elements.map((element , index)=>{
               return( <input key={index} type={element.type} placeholder={element.name} className='w-[555px] h-[56px] border outline-none rounded-lg m-4 px-2 ml-0' required/>)
            })}
            <textarea className='w-[1140px] h-[191px] border outline-none rounded-lg p-2 my-3' placeholder='Message'></textarea>
            <button className='w-[172px] h-[58px] py-4 px-3 rounded-lg bg-[#4C40F7] text-white gap-2.5'>Send Message</button>
        </form>
    </div>
  )
}

export default MyForm
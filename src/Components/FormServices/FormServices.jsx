import React from 'react'

const FormServices = () => {

    const elements = ["Website" , "Mobile App" , "Digital Product" , "Software Development" , "Ecommerce Development" , "Blockchain"];

  return (
    <div className='formservices flex gap-4 mb-6 mt-4'>
        {elements.map((element , index)=>{
           return( <div key={index} className='bg-white gap-10 rounded py-1 px-5'>
                <p className='text-base font-normal text-[#787A80]'>{element}</p>
            </div> )
        })}
    </div>
  )
}

export default FormServices
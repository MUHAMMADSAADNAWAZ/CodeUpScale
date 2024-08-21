import React from 'react'
import FormServices from '../FormServices/FormServices'
import MyForm from '../MyForm/MyForm'

const Form = () => {
  return (
    <div className='form bg-[#F9F9FD] p-10 pb-20'>
        <h4 className='text-2xl font-bold text-[#5236FF] text-center'>Your Needs, Our Code – Building Solutions for You!</h4>
        <h1 className='text-5xl font-bold text-center mb-12'>Let’s Work Together</h1>
        <h6 className='text-base font-semibold'>Services you are looking for</h6>
        <FormServices />
        <MyForm />
    </div>
  )
}

export default Form
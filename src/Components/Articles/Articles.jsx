import React from 'react'
import ArticleBox from '../ArticleBox/ArticleBox'

const Articles = () => {
  return (
    <div className='articles p-5 mb-8'>
        <h3 className='text-2xl font-bold text-center text-[#5236FF] mb-3'>Articles</h3>
        <h2 className='text-5xl font-bold text-center mb-7'>Research</h2>
        <ArticleBox />
    </div>
  )
}

export default Articles
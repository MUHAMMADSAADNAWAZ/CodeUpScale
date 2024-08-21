import React from 'react'


const FooterBox = () => {

    const elements = [
        {
            heading:"Mobile",
            text1 : "Android Apps",
            text2: "IPhone Apps",
            text3: "Hybrid Apps",
            text4: "Flutter",
            text5: "React Native",
            text6: "Kotlin",
            text7: "Ionic",
            text8: "Swift",
            text9: "Xamarin"
        },
        {
            heading:"Web",
            text1 : "PHP",
            text2: "Laravel",
            text3: "Drupal",
            text4: "Wordpress",
            text5: "Java",
            text6: "CodeIgniter",
            text7: "CakePhp",
            text8: "TypeScript",
            text9: "JavaScript"
        },
        {
            heading:"Ecommerce",
            text1 : "Magento",
            text2: "Shopify",
            text3: "Ubercart",
            text4: "Prestashop",
            text5: "CS Cart",
            text6: "Virtue Mart",
            text7: "BigCOmmerce",
            text8: "WooCommerce",
            text9: ""
        }
    ]

  return (
    <div className='footerbox flex'>
      {elements.map((element , index)=>{
       return( <div key={index} className='w-[33%] '>
          <h6 className='text-lg font-semibold text-white mb-6 ml-2'>{element.heading}</h6>
          <ul>
            <li className='text-base font-normal text-white m-2'>{element.text1}</li>
            <li className='text-base font-normal text-white m-2'>{element.text2}</li>
            <li className='text-base font-normal text-white m-2'>{element.text3}</li>
            <li className='text-base font-normal text-white m-2'>{element.text4}</li>
            <li className='text-base font-normal text-white m-2'>{element.text5}</li>
            <li className='text-base font-normal text-white m-2'>{element.text6}</li>
            <li className='text-base font-normal text-white m-2'>{element.text7}</li>
            <li className='text-base font-normal text-white m-2'>{element.text8}</li>
            <li className='text-base font-normal text-white m-2'>{element.text9}</li>
          </ul>
        </div>)
      })}
    </div>
  )
}

export default FooterBox
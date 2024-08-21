import React from 'react'
import pak_flag from '../../assets/pak-flag.png'
import uk_flag from '../../assets/uk-flag.png'
import us_flag from '../../assets/us-flag.png'
import pak_office from '../../assets/pakOffice.png'
import us_office from '../../assets/ukOffice.png'
import uk_office from '../../assets/usaOffice.png'

const FooterOffice = () => {

    const elements = [
        {
            office : us_office,
            flag : us_flag,
            name : "USA OFFICE",
            address : "1575, 447 Broadway, 2nd Floor New York, New York 10013, US",
            phone : "+1 (323) 570-2013"
        },
        {
            office : uk_office,
            flag : uk_flag,
            name : "UK OFFICE",
            address : "22 Archibald Road Birmingham, England B19 1RZ, GB",
            phone : "+1 213 262 1025"
        },
        {
            office : pak_office,
            flag : pak_flag,
            name : "PAKISTAN OFFICE",
            address : "K2 block, Wapda Town 331 Lahore, Punjab 54000, PK",
            phone : "+92 3253601337"
        }
    ]

  return (
    <div className='footeroffice flex gap-6 p-4 mb-8'>
        {elements.map((element , index)=>{
           return( <div className="flex gap-2" key={index}>
                <div className="left">
                    <img src={element.office} alt="office" className='w-[73px] h-[102px]'/>
                </div>
                <div className="right">
                    <div className="flex gap-1 mb-2 items-center">
                        <img src={element.flag} alt="flag" className='w-6 h-4 rounded-sm'/>
                        <p className='text-base font-medium text-white'>{element.name}</p>
                    </div>
                    <p className='text-base font-normal text-[#CCCCCC] mb-2'>{element.address}</p>
                    <p className='text-base font-normal text-white'>{element.phone}</p>
                </div>
            </div>)

        })}
        
    </div>
  )
}

export default FooterOffice
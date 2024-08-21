import React from 'react'

// App Logos
import AppLogo from '../../assets/appLogo.png'
import AndroidAppLogo from '../../assets/androidAppLogo.png'
import IosAppLogo from '../../assets/apple-iconLogo.png'
import FlutterAppLogo from '../../assets/flutterLogo.png'
import ReactNativeAppLogo from '../../assets/react-nativeLogo.png'
import KotlinAppLogo from '../../assets/kotlinLogo.png'
import IONICAppLogo from '../../assets/ionicLogo.png'

// web logos
import WebLogo from '../../assets/webLogo.png'
import PhpWebLogo from '../../assets/phpLogo.png'
import WordPressWebLogo from '../../assets/wordpressLogo.png'
import DrupalWebLogo from '../../assets/drupalLogo.png'
import CakePhpWebLogo from '../../assets/cakephpLogo.png'
import LarevelWebLogo from '../../assets/laravelLogo.png'
// Javascript Logo is missing

// Excommerce Logos
import EcommerceLogo from '../../assets/EcommerceLogo.png'
import MagentoEcommerceLogo from '../../assets/magentoLogo.png'
import BigEcommerceLogo from '../../assets/bigcommerceLogo.png'
import UbercartEcommerceLogo from '../../assets/ubercartLogo.png'
import PrestaShopEcommerceLogo from '../../assets/prestashopLogo.png'
import VirtueMartEcommerceLogo from '../../assets/virtuemartLogo.png'
// shopify logo is missing

// blockchain Logos
import blockChainLogo from '../../assets/blockchainLogo.png'
import EthereumblockChainLogo from '../../assets/ethereumLogo.png'
import hyperLedgerblockChainLogo from '../../assets/hyperledgerLogo.png'
import smartContractblockChainLogo from '../../assets/smart-contractLogo.png'
import privateblockChainLogo from '../../assets/private-blockchainlogo.png'
import marketPlaceblockChainLogo from '../../assets/nft-marketplaceLogo.png'
// Future trading Logo is missing

// Devops Logo
import DevopsLogo from '../../assets/devopsLogo.png'
import AWSDevopsLogo from '../../assets/AWSlogo.png'
import OCIDevopsLogo from '../../assets/OCILogo.png'
import GCPDevopsLogo from '../../assets/GCPLogo.png'
import CloudDevopsLogo from '../../assets/Cloud NativeLogo.png'
import AzureDevopsLogo from '../../assets/Azure DevOpsLogo.png'
// 1 logo(Docker) is less here

// salesforce Logos
import SalesforceLogo from '../../assets/salesforceLogo.png'
import SalesforceSolutionLogo from '../../assets/SalesforceSolutionLogo.png'

// AI & ML Logos 
import AILogo from '../../assets/AILogo.png'
import TexttoSpeechAILogo from '../../assets/text-to-speechLogo.png'
import BussinessIntelligenceAILogo from '../../assets/business-intelligenceLogo.png'
import DataForecastingAILogo from '../../assets/data-forecasting-newLogo.png'
import NLPAILogo from '../../assets/natural-language-processingLogo.png'
import DataAnalyticsAILogo from '../../assets/data-analyticsLogo.png'
import AlexaSkillDevelopAILogo from '../../assets/alexa-skills-developmentLogo.png'

// Microsoft Logos
// no correct microsoft logo i have therefore i will built IOT & embedded page instead
// IOT & Embedded Logos
import IOTLogo from '../../assets/IOTLOgo.png'
import AppIOTLogo from '../../assets/iot-appslogo.png'
import EmbeddedIOTLogo from '../../assets/embedded-softwarelogo.png'
import HardwareIOTLogo from '../../assets/iot-hardware-prototypingLogo.png'
import DashboardIOTLogo from '../../assets/iot-dashboard-and-analyticslogo.png'
// There are 2 less Logos

// game development logos
import gameLogo from '../../assets/gameLogo.png'
import UnitygameLogo from '../../assets/unity-3dLogo.png'
import ARgameLogo from '../../assets/augmented-realityLogo.png'
import VRgameLogo from '../../assets/virtual-reality-v2Logo.png'
import CasualgameLogo from '../../assets/casual-gamesLogo.png'
import MetaversegameLogo from '../../assets/metaverse-newLogo.png'
// BuildBox logo is missing

const elements = [
    {
        Logo : AppLogo,
        Desc : "App Development",
        firstLogo : AndroidAppLogo,
        firstDesc : "Android App",
        secondLogo : IosAppLogo,
        secondDesc : "IOS App",
        thirdLogo : FlutterAppLogo,
        thirdDesc : "Flutter",
        fourthLogo : ReactNativeAppLogo,
        fourthDesc : "React Native",
        fifthLogo : KotlinAppLogo,
        fifthDesc : "Kotlin",
        sixthLogo : IONICAppLogo,
        sixthDesc : "IONIC",
    },
    {
        Logo : WebLogo,
        Desc : "Web Development",
        firstLogo : PhpWebLogo,
        firstDesc : "PHP",
        secondLogo : WordPressWebLogo,
        secondDesc : "WordPress",
        thirdLogo : DrupalWebLogo,
        thirdDesc : "Drupal",
        fourthLogo : CakePhpWebLogo,
        fourthDesc : "Cake Php",
        fifthLogo : LarevelWebLogo,
        fifthDesc : "Laravel",
        sixthLogo : LarevelWebLogo,
        sixthDesc : "JavaScript",
    },
    {
        Logo : EcommerceLogo,
        Desc : "Ecommerce Development",
        firstLogo : MagentoEcommerceLogo,
        firstDesc : "Magento",
        secondLogo : BigEcommerceLogo,
        secondDesc : "Big Commerce",
        thirdLogo : UbercartEcommerceLogo,
        thirdDesc : "Ubercart",
        fourthLogo : PrestaShopEcommerceLogo,
        fourthDesc : "Prestashop",
        fifthLogo : VirtueMartEcommerceLogo,
        fifthDesc : "Virtuemart",
        sixthLogo : VirtueMartEcommerceLogo,
        sixthDesc : "Shopify",
    },
    {
        Logo : blockChainLogo,
        Desc : "BlockChain Development",
        firstLogo : EthereumblockChainLogo,
        firstDesc : "Ethereum",
        secondLogo : hyperLedgerblockChainLogo,
        secondDesc : "Hyper Ledger",
        thirdLogo : smartContractblockChainLogo,
        thirdDesc : "Smart Contracts",
        fourthLogo : privateblockChainLogo,
        fourthDesc : "Private Blockchain",
        fifthLogo : marketPlaceblockChainLogo,
        fifthDesc : "NFT Marketplace",
        sixthLogo : marketPlaceblockChainLogo,
        sixthDesc : "Future Trading",
    },
    {
        Logo : DevopsLogo,
        Desc : "DevOps",
        firstLogo : AWSDevopsLogo,
        firstDesc : "AWS",
        secondLogo : OCIDevopsLogo,
        secondDesc : "Oracle Cloud Infrastructure",
        thirdLogo : GCPDevopsLogo,
        thirdDesc : "Google Cloud",
        fourthLogo : CloudDevopsLogo,
        fourthDesc : "DC / OC",
        fifthLogo : AzureDevopsLogo,
        fifthDesc : "Docker",
        sixthLogo : AzureDevopsLogo,
        sixthDesc : "Digital Cloud",
    },
    {
        Logo : SalesforceLogo,
        Desc : "Salesforce Solutions",
        firstLogo : SalesforceSolutionLogo,
        firstDesc : "Salesforce Development",
        secondLogo : SalesforceSolutionLogo,
        secondDesc : "Salesforce Consulting",
        thirdLogo : SalesforceSolutionLogo,
        thirdDesc : "Salesforce Implementation",
        fourthLogo : SalesforceSolutionLogo,
        fourthDesc : "Marketing Cloud",
        fifthLogo : SalesforceSolutionLogo,
        fifthDesc : "Salesforce Skills",
        sixthLogo : SalesforceSolutionLogo,
        sixthDesc : "Salesforce Intelligence",
    },
    {
        Logo : AILogo,
        Desc : "AI & ML",
        firstLogo : TexttoSpeechAILogo,
        firstDesc : "Text to Speech",
        secondLogo : BussinessIntelligenceAILogo,
        secondDesc : "Bussiness Intelligence",
        thirdLogo : DataForecastingAILogo,
        thirdDesc : "DATA Forecasting",
        fourthLogo : NLPAILogo,
        fourthDesc : "Natural Language Processing",
        fifthLogo : DataAnalyticsAILogo,
        fifthDesc : "Data Analytics",
        sixthLogo : AlexaSkillDevelopAILogo,
        sixthDesc : "Alexa Skills Development",
    },
    {
        Logo : IOTLogo,
        Desc : "IOT & Embedded",
        firstLogo : AppIOTLogo,
        firstDesc : "IOT Apps",
        secondLogo : EmbeddedIOTLogo,
        secondDesc : "Embedded Software",
        thirdLogo : HardwareIOTLogo,
        thirdDesc : "IOT Hardware Prototyping",
        fourthLogo : DashboardIOTLogo,
        fourthDesc : "IOT Dashboard Prototyping",
        fifthLogo : HardwareIOTLogo,
        fifthDesc : "IOT Hardware Prototyping",
        sixthLogo : DashboardIOTLogo,
        sixthDesc : "IOT Dashboard Prototyping",
    },
    {
        Logo : gameLogo,
        Desc : "Game Development",
        firstLogo : UnitygameLogo,
        firstDesc : "Unity",
        secondLogo : ARgameLogo,
        secondDesc : "Augumented Reality",
        thirdLogo : VRgameLogo,
        thirdDesc : "Virtual Reality",
        fourthLogo : CasualgameLogo,
        fourthDesc : "Casual Games",
        fifthLogo : MetaversegameLogo,
        fifthDesc : "Metaverse",
        sixthLogo : MetaversegameLogo,
        sixthDesc : "Metaverse",
    }
]


const ServiceBox = () => {
  return (
    <div className='flex flex-wrap p-6'>
        {elements.map((element , index) =>{
            return (<div key={index} className='shadow-md p-10 w-[30%] m-5' >
                <img src={element.Logo} alt={element.Desc} className='w-10 h-10 mb-6'/>
                <h4 className='text-lg font-bold my-3 mt-3'>{element.Desc}</h4>
                <ul className='flex flex-col gap-3'>
                    <li className='flex gap-2'><img src={element.firstLogo} alt={element.firstDesc} className='w-6 h-6'/><p className='text-lg font-normal text-[#6B6B6B]'>{element.firstDesc}</p></li>
                    <li className='flex gap-2'><img src={element.secondLogo} alt={element.secondDesc} className='w-6 h-6'/><p className='text-lg font-normal text-[#6B6B6B]'>{element.secondDesc}</p></li>
                    <li className='flex gap-2'><img src={element.thirdLogo} alt={element.thirdDesc} className='w-6 h-6'/><p className='text-lg font-normal text-[#6B6B6B]'>{element.thirdDesc}</p></li>
                    <li className='flex gap-2'><img src={element.fourthLogo} alt={element.fourthDesc} className='w-6 h-6'/><p className='text-lg font-normal text-[#6B6B6B]'>{element.fourthDesc}</p></li>
                    <li className='flex gap-2'><img src={element.fifthLogo} alt={element.fifthDesc} className='w-6 h-6'/><p className='text-lg font-normal text-[#6B6B6B]'>{element.fifthDesc}</p></li>
                    <li className='flex gap-2'><img src={element.sixthLogo} alt={element.sixthDesc} className='w-6 h-6'/><p className='text-lg font-normal text-[#6B6B6B]'>{element.sixthDesc}</p></li>
                </ul> 
                <button className='border-2 border-solid border-[#5236ff] text-[#5236ff] mt-5 p-2 rounded-lg cursor-pointer w-[128px]'>See More</button>
            </div>)
        })}
    </div>
  )
}

export default ServiceBox
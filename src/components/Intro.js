import React from 'react'
import "./Intro.css"
import {arrowUp,robot} from "../assets/index"

const Intro = () => {
  return (
    <div className="intro__Main section__padding div-center-80 div-center-80" id='home'>
       <div className='intro__Section1'>
            <p className='p__Sans intro__Section1__Discount dark' style={{color:"black"}}>20% Discount For 1Month Account</p>

            <div className='intro__Heading'>
               <h1 className='h__Cormorant'>
                 The Next <span>Generation</span>
                 Payment Method
               </h1>

               <div className='intro__Heading__Circle'>
                 <p className='p__Sans'>Get Started</p>
                 <img src={arrowUp}/>

               </div>
            </div>
            
            <p className='p__Cormorant'>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
            </p>


       </div>


       <div className='intro__Section2'>
         <img src={robot}/>
       </div>
    </div>
  )
}

export default Intro
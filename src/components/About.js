import React from 'react'
import "./About.css"

import {quotes,people01,people02,people03,airbnb,binance,coinbase,dropbox} from "../assets/index"
const About = () => {
  return (
    <div className='about__Main section__padding div-center-80' id='about'>

      <div className='about__Wrapper1'>
        <h1 className='h__Cormorant'>What people are saying about us</h1>
      <p className='p__Sans'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>


      <div className='about__Wrapper2'>



           <div className='wrapper2__sections'>
             <img height={20} src={quotes}/>
             <p className='p__Sans'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>

             <div className='wrapper2__Sections__Peoples'>

               <img src={people01} style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
                      
               <div className='people__Text'>
                 <p className='h__Cormorant'>Herman Jenser</p>

                 <p className='p__Cormorant'>
                   Founder and Leader
                 </p>
              </div>       

             </div>
           </div>



           <div className='wrapper2__sections'>
             <img height={20} src={quotes}/>
             <p className='p__Sans'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>

             <div className='wrapper2__Sections__Peoples'>

               <img src={people02} style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
                      
               <div className='people__Text'>
                 <p className='h__Cormorant'>Herman Jenser</p>

                 <p className='p__Cormorant'>
                   Founder and Leader
                 </p>
              </div>       

             </div>
           </div>



           <div className='wrapper2__sections'>
             <img height={20} src={quotes}/>
             <p className='p__Sans'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>

             <div className='wrapper2__Sections__Peoples'>

               <img src={people03} style={{height:"40px",width:"40px",borderRadius:"50%"}}/>
                      
               <div className='people__Text'>
                 <p className='h__Cormorant'>Herman Jenser</p>

                 <p className='p__Cormorant'>
                   Founder and Leader
                 </p>
              </div>       

             </div>
           </div>

      </div>



    
       
      
      <div className='about__Wrapper3'>
         <img src={airbnb} height={50}/>
         <img src={binance} height={50}/>
         <img src={coinbase} height={50}/>
         <img src={dropbox} height={50}/>
   
      </div>


       <div className='about__Wrapper4 grid-22'>
      <div className='text'>

         <h1 className='h__Cormorant'>
           Lets try our services
         </h1>
         <p className='p__Cormorant'>
         Everything you need to accept card payments and grow your business anywhere on the planet.
         </p>

      </div>
         <button className='btn' style={{height:"40px"}}>Try Now</button>
       </div>

    </div>
  )
}

export default About
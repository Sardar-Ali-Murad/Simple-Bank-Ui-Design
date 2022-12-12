import React from 'react'
import "./Footer.css"
import {logo} from "../assets/index"
import {twitter,facebook,linkedin,instagram} from "../assets/index"

const Footer = () => {
  return (
    <div className='footer__Main section__padding div-center-80 main-div-margins'>
      <div className='footer__Section1'>
          <div className='footer__Components'>

           <img src={logo} height={50} width={130}/>

           <p className='p__Sans footer__Mian__Text'>
           A new way to make the payments easy, reliable and secure.
           </p>
          </div>

          <div className='footer__Components'>
              <h1 className='h__Cormorant'>
                  Useful Links
              </h1>

              <p>Context</p>
              <p>How it works</p>
              <p>Create</p>
              <p>Explore</p>
              <p>Term and services</p>
          </div>


          <div className='footer__Components'>
              <h1 className='h__Cormorant'>
                  Community
              </h1>

              <p>Context</p>
              <p>How it works</p>
              <p>Create</p>
              <p>Explore</p>
              <p>Term and services</p>
          </div>


          <div className='footer__Components'>
              <h1 className='h__Cormorant'>
                  Patners
              </h1>

              <p>Context</p>
              <p>How it works</p>
              <p>Create</p>
              <p>Explore</p>
              <p>Term and services</p>
          </div>


      </div>

      <div className='footer__Section2'>
          <div className='line'></div>
          <div className='footer__Follow'>
              <p className='p__Sans'>
                  Copyright @All United Banks.All Rights Reserved
              </p>

              <div>
                 <img src={twitter}/>
                 <img src={facebook}/>
                 <img src={linkedin}/>
                 <img src={instagram}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
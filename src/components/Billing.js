import React from 'react'
import "./Billing.css"
import {binance,coinbase,card} from "../assets/index"

const Billing = () => {
  return (
    <div className='billing__Main section__padding div-center-80' id='features'>
         <div className='billing__Wrapper1'>
           <h1 className='h__Cormorant'>Find A Better Card Deal In Few East Steps</h1>
           <p className='p__Sans'>
           Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
           </p>
           <button className='btn'>Get Started</button>
         </div>

         <div className='billing__Wrapper2 p__Cormorant'>
           <img src={card}/>
         </div>
    </div>
  )
}

export default Billing
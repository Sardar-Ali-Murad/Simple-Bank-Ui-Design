import React from 'react'
import {logo} from "../assets/index"
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Menu } from '@mui/material';

const Navbar = () => {
    let [showNav,setShowNav]=React.useState(false)

    function shownav(){
        setShowNav(true)
    }

    function hidenav(){
        setShowNav(false)
    }
  return (



    <div class="header__Main">
      <div className='header__Main__Logo'>
         <img src={logo}/>
      </div>

      <div className='header__Main__Navbar'>
          <nav>
              <ul className='p__Cormorant'>
                  <li><a className='roboto' href="#home">Home</a></li>
                  <li><a className='roboto' href='#about'>About</a></li>
                  <li><a className='roboto' href='#features'>Features</a></li>
                  <li><a className='roboto' href='#security'>Security</a></li>
              </ul>
          </nav>
      </div>

      <div className='header__Small__Screen'>
     
     {showNav ==false ?
         
         <p className='p__Cormorant' onClick={shownav} style={{cursor:"pointer"}}><MenuIcon/></p>:
         <p className='p__Cormorant' onClick={hidenav} style={{cursor:"pointer"}}><CloseIcon/></p>            
 }

       
    
   {showNav && <div className='header__Links__Small__Screen__Nav'>
   <p className='p__Cormorant' onClick={hidenav} style={{cursor:"pointer"}}><CloseIcon/></p> 
   <nav>
              <ul className='p__Cormorant'>
              <li><a href="#home" onClick={hidenav}>Home</a></li>
                  <li><a className='roboto' href='#about' onClick={hidenav}>About</a></li>
                  <li><a className='roboto' href='#features' onClick={hidenav}>Features</a></li>
                  <li><a className='roboto' href='#security' onClick={hidenav}>Security</a></li>
              </ul>
          </nav>
    </div>}



      </div>

    </div>
  )
}

export default Navbar
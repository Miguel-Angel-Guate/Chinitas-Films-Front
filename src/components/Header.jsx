import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss';



const  Header = () => {
      
    return (
       <header>
       
       <div className="guestZone">
               <div><p>Chinitas</p></div>
              
               <div><NavLink className="log" to='/login' exact>Login</NavLink></div>
               </div>
       </header>
       
   )
}

export default Header

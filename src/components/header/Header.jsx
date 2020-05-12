import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss';
import Search from '../search/Search';

const  Header = () => {
      
    return (
       <header className="cont">
       
       <div className="head">
       <p className="net">Chinitas</p>
       <NavLink className="log" to='/login' exact><button>Login</button></NavLink>
       </div>
       <div className="search">
       <Search />
       </div>

       </header>
       
       
       
   )
}

export default Header

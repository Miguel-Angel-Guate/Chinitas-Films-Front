import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss';
import SearchFront from '../search/Search';

const  Header = () => {
      
    return (
       <header className="contOfHeader">
       
       <div className="headOfTheContainer">
       <p className="titleOfChinitas">Chinitas films</p>
       <NavLink className="buttonLogin" to='/login' exact><button>Sign in</button></NavLink>
       </div>
       <div className="search">
       <SearchFront />
       </div>

       </header>
       
       
       
   )
}

export default Header

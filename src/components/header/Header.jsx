import React from 'react'
import { NavLink } from 'react-router-dom'


import './Header.scss';
import SearchFront from '../search/Search';


const  Header = () => {
      
    return (
       <header className="contOfHeader">
       
       <div className="headOfTheContainer">
       <img className="titleOfChinitas" src={require('./../../img/chap.png')} />
       <NavLink className="buttonLogin"  to='/signIn' exact><button>Sign in</button></NavLink>
       </div>
       <div className="search">
 <SearchFront />
       </div>
       
      
       </header>
       
       
       
       
   )
}

export default Header

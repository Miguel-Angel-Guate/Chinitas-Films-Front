import React from 'react'
import  './Search.scss'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Search } = Input;


const SearchFront = () => {
       return (
              <div className="search">
              <h1>Unlimited films, Tv <br></br> shows, and more.</h1>
              <p>Watch anywhere, cancel anytime</p>
              

              <Search  className="se"
      placeholder="email"
     enterButton="Just Try it right now" 
      NavLink="(([to='/sigupfirstpage']))"
     
     
      
      onSearch={value => console.log(value)}
      
    />
    <NavLink to="/signup"><p>Ready? Start writting your email </p></NavLink>

             
              </div>


       )
}

export default SearchFront

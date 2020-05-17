import React from 'react'
import  './Search.scss'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;


const SearchFront = () => {
       return (
              <div className="search">
              <h1>Unlimited films, Tv <br></br> shows, and more.</h1>
              <p>Watch anywhere, cancel anytime</p>
              

              <Search className="se"
      placeholder="email"
      enterButton="Join free for a month"
      size="large"
      onSearch={value => console.log(value)}
      
    />
    <p>Start writting your email </p>

             
              </div>


       )
}

export default SearchFront

import React from 'react'
import './HeaderHome.scss'

const HeaderHome = () => {
       return (
              <div className="headerHome">
              <img className="logoHome" src={require('./../../img/chap.png')} />
              <p>Home</p>
              <p>Films</p>
              <p>Most Relevants</p>

                     
              </div>
       )
}

export default HeaderHome 

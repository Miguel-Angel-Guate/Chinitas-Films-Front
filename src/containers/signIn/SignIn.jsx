import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './SignIn.scss'

export class SignIn extends Component {

      
       render() {
              return (
                     <div className="signInContainer">
                     <div className="headOfTheContainer">
                     <NavLink to="/home"><p className="titleOfChinitas">Chinitas films</p></NavLink>
                    
                     </div>
                    
                     
                     </div>
              )
       }
}

export default SignIn

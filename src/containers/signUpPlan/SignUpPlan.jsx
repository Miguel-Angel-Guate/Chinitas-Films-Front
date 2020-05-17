import React, { Component } from 'react'
import './SignUpPlan.scss'
import { NavLink } from 'react-router-dom'


export class SignUpPlan extends Component {
       render() {
              return (
                     <div className="containerSignUpPlan">
                     <div className="headerOfSignUpPlan">
                    <NavLink to='/home' exact><h1>Chapos Films</h1></NavLink>
                    <NavLink to='/signIn' exact><p>Sign in</p></NavLink>
                    </div>
                            
                     </div>
              )
       }
}

export default SignUpPlan

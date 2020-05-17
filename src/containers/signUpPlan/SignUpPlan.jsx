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

                    <div className="allContainer">
                    <p>Step 2 of 3</p>
                    <h3>Change your plan when you want</h3>

                    <div className="containerPlans">
                    <div className="plan">
                    <p>Basic</p>
                    </div>
                    <div className="plan1">
                    <p>Estandar</p>
                    </div>
                    <div className="plan2">
                    <p>Premium</p>
                    </div>
                    </div>

                    </div>
                            
                     </div>
              )
       }
}

export default SignUpPlan

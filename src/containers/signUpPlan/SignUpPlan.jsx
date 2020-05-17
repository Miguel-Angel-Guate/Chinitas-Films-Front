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
                    
                    <div className="divsline">

                    <div className="lineOne">                   
                      <p>Pay per month</p>
                     <hr></hr>
                     </div>

                     <div className="lineTwo">                   
                     
                     <p>Available in Hd</p>
                     <hr></hr>
                     </div>

                     <div className="lineThree">                   
                     
                     <p>Available in ultra Hd</p>
                     <hr></hr>
                     </div>

                     <div className="lineFour">                   
                     
                     <p>Screen on the same time</p>
                     <hr></hr>
                     </div>

                     <div className="lineFive">                   
                     
                     <p>All the films you would like</p>
                     <hr></hr>
                     </div>
                     <p>lorem ipsum lorem ipsum lorem ipusum lorem ipsum lorem ipsum lorem ipusum <br></br> lorem lorem ipsum lorem ipsum lorem ipusum</p>
                    <div className="containerOfButton">
                     <NavLink to='/signUpPlan/register'><button className="continue">continue</button></NavLink>
                     </div>

                     </div>

                     <div className="footerContainerOfSignUpFirstPage">
                    <div className="callUsContainerOfFooterFromSignUpFirst">
                    <span>Questions? Call us Anytime, anywhere 000000000000000</span>
                    </div>
                    
                    <div className="containerOfFooter">
                    <div className="footerLeft">
                    <li>
                    <ul>Why Chapos is the Best?</ul>
                    <ul>Why Chapos is easy</ul>
                    <ul>Why Chapos </ul>
                    <ul>Why I love chapos</ul>
                    </li>
                    </div>
                    <div className="footerRight">
      
                    <li>
                    <ul>Chapos is easy peace</ul>
                    <ul>Chapos i love it</ul>
                    <ul>Thanks chapos for All</ul>
                    <ul>Answers relevants</ul>
                    </li>
                    </div>
                    </div>
                    <span className="lastSpanOfFooter">China films around the world</span>
                    
                           
                    </div>
                     

                            
                     </div>
              )
       }
}

export default SignUpPlan

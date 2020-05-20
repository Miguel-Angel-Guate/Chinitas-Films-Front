import React, { Component } from 'react'
import './SignUpFirstPage.scss'
import { NavLink } from 'react-router-dom'



export class SignUpFirstPage extends Component {
       render() {
              return (
                     <div className="containerFirstPageSignUp">

                    <div className="headerOfSignUpFirstPage">
                    <NavLink to='/' exact><h1>Chapos Films</h1></NavLink>
                    <NavLink to='/signIn' exact><p>Sign in</p></NavLink>
                    </div>
                    <div className="containerOf">
                    <img className="checkImg" src={require('../../img/check.jpg')} />
                    <p>Step 1 of 3</p>
                    <h2>Choose your plan</h2>
                        
                    <div className="list">
                    <img  className="hiImg" src={require('../../img/check.jpg')}/>
                    <p>Hello world</p>
                    </div>
                    <div className="list">
                    <img  className="hiImg" src={require('../../img/check.jpg')}/>
                    <p>Hello world</p>
                    </div>
                    <div className="list">
                    <img  className="hiImg" src={require('../../img/check.jpg')}/>
                    <p>Hello world</p>
                    </div>
                    <NavLink to='/signup/signUpPlan'><button>watch our plan</button></NavLink>

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

export default SignUpFirstPage

import React from 'react';
import './App.scss';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignIn from './containers/signIn/SignIn'
import Scroll from './components/scroll/Scroll';
import SignUpFirstPage from './containers/SignUpFirstPage/SignUpFirstPage';
import SignUpPlan from './containers/signUpPlan/SignUpPlan';
import RegisterThirdStep from './containers/registerThirdStep/RegisterThirdStep';



function App() {
  return (
    <BrowserRouter>
   
    <Switch>
    <Route path='/' component={Scroll} exact/>
    <Route path='/signIn' component={SignIn} exact/>
    <Route path='/home' component={Scroll} exact/>
    <Route path='/signup' component={SignUpFirstPage} exact />
    <Route path='/signup/signUpPlan' component={SignUpPlan} exact />
    <Route path='/signUpPlan/register' component={RegisterThirdStep} exact />

    </Switch>
   
    </BrowserRouter>
    


  );
}

export default App;

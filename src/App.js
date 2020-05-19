import React from 'react';
import './App.scss';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './containers/signIn/SignIn'
import PrivateZone from './guards/PrivateZone';
import Scroll from './components/scroll/Scroll';
import SignUpFirstPage from './containers/SignUpFirstPage/SignUpFirstPage';
import SignUpPlan from './containers/signUpPlan/SignUpPlan';
import RegisterThirdStep from './containers/registerThirdStep/RegisterThirdStep';
import Home from './containers/home/Home'




function App() {


  return (
    <BrowserRouter>

   
    <Switch>
    <Route path='/' component={Scroll} exact/>
    <Route path='/signIn' component={SignIn} exact/>
    <Route path='/signup' component={SignUpFirstPage} exact />
    <Route path='/signup/signUpPlan' component={SignUpPlan} exact />
    <Route path='/signUpPlan/register' component={RegisterThirdStep} exact />
    <Route path='/home' component={Home} />
    
    
   

    </Switch>
   
    </BrowserRouter>
    


  );
}

export default App;

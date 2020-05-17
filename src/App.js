import React from 'react';
import './App.scss';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignIn from './containers/signIn/SignIn'
import Scroll from './components/scroll/Scroll';
import SignUpFirstPage from './containers/SignUpFirstPage/SignUpFirstPage';


function App() {
  return (
    <BrowserRouter>
   
    <Switch>
    <Route path='/' component={Scroll} exact/>
    <Route path='/signin' component={SignIn} exact/>
    <Route path='/home' component={Scroll} exact/>
    <Route path='/sigupfirstpage' component={SignUpFirstPage} exact />
    </Switch>
   
    </BrowserRouter>
    


  );
}

export default App;

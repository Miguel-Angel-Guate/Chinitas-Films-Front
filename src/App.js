import React from 'react';
import './App.css';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Scroll from './components/scroll/Scroll';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <Scroll />
  
    </BrowserRouter>
  );
}

export default App;

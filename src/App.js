import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from './components/AppNavbar';
import Home from './components/Home'
import About from './components/About'
import Map from './components/Map'
import FoodDiningMap from './components/FoodDiningMap'
import Section from './components/Section'



class App extends Component {
  render(){
    return (
      <React.Fragment>
        
        <Navbar></Navbar>
        <Home></Home>
        <Section
          dark = {true}
          id = "about"
        />
        <About></About>
        <Section
          dark = {true}
          id = "map"
        />
        <Map></Map>
        <FoodDiningMap></FoodDiningMap>
        <Switch>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

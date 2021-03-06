import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import DonationForm from './components/DonationForm';

class App extends Component{
  render(){
    return(
      <div>
        <DonationForm />
      </div>
    );
  }
}

export default hot(module)(App);
import './App.css';
import React, { Component } from 'react';
import Navigaton from "./Components/Navigation/Navigation.js";
import Logo from "./Components/Logo/Logo.js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";



class App extends Component {
  render() {
    return (
      <div>
        <Navigaton />
        <Logo />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  } 
}

export default App;

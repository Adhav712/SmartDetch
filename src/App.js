import './App.css';
import Particles from 'react-particles-js';
import React, { Component } from 'react';
import Navigaton from "./Components/Navigation/Navigation.js";
import Logo from "./Components/Logo/Logo.js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js";
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';

const particlesOptions = {
  size: {
    random: true,
    value: 50,
  },
  move: {
    direction: "none",
    enable: true,
    outMode: "bounce",
    random: true,
    speed: 1,
    straight: false,
  },  
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 5
        }
      },
      number: {
        value: 130,
        density: {
          enable: true,
          value_area: 1600,
        }
      },
    },
}

const app = new Clarifai.App({
  apiKey: ''
 });


class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl: ''
    }
  }
  
onInputchange = (event) => { 
  this.setState({input: event.target.value})
}

onbuttonSubmit =() => {
 this.setState({imageUrl: this.state.input});
  app.models
   .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
   .then(
    function(response){
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err){
      //there was an error
    }
    );
}

  render() {
    return (
      <div>
        <Particles className = 'particles'
          params={particlesOptions}
        />
        <Navigaton />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputchange = {this.onInputchange} 
        onbuttonSubmit = {this.onbuttonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl}  /> 
      </div>
    );
  } 
}

export default App;

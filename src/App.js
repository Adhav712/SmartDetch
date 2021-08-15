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
      imageUrl: '',
      box: {},
    }
  }
  
  Facedetctionbox = (data) =>{
  const facedetch = data.outputs[0].data.regions[0].region_info.bounding_box
  const image  = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
   left_col: facedetch.left_col * width,
   top_row: facedetch.top_row * height,
   right_col: width - (facedetch.right_col * width),
   bottom_row: height - (facedetch.bottom_row * height)   
  }   
} 

displayFaceBox = (box) => {
  console.log(box);
  this.setState({box: box});
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
   .then(response => this.displayFaceBox(this.Facedetctionbox(response)))
   .catch(err => console.log(err))
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
        <FaceRecognition box = {this.state.box} imageUrl={this.state.imageUrl}  /> 
      </div>
    );
  } 
}

export default App;

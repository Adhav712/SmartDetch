import './App.css';
import Particles from 'react-particles-js';
import React, { Component } from 'react';
import Signout from "./Components/Navigations/Signout.js";
import Logo from "./Components/Logo/Logo.js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js";
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import SignIn from './Components/Navigations/SignIn';
import Register from './Components/Navigations/Register.js';


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
  apiKey: 'f158f642d33c40f0bfc1612359c2fc6d'
 });


class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl: '',
      box: {},
      route:'SignIn',
      isSignedIn : 'false'
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
  // console.log(box);
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


 onRouteChange = (route) => {
   if(route === 'Signout'){
      this.setState({isSignedIn: 'false'})
   }else if(route === 'home'){
      this.setState({isSignedIn: 'true'})
   }else if(route === 'Register'){
     this.setState({isSignedIn: 0})
   }
   this.setState({route: route});
 }

  render() {
    return ( 
      <div>
        <Particles className = 'particles'
          params={particlesOptions}
        />
        <Signout isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
        {this.state.route === 'home'
        ?<div>
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputchange = {this.onInputchange} 
            onbuttonSubmit = {this.onbuttonSubmit} />
            <FaceRecognition box = {this.state.box} imageUrl={this.state.imageUrl} /> 
         </div>
        :(
           this.state.route === 'SignIn'
           ?<SignIn onRouteChange = {this.onRouteChange} />
           :<Register onRouteChange = {this.onRouteChange} />
          )
        }
      </div> 
    );
  } 
}

export default App;

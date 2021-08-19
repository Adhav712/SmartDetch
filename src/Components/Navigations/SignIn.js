import React from 'react';
import Particles from 'react-particles-js';
import Smartbrainlogo from './Smartbrainlogo.png'
import { Component } from 'react';
import 'tachyons';
import './SignIn.css'

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
          value: 50,
          density: {
            enable: true,
            value_area: 1600,
          }
        },
      },
  }

class SignIn extends Component{
  

  render(){
    return (
    <div>
     <Particles className = 'particles backgroundcolor'
        params={particlesOptions}
      />
     <div >
      <div className="center">
       <form className="measure">
        <div className="sign_up" >
          <img className = 'image measure' alt ='' src = {Smartbrainlogo} />
          <div className="mt3">
            <input className='input' type='Email' placeholder="EMAIL" />
          </div>
          <div className="mv3">
            <input className='input' type='Password' placeholder="PASSWORD" />
          </div>
            <input className="Signinbutton b ph3 pv2 input-reset ba b--black grow pointer f6 dib" type="submit" value="Sign in"/>
           <div className='Registerline_area'>
              <p>If you don't have a account click here to,</p>
              <input className ="Registerbutton" type = 'button' value = 'Register'/>
           </div>
        </div>
       </form>
      </div>
      <footer className='center'>©SmartDetch, Inc.2021. We respect your Time!</footer>
     </div>
    </div>  
    
    );
  };

}



export default SignIn;
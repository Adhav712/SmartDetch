import React from 'react';
import Particles from 'react-particles-js';
import Smartbrainlogo from './Smartbrainlogo.png'
import 'tachyons';
import './Register.css'


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

const Register= ({onRouteChange}) => {
    return (
    <div>
     <Particles className = 'particles backgroundcolorRegisterpage'
        params={particlesOptions}
      />
     <div >
      <div className="center">
       <form className="measure">
        <div className="sign_up" >
          <img className = 'imageRegisterpage measure' alt ='' src = {Smartbrainlogo} />
          <div className="mt3 names">
            <input className='inputfname' type='name' placeholder="First name" />
            <input className='inputlname' type='name' placeholder="Last name" />
          </div>
          <div className="mt3">
            <input className='input' type='Email' placeholder="Email ID"/>
          </div>
          <div className="mv3">
            <input className='input' type='Password' placeholder="Create a Password" />
          </div>
            <input className="Registerbutton_Signup_page ph3 pv2 input-reset  grow pointer f6 dib" type="submit" value="Register"/>
           <div className='Signin_area'>
              <p className ="signinbutton pointer" onClick = {() => onRouteChange('SignIn')}>Sign in</p> 
              <p className = 'Signinline'>If you already have account</p>   
           </div>
        </div>
       </form>
      </div>
      <footer className='center'>©SmartDetch, Inc.2021. We respect your Time!</footer>
     </div>
    </div>  
    
    );
}
// class SignIn extends Component{
  

//   render(){
    
//   };

// }



export default Register;
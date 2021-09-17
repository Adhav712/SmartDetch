import React from 'react';
import Particles from 'react-particles-js';
import Smartbrainlogo from './Smartbrainlogo.png'
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

class SignIn extends React.Component {
  constructor(){
    super()
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }

  onEmailChange = (event) =>{
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange =(event) => {
    this.setState({signInPassword: event.target.value})
  }
  
  onSubmitSignIn =()=>{
    fetch('http://localhost:3000/signin',{
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if(data === 'success'){
          this.props.onRouteChange('home');
        }
      }) 
  }
  
  render() {
    const {onRouteChange} = this.props;
    return (
      <div>
       <Particles className = 'particles backgroundcolor'
          params={particlesOptions}
        />
       <div >
        <div className="center">
         <div className="measure">
          <div className="sign_in" >
            <img className = 'image measure' alt ='' src = {Smartbrainlogo} />
            <div className="mt3">
              <input onChange = {this.onEmailChange} className='input' type='Email' placeholder="EMAIL" />
            </div>
            <div className="mv3">
              <input onChange = {this.onPasswordChange} className='input' type='Password' placeholder="PASSWORD" />
            </div>
              <input 
                onClick = {this.onSubmitSignIn}
                 className="Signinbutton b ph3 pv2 input-reset ba b--black grow pointer f6 dib" 
                 type="submit" 
                 value="Sign in" 
               />
             <div className='Registerline_area'>
                <p>If you don't have a account click here to,</p>
                  <input 
                   onClick = {() => {onRouteChange('Register')}} 
                    className ="Registerbutton" 
                    type = 'submit' 
                    value = 'Register'
                  />
             </div>
           </div>
          </div>
         </div>
        <footer className='center'>©SmartDetch, Inc.2021. We respect your Time!</footer>
       </div>
      </div>  
      
      );
  }  
}




export default SignIn;
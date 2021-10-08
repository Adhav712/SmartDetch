import React from "react";
import Particles from "react-particles-js";
import Smartbrainlogo from "./Smartbrainlogo.png";
import "tachyons";
import "./Register.css";

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
        blur: 5,
      },
    },
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1600,
      },
    },
  },
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    };
  }

  onFirstNameChange = (event) => {
    this.setState({ firstname: event.target.value });
  };

  onLastNameChange = (event) => {
    this.setState({ lastname: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user) {
          console.log("Sending user data", user);
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          console.log("err");
        }
      });
  };
  render() {
    return (
      <div>
        <Particles
          className="particles backgroundcolorRegisterpage"
          params={particlesOptions}
        />
        <div>
          <div className="center">
            <form className="measure">
              <div className="sign_up">
                <img
                  className="imageRegisterpage measure"
                  alt=""
                  src={Smartbrainlogo}
                />
                <div className="mt3 names">
                  <input
                    onChange={this.onFirstNameChange}
                    className="inputfname"
                    type="name"
                    placeholder="First name"
                  />
                  <input
                    onChange={this.onLastNameChange}
                    className="inputlname"
                    type="name"
                    placeholder="Last name"
                  />
                </div>
                <div className="mt3">
                  <input
                    onChange={this.onEmailChange}
                    className="input"
                    type="Email"
                    placeholder="Email ID"
                  />
                </div>
                <div className="mv3">
                  <input
                    onChange={this.onPasswordChange}
                    className="input"
                    type="Password"
                    placeholder="Create a Password"
                  />
                </div>
                <input
                  onClick={this.onSubmitRegister}
                  className="Registerbutton_Signup_page ph3 pv2 input-reset  grow pointer f6 dib"
                  type="submit"
                  value="Register"
                />
                <div className="Signin_area">
                  <p
                    onClick={() => this.props.onRouteChange("SignIn")}
                    className="signinbutton pointer"
                  >
                    Sign in
                  </p>
                  <p className="Signinline">If you already have account</p>
                </div>
              </div>
            </form>
          </div>
          <footer className="center">
            ©SmartDetch, Inc.2021. We respect your Time!
          </footer>
        </div>
      </div>
    );
  }
}
// class SignIn extends Component{

//   render(){

//   };

// }

export default Register;

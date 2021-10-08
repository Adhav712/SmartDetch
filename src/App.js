import "./App.css";
import Particles from "react-particles-js";
import React, { Component } from "react";
import Signout from "./Components/Navigations/Signout.js";
import Logo from "./Components/Logo/Logo.js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition.js";
import SignIn from "./Components/Navigations/SignIn";
import Register from "./Components/Navigations/Register.js";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
      value: 130,
      density: {
        enable: true,
        value_area: 1600,
      },
    },
  },
};

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "SignIn",
  isSignedIn: "false",
  user: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    console.log("Saving User Data", data);
    this.setState({
      user: {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
    console.log("Saved User data", this.state.user);
  };

  Facedetctionbox = (data) => {
    const facedetch = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left_col: facedetch.left_col * width,
      top_row: facedetch.top_row * height,
      right_col: width - facedetch.right_col * width,
      bottom_row: height - facedetch.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    // console.log(box);
    this.setState({ box: box });
  };

  onInputchange = (event) => {
    this.setState({ input: event.target.value });
  };

  onbuttonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("http://localhost:3000/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((resp) => resp.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }

        this.displayFaceBox(this.Facedetctionbox(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "Signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: "true" });
    }
    // else if(route === 'Register'){
    //   this.setState({isSignedIn: 0})
    // }
    this.setState({ route: route });
  };

  render() {
    return (
      <BrowserRouter>
        <Particles className="particles" params={particlesOptions} />
        <Signout
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        <Route path="/" exact>
          <div>
            <Logo />
            <Rank
              name={this.state.user.firstname}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputchange={this.onInputchange}
              onbuttonSubmit={this.onbuttonSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </div>
        </Route>
        <Route path="/register">
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        </Route>
        <Route path="/login">
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;

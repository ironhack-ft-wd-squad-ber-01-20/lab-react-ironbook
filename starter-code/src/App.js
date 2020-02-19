import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";

import MyUsers from "./students";

class App extends Component {
  state = {
    users: users
  };
  render() {
    return (
      <div className="App">
        <MyUsers users={this.state.users} />
      </div>
    );
  }
}

export default App;

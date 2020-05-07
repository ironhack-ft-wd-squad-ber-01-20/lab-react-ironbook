import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";
import Page from "./components/Page/Page";

class App extends Component {
  state = {
    search: "",
    teacher: false,
    student: false,
    campus: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleTick = (e) => {
    const name = e.target.name;
    console.log(name);
    this.setState({
      [name]: e.target.checked,
    });
  };

  render() {
    return (
      <>
        <h1>IronBook</h1>
        <input
          onChange={this.handleChange}
          type="text"
          name=""
          id=""
          placeholder="search by first or last name"
        />
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="student"
            checked={this.state.student}
            onChange={this.handleTick}
          />
          Student
        </label>
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="teacher"
            checked={this.state.teacher}
            onChange={this.handleTick}
          />
          Teacher
        </label>

        <Page
          users={users}
          search={this.state.search}
          teacher={this.state.teacher}
          student={this.state.student}
        />
      </>
    );
  }
}

export default App;

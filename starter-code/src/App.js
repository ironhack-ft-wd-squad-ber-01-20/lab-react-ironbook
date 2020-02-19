import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";
import Table from "./Table";

class App extends Component {
  state = {
    search: "",
    student: false,
    teacher: false,
    campus: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  /*   handleDropdownChange = event => {
    this.setState({
      [event.target.value]: event.target.value
    });
  }; */

  render() {
    let filteredUsers = users;

    if (this.state.search) {
      filteredUsers = users.filter(person => {
        const fullName = person.firstName + " " + person.lastName;
        if (fullName.toLowerCase().includes(this.state.search.toLowerCase())) {
          return true;
        }
      });
    }

    if (this.state.student) {
      filteredUsers = filteredUsers.filter(person => {
        if (person.role === "student") {
          return true;
        }
      });
    }

    if (this.state.teacher) {
      filteredUsers = filteredUsers.filter(person => {
        if (person.role === "teacher") {
          return true;
        }
      });
    }

    if (this.state.campus) {
      filteredUsers = filteredUsers.filter(person => {
        if (person.campus === this.state.campus) {
          return true;
        }
      });
    }

    console.log(this.state.student);

    return (
      <div className="App">
        <h1>IronBook</h1>
        <div className="search-container">
          <div>
            <input
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              className="searchbar"
              type="text"
              placeholder="Search..."
            ></input>
          </div>
          <div className="checkboxes">
            <input
              type="checkbox"
              name="student"
              id="student"
              checked={this.state.student}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="student">Student</label>
            <input
              type="checkbox"
              name="teacher"
              id="teacher"
              checked={this.state.teacher}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="teacher">Teacher</label>

            <label for="campus">Campus:</label>

            <select name="campus" onChange={this.handleChange}>
              <option value="">Display all</option>
              <option value="Berlin">Berlin</option>
              <option value="Lisbon">Lisbon</option>
              <option value="Paris">Paris</option>
            </select>
          </div>
        </div>
        <Table users={filteredUsers} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>IronBook</h1>
//       <Table users={users} />
//     </div>
//   );
// }

export default App;

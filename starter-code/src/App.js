import React, { Component } from "react";
import "./App.css";
import users from "./users";

class App extends Component {
  state = {
    users: users,
    search: "",
    checkTeacher: true,
    checkStudent: true,
    campus: "",
  };
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      users: users.filter((user) => {
        return (
          user.firstName
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          user.lastName.toLowerCase().includes(event.target.value.toLowerCase())
        );
      }),
    });
  };
  handleStudentCheck = (event) => {
    this.setState({
      checkStudent: event.target.checked,
      users: users.filter((user) => {
        return (
          (user.role === "student" && event.target.checked) ||
          (user.role === "teacher" && this.state.checkTeacher)
        );
      }),
    });
  };
  handleTeacherCheck = (event) => {
    this.setState({
      checkTeacher: event.target.checked,
      users: users.filter((user) => {
        return (
          (user.role === "student" && this.state.checkStudent) ||
          (user.role === "teacher" && event.target.checked)
        );
      }),
    });
  };
  handleCampus = (event) => {
    this.setState({
      campus: event.target.value,
      users: users.filter((user) => {
        return user.campus === event.target.value;
      }),
    });
  };
  render() {
    const users = this.state.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          <td>
            {user.linkedin && (
              <a href={user.linkedin}>
                <img src="./linkedin.png" alt="linkedin" />
              </a>
            )}
          </td>
        </tr>
      );
    });
    return (
      <div className="App">
        <h1>Ironbook</h1>
        <input
          type="text"
          name="searchbar"
          value={this.state.search}
          onChange={this.handleSearch}
          placeholder="Search.."
        ></input>
        <input
          type="checkbox"
          name="student"
          id="student"
          checked={this.state.checkStudent}
          onChange={this.handleStudentCheck}
        />
        <input
          type="checkbox"
          name="teacher"
          id="teacher"
          checked={this.state.checkTeacher}
          onChange={this.handleTeacherCheck}
        />
        <select id="campus" onChange={this.handleCampus}>
          <option value="All">All</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>
        <table>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Link</th>
            </tr>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

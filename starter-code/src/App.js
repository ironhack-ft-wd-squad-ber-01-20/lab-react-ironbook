import React, { Component } from "react";
import "./App.css";
import users from "./users";

class App extends Component {
  state = {
    users: users,
    search: "",
    studentCheck: false,
    teacherCheck: false,
    campusSearch: "",
  };

  handleNameSearch = (event) => {
    console.log("searched", event.target.value);
    this.setState({
      search: event.target.value,
    });
  };

  handleStudentCheckboxChange = (event) => {
    console.log("role", event.target.checked);

    this.setState({
      studentCheck: event.target.checked,
      users: users.filter((user) => {
        if (this.state.studentCheck === false) {
          return user.role === "student";
        } else return users;
      }),
    });
  };

  handleTeacherCheckboxChange = (event) => {
    console.log("teacher role", event.target.checked);
    this.setState({
      teacherCheck: event.target.checked,
      users: users.filter((user) => {
        if (this.state.teacherCheck === false) {
          return user.role === "teacher";
        } else return users;
      }),
    });
  };

  // I can't figure out how to get both students and teachers to render when both boxes are checked

  handleDropDownChange = (event) => {
    this.setState({
      users: users.filter((user) => {
        return user.campus === event.target.value;
      }),
    });
  };

  render() {
    const filteredUsers = this.state.users.filter((user) => {
      //console.log(user);

      if (this.handleNameSearch) {
        return (
          user.firstName
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(this.state.search.toLowerCase())
        );
      }
    });

    const userList = filteredUsers.map((user) => (
      <tr key={user.id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        {user.linkedin ? (
          <td>
            <img src="../linkedin.png" alt="linkedin logo" />
          </td>
        ) : (
          <td></td>
        )}
      </tr>
    ));

    return (
      <div className="App">
        <h1>IronBook</h1>
        <form>
          <label htmlFor="firstName">Search by first or last name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.search}
            onChange={this.handleNameSearch}
          />
          <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacherCheck}
            onChange={this.handleTeacherCheckboxChange}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="student"
            id="role"
            checked={this.state.studentCheck}
            onChange={this.handleStudentCheckboxChange}
          />
          <label htmlFor="campus">Campus</label>
          <select
            value={this.state.campus}
            onChange={this.handleDropDownChange}
          >
            <option value="Berlin">Berlin</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Paris">Paris</option>
          </select>
        </form>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Campus</th>
                <th>Role</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>{userList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;

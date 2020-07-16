import React, { Component } from "react";
import allUsers from "./users.json";
import LinkedIn from "./linkedin.png";
import "./IronBook.css";

class IronBook extends Component {
  state = {
    Users: allUsers,
    Search: "",
    isTeacher: true,
    isStudent: true,
    role: "",
    Campus: "",
  };

  handleSearchChange = (event) => {
    let newState = this.state;
    newState.Search = event.target.value;
    this.updateUsers(newState);
  };

  handleisStudentChange = (event) => {
    let newState = this.state;
    newState.isStudent = event.target.checked;
    this.updateUsers(newState);
  };

  handleisTeacherChange = (event) => {
    let newState = this.state;
    newState.isTeacher = event.target.checked;
    this.updateUsers(newState);
  };

  handleCampusChange = (event) => {
    let newState = this.state;
    newState.Campus = event.target.value;
    this.updateUsers(newState);
  };

  updateUsers = (newState) => {
    if (newState.isStudent && newState.isTeacher) {
      newState.role = "";
    } else if (newState.isStudent) {
      newState.role = "student";
    } else if (newState.isTeacher) {
      newState.role = "teacher";
    } else if (!newState.isStudent && !newState.isTeacher) {
      newState.role = "";
    }
    let newUsers = allUsers.filter((user) => {
      return (
        (user.firstName.toLowerCase().includes(newState.Search) ||
          user.lastName.toLowerCase().includes(newState.Search)) &&
        user.campus.includes(newState.Campus) &&
        user.role.includes(newState.role)
      );
    });

    newState.Users = newUsers;
    this.setState(newState);
  };

  render = () => {
    return (
      <div>
        <h1>IronBook</h1>
        <form>
          <label htmlFor="name">Search</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.Search}
            onChange={this.handleSearchChange}
          />
          <label htmlFor="isTeacher">Teacher</label>
          <input
            type="checkbox"
            name="isTeacher"
            id="isTeacher"
            checked={this.state.isTeacher}
            onChange={this.handleisTeacherChange}
          />
          <label htmlFor="isStudent">Student</label>
          <input
            type="checkbox"
            name="isStudent"
            id="isStudent"
            checked={this.state.isStudent}
            onChange={this.handleisStudentChange}
          />
          <label htmlFor="Campus">Campus</label>
          <select value={this.state.Campus} onChange={this.handleCampusChange}>
            <option value="">All Campuses</option>
            <option value="Berlin">Berlin</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Paris">Paris</option>
          </select>
        </form>
        <table>
          <thead>
            <tr>
              <th>
                <h3>First Name</h3>
              </th>
              <th>
                <h3>Last Name</h3>
              </th>
              <th>
                <h3>Campus</h3>
              </th>
              <th>
                <h3>Role</h3>
              </th>
              <th>
                <h3>Links</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin && (
                    <a href={user.linkedin}>
                      <img src={LinkedIn} alt="logo" />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default IronBook;

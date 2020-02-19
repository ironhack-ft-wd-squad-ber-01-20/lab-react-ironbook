import React, { Component } from "react";
import "./App.css";
import users from "./users";
import linkedInLogo from "./linkedin.png";

const Book = props => {
  return (
    <tr>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.campus}</td>
      <td>{props.user.role}</td>
      {props.user.linkedin && (
        <td>
          <a href={props.user.linkedin}>
            <img src={linkedInLogo} alt="linkedin logo" height="20px" />
          </a>
        </td>
      )}
    </tr>
  );
};

class App extends Component {
  state = {
    users: users,
    search: "",
    teacher: false,
    student: false
  };

  handleChange = event => {
    let searchStr = event.target.value;
    let resultUsers = users.filter(user => {
      return (
        user.firstName.toLowerCase().includes(searchStr.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchStr.toLowerCase())
      );
    });
    this.setState({
      users: resultUsers,
      [event.target.name]: searchStr
    });
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h1>IronBook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="teacher"
            checked={this.state.searchTeachers}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="student"
            checked={this.state.searchStudents}
            onChange={this.handleCheckboxChange}
          />
        </form>
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
          <tbody>
            {this.state.users
              .filter(user => {
                if (
                  this.state.teacher !== this.state.student &&
                  ((this.state.teacher && user.role !== "teacher") ||
                    (this.state.student && user.role !== "student"))
                ) {
                  return false;
                }
                return true;
              })
              .map(user => {
                return <Book user={user} key={user.id} />;
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

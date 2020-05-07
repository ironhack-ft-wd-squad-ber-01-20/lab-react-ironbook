import React, { Component } from "react";
import "./App.css";
import users from "./users.json";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedin from "./linkedin.png";

const usersData = [...users];

class App extends Component {
  state = {
    users: usersData,
    search: "",
    student: true,
    teacher: true,
    campus: "",
  };

  handleChangeSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase(),
      users: users.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(event.target.value) ||
          user.lastName.toLowerCase().includes(event.target.value)
        );
      }),
    });
  };

  handleStudentCheckout = (event) => {
    this.setState({
      student: event.target.checked,
      users: users.filter((user) => {
        return (
          (user.role === "student" && event.target.checked) ||
          (user.role === "teacher" && this.state.teacher)
        );
      }),
    });
  };
  handleTeacherCheckout = (event) => {
    this.setState({
      teacher: event.target.checked,
      users: users.filter((user) => {
        return (
          (user.role === "student" && this.state.student) ||
          (user.role === "teacher" && event.target.checked)
        );
      }),
    });
  };

  handleChangeCampus = (event) => {
    this.setState({
      users: users.filter((user) => {
        return user.campus === event.target.value;
      }),
    });
  };

  render() {
    return (
      <div className="App container">
        <h1>IronBook</h1>
        <div className="container my-3">
          <input
            className="form-control form-control-lg "
            placeholder="Search"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChangeSearch}
          ></input>
          <input
            type="checkbox"
            name="student"
            checked={this.state.student}
            onChange={this.handleStudentCheckout}
          />

          <label className="form-check-label mt-2 mr-5">Student</label>
          <input
            type="checkbox"
            name="teacher"
            checked={this.state.teacher}
            onChange={this.handleTeacherCheckout}
          />
          <label className="form-check-label mt-2 mr-3">Teacher</label>
          <label className="form-check-label mt-2 mr-2">Campus :</label>

          <select
            name="campus"
            onChange={(event) => this.handleChangeCampus(event)}
          >
            <option value="All">All</option>
            <option value="Berlin">Berlin</option>
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisbon</option>
          </select>
        </div>
        <table className="table table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Campus</th>
              <th scope="col">Role</th>
              <th scope="col">Links</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin && (
                    <img className="linkedinImg" src={linkedin} alt="" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

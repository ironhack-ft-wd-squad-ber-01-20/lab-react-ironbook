import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";

class App extends React.Component {
  state = {
    search: "",
    teacher: false,
    student: false,
    usersList: users
  };

  searchName = name => {
    console.log(users);
    this.setState({
      search: name.target.value,
      usersList: users.filter(u => {
        return (
          u.firstName.toLowerCase().includes(name.target.value.toLowerCase()) ||
          u.lastName.toLowerCase().includes(name.target.value.toLowerCase())
        );
      })
    });
  };

  roleCheck = event => {
    this.setState({
      [event.target.name]: event.target.checked,
      usersList: users.filter(user => {
        if (event.target.checked) {
          return user.role === event.target.name;
        } else {
          return user;
        }
      })
    });
  };

  campusSelect = event => {
    console.log(event.target.value);
    this.setState({
      usersList: users.filter(user => {
        return user.campus === event.target.value;
      })
    });
  };

  render() {
    // generation an array of unique cities
    let campusArr = this.state.usersList.map(user => {
      return user.campus;
    });
    let uniqueCampus = [];
    campusArr.forEach(campus => {
      if (uniqueCampus.indexOf(campus) === -1) {
        uniqueCampus.push(campus);
      }
    });

    return (
      <div className="App">
        <h1>IronBook</h1>

        <input
          type="search"
          name="search"
          value={this.state.search}
          onChange={this.searchName}
        ></input>
        <label htmlFor="teacher">Teacher</label>
        <input
          type="checkbox"
          name="teacher"
          value={this.state.teacher}
          onChange={this.roleCheck}
        ></input>
        <label htmlFor="student">Student</label>
        <input
          type="checkbox"
          name="student"
          value={this.state.student}
          onChange={this.roleCheck}
        ></input>
        <label htmlFor="campus">Campus</label>
        <select id="cars" name="campus" onChange={this.campusSelect}>
          {uniqueCampus.map(campus => {
            return <option value={campus}>{campus}</option>;
          })}
        </select>

        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Campus</td>
              <td>Role</td>
              <td>Links</td>
            </tr>
          </thead>
          <tbody>
            {this.state.usersList.map(user => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                  <td>{user.linkedin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;

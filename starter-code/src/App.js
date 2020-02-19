import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import usersJSON from "./users";

const Users = props => {
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Campus</th>
        <th>Role</th>
        <th>Links</th>
      </thead>
      <tbody>
        {props.users.map(user => {
          return (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td>
                {user.linkedin ? (
                  <a href={user.linkedin}>
                    <img
                      className="linkedin-icon"
                      src="https://www.stickpng.com/assets/images/58e91afdeb97430e81906504.png"
                      alt="linkedin-icon"
                    ></img>
                  </a>
                ) : (
                  ""
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

class App extends Component {
  state = {
    users: usersJSON,
    query: "",
    student: false,
    teacher: false
  };

  handleQuery = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);

    let filteredResults = usersJSON.filter(user => {
      return (
        user.firstName.includes(this.state.query) ||
        user.lastName.includes(this.state.query)
      );
    });

    // console.log(filteredResults);
    this.setState({ users: filteredResults });
  };

  handleRole = event => {
    let key = event.target.name;

    this.setState({ [key]: !this.state[key] }, () => {
      console.log(this.state[key]);

      let renderedList;

      if (this.state[key]) {
        renderedList = usersJSON.filter(user => {
          return user.role.includes(key);
        });
      } else {
        renderedList = usersJSON;
      }

      this.setState({ users: renderedList });
    });
  };

  handleCampus = event => {
    let filterCampus = usersJSON.filter(user => {
      return user.campus.includes(event.target.value);
    });

    this.setState({ users: filterCampus });
  };

  render() {
    let campuses = [];

    usersJSON.forEach(user => {
      if (campuses.indexOf(user.campus) === -1) {
        campuses.push(user.campus);
      }
    });

    console.log(campuses);

    return (
      <div className="App">
        <form>
          {/* Query */}
          <input
            className="query-input"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleQuery}
          />

          {/* Student checkbox */}
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleRole}
          />
          <label htmlFor="student">Student</label>

          {/* Teacher checkbox */}
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleRole}
          />
          <label htmlFor="student">Teacher</label>

          {/* Country dropdown */}
          <select id="campus" name="campus" onChange={this.handleCampus}>
            <option value="">Select campus</option>
            {campuses.map(campus => {
              return <option value={campus}>{campus}</option>;
            })}
          </select>
        </form>
        <h1>IronBook</h1>
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;

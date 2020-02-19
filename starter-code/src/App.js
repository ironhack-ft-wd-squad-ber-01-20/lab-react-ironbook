import React from "react";
import logo from "./logo.svg";
import "./App.css";
import usersJSON from "./users";

class App extends React.Component {
  state = {
    users: usersJSON.slice(),
    searchText: "",
    isStudent: true,
    isTeacher: true
  };

  handleCheckboxCheck = event => {
    // let filteredRole;
    // if (event.target.checked) {
    //   filteredRole = usersJSON.filter(user => {
    //     return user.role === "teacher";
    //   });
    // } else {
    //   filteredRole = usersJSON;
    // }

    this.setState({
      [event.target.name]: event.target.checked
      // users: filteredRole
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let filteredUser = this.state.users.filter(user => {
      const nameMatch =
        user.firstName.includes(this.state.searchText) ||
        user.lastName.includes(this.state.searchText);

      if (this.state.isStudent) {
        return user.role.includes("student") && nameMatch;
      }

      if (this.state.isTeacher) {
        return user.role.includes("teacher") && nameMatch;
      }
    });

    return (
      <div>
        <h1>IronBook</h1>
        <form>
          <label htmlFor=""></label>
          <input
            type="text"
            onChange={this.handleChange}
            name="searchText"
            value={this.state.searchText}
          />
          <label htmlFor="">Student</label>
          <input
            type="checkbox"
            name="isStudent"
            checked={this.state.isStudent}
            onChange={this.handleCheckboxCheck}
          />
          <label htmlFor="">Teacher</label>
          <input
            type="checkbox"
            name="isTeacher"
            checked={this.state.isTeacher}
            onChange={this.handleCheckboxCheck}
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
            {filteredUser.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                  <td>{user.links}</td>
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

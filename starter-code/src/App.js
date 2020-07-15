import React, { Component } from "react";
import "./App.css";
import users from "./users";

class App extends Component {
  state = {
    users: users,
    search: "",
  };

  handleChange = (event) => {
    //console.log(event.target.value)

    this.setState({ search: event.target.value });

    console.log(this.state.search);
  };

  render() {
    let filteredIronhackers = this.state.users.filter((Ironhacker) => {
      if (this.state.search === "") {
        return users;
      } else if (
        Ironhacker.firstName === this.state.search ||
        Ironhacker.lastName === this.state.search
      ) {
        return Ironhacker;
      }
    });

    const userList = users.map((user) => {
      const { id, firstName, lastName, campus, role, linkedin } = user;
      return (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{campus}</td>
          <td>{role}</td>
          {linkedin ? (
            <td>
              <img src="/linkedin.png" alt="linkedin logo" />
            </td>
          ) : (
            <td></td>
          )}
        </tr>
      );
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>IronBook</h1>
          <input
            type="text"
            name="Search"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search.."
          />
          <div className="table">
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
      </form>
    );
  }
}

export default App;

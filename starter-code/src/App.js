import React, { Component } from 'react';
// import logo from './logo.svg';
import users from "./users";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: users
    }
  }
  render() {
    return (
      <div className="App">
        <h1>IronBook</h1>
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
            {this.state.users.map(e =>
              <tr key={e.id}>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.campus}</td>
                <td>{e.role}</td>
                <td><a href={e.linkedin}>{e.linkedin}</a></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import users from "./users";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: users,
      search: ''
    }
  }
  

  handleNameChange = event => {
    console.log(event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const filterUser = this.state.users.filter((name) => {
      if(this.handleNameChange) {
        return (
          name.firstName.toLowerCase().includes(this.state.search.toLowerCase()) ||
          name.lastName.toLowerCase().includes(this.state.search.toLowerCase())
        );
      }
    })
    return (
      <div className="App">
        <h1>IronBook</h1>

        <form>
          <label htmlFor="firstName" >Search for First or Last Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.search}
            onChange={this.handleNameChange}
          />
        </form>


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
            {filterUser.map(e =>
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

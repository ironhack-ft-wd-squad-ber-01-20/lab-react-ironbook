import React, { Component } from 'react';
// import logo from './logo.svg';
import users from "./users";
import './App.css';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: users,
      search: '',
      student: false,
      teacher: false
    }
  }

  handleNameChange = event => {
    console.log(event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render() {

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
          <label htmlFor="student">Student </label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleChange}
          />
          <label htmlFor="teacher">Teacher </label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleChange}
          />

        </form>

        <table>
          <TableHead />
          <TableBody users={this.state.users} search={this.state.search} handleNameChange={this.handleNameChange} />
        </table>
      </div>
    );
  }
}

export default App;

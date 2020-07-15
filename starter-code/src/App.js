import React, { Component } from 'react';
// import logo from './logo.svg';
import users from "./users";
import './App.css';

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
    const filterUser = this.state.users.filter((name) => {
      if (this.handleNameChange) {
        if (this.state.student && !this.state.teacher) {
          return (name.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.state.search.toLowerCase())) && name.role === 'student'
        } else if (this.state.teacher && !this.state.student) {
          return (name.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.state.search.toLowerCase())) && name.role === 'teacher'
        } else {
          return name.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.state.search.toLowerCase())
        }
        // return (
        //   (name.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.state.search.toLowerCase()))  
        // );
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

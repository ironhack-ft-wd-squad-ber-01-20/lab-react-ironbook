import React, { Component } from 'react';
import users from "./users";
import "./App.css";

export default class App extends Component {
  state = {
    users,
    search: '',
    student: false,
    teacher: false
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const newUsers = users.filter(user => {
      if (this.state.student && !this.state.teacher) {
        return (user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())) && user.role === 'student'
      } else if (this.state.teacher && !this.state.student) {
        return (user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())) && user.role === 'teacher'
      } else {
        return user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })

    this.setState((state, props) => ({
      users: newUsers,
      search: '',
    }))
  }

  render() {
    const tableRow = this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          {user.linkedin && <td><a href={user.linkedin}><img src="./linkedin.png" alt="linkedin"/></a></td>}
        </tr>
      )
    })
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <label htmlFor="student">Student</label>
          <input 
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleChange}
          />
          <label htmlFor="teacher">Teacher</label>
          <input 
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <table>
          <thead>
            <tr>
              <td>First name</td>
              <td>Last name</td>
              <td>Campus</td>
              <td>Role</td>
              <td>Links</td>
            </tr>
          </thead>
          <tbody>
            {tableRow}
          </tbody>
      </table>
    </>
    )
  }
}
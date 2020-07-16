import React from 'react';
import logo from './linkedin.png';
import users from "./users";
import './App.css';

class App extends React.Component {
  state = {
    data: users,
    query: '',
    teacher: false,
    student: false
  }

  filterNames = (arr, query) => {
    return users.filter(item => item.firstName.toLowerCase().includes(query.toLowerCase()) || item.lastName.toLowerCase().includes(query.toLowerCase()))
  }

  filterRoles = (checked, name) => {
    if(checked) return users.filter(user => user.role.toLowerCase() == name);
    return users
  }

  handleChange = (event) => {
    this.setState(state => ({
      query: event.target.value,
      data: this.filterNames(state.data, event.target.value)
    }))
  }

  filterCheckbox = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    this.setState(state => ({
      [name]: !state[name],
      data: this.filterRoles(checked, name)
     }))
  }

  render() {
    const list = this.state.data.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.firstName }</td>
          <td>{ item.lastName }</td>
          <td>{ item.campus }</td>
          <td>{ item.role }</td>
          <td>
          {item.linkedin && <a href={item.linkedin}><img style={{ width: '20px' }} src={logo} alt="" /></a>}
          </td>
        </tr>
      )
    })
    return (
      <div>
        <h1>IronBook</h1>
        <input
            type="text"
            name="search"
            id="search"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.filterCheckbox}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.filterCheckbox}
          />
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
              { list }
            </tbody>
        </table>
      </div>
    )
  }
}

export default App;

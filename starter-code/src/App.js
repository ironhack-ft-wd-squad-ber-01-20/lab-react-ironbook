import React from 'react';
import logo from './linkedin.png';
import users from "./users";
import './App.css';

class App extends React.Component {
  state = {
    data: users,
    query: ''
  }

  filterNames = (arr, query) => {
    console.log(arr);
    return users.filter(item => item.firstName.toLowerCase().includes(query.toLowerCase()))
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState(state => ({
      query: value,
      data: this.filterNames(state.data, value)
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

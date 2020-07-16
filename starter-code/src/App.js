import React, { Component } from 'react'
import './App.css';
import users from './users.json'






class App extends Component {
  state = {
    users: users,
    search: ""
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({search: event.target.value})
    console.log(this.state.search)
  }

  render() {
    let filteredUsers = this.state.users.filter((person) => {
      if (this.state.search ==="") {
        return users;
      } else if (
        person.firstName.toLowerCase().includes(this.state.search)  || 
        person.lastName.toLowerCase().includes(this.state.search)

        //could also work to just find input
        //person.firstName === this.state.search) instead of person.firstName.toLowerCase().includes(this.state.search) dynamically updating for search input
      ) {
        return person;
      }
    });
    const userList =
    filteredUsers.map((user) => {
         const {firstName, lastName, campus, role, linkedin} =user;
        return(
        <>
          <tr>
            <td> {firstName} </td>
            <td> {lastName} </td>
            <td> {campus} </td>
            <td> {role} </td>
            <td> {linkedin} </td>
          </tr>
        </>
        )
      }
      )

    return (


      <div>
        <h1>Iron Book</h1>
        <form >
        <input
        id="search"
        type="text"
        name="search"
        value= {this.state.search}
        onChange={this.handleChange}
        />
      </form>
      

        <table>
          <thead>
            <tr>
              <th> First Name</th>
              <th> Last Name </th>
              <th> Campus </th>
              <th> Role </th>
              <th> LinkedIn </th>

            </tr>
          </thead>

          <tbody>
            {userList}
          </tbody>
        </table>
      </div>
    )




  }
}

export default App;

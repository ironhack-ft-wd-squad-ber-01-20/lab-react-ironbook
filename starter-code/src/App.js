import React, { Component } from 'react'
import './App.css';
import users from './users.json'






class App extends Component {
  state = {
    users: users,
    search: ""
  }

  handleChange = event => {
    //console.log(event.target.value)
    this.setState({search: event.target.value})
    console.log(this.state.search)
  }

  render() {
    let arr = this.state.users.filter((person) => {
      if (this.state.search ==="") {
        return users;
      } else if (
        person.firstName === this.state.search || person.lastName ===this.state.search
      ) {
        return person;
      }
    });
    const userList =
      users.map(user => {
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
        type="text"
        name="Search"
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

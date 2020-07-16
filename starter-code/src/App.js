import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import users from './users';
import Ironusers from './Ironusers';


class App extends Component {

  state = {
    usersarr: users,
    search: '',
    teacher: true,
    student: true,
  }

  handleChange = async (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    await this.setState({
      [name]: value
    })
    this.handleSearch()
  }

  handleSearch = () => {
    this.setState((state, props) => ({
     usersarr: users.filter((user) => 
       user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())
     )
    }))
    }

  handleTeacher = async (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.checked;
    console.log(value)
    await this.setState({
      [name]: value
    })

    if (value){
    this.setState((state, props) => ({
      usersarr: users.filter((user) => 
        user.role === "teacher"
      )
     }))
    } else {
      this.setState((state, props) => ({
        usersarr:  users.filter((user) => 
        user.role !== "teacher"
      )
        
       }))
    }

  }


  render(){
    console.log(users)

    return(
      
  <>
     <h1>IronBook</h1>

    
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.search} 
            onChange={this.handleChange}
          />
          <label htmlFor = "teacher">Teacher</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleTeacher}
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
       
  {this.state.usersarr.map(user => {
  return (

    <Ironusers key={user.id} user={user} />
  );
  })}
      </tbody>
    </table>
  </>
    )
  }
}

export default App;

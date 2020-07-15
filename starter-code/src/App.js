import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import users from './users.json';
import { render } from '@testing-library/react';


class App extends Component{
    state={
      userBase:users, 
      search:"",
      teacherCheck: true, 
      studentCheck: true, 
    }

    handleSearch = event => {
      const filteredUser=users.filter((user)=>
          user.firstName.toLowerCase().includes(event.target.value) ||
          user.lastName.toLowerCase().includes(event.target.value)
        )
      this.setState({
        search: event.target.value,  
        userBase: filteredUser, 
        })
    }

    handleStudentChange = event=> {
      const filteredStudent=users.filter((user)=>
        (user.role==="student" && event.target.checked) 
    
      )
      this.setState({
        studentCheck:event.target.checked, 
        userBase:filteredStudent, 
      })
    }



    handleTeacherChange = event => {
      const filteredTeacher=users.filter((user)=>
      (user.role==="teacher" && event.target.checked)
    )
      this.setState({
        teacherCheck: event.target.checked, 
        userBase: filteredTeacher, 
      })
    }

    render() {
    return (
      <main>
        <h1>IronBook</h1>

          <label htmlFor="search">Search:</label>
          <input 
          type="text"
          name="searchbar"
          value={this.state.search}
          onChange={this.handleSearch}
          placeholder="type in here"/>
          <br/>

          <label htmlFor="students">Students</label>
          <input
          type="checkbox"
          name="studentCheck"
          id="studentCheck"
          checked={this.state.studentCheck}
          onChange={this.handleStudentChange}/>

          <label htmlFor="teachers">Teachers</label>
          <input
          type="checkbox"
          name="teacherCheck"
          id="teacherCheck"
          checked={this.state.teacherCheck}
          onChange={this.handleTeacherChange}/>
          

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
          {this.state.userBase.map((user) => {
          return(
            <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>{user.linkedin && (<a href={user.linkedin}>
                    <img src="./linkedin.png" alt="linkedin logo" style={{width: "15px"}}/>
                </a>)}</td>
            </tr>
          ); 
    })} 
          </tbody>
        </table>
      </main>
    )}
}

export default App;

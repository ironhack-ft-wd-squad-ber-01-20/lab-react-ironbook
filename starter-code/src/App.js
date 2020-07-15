import React, { Component } from 'react';
import './App.css';
import users from "./users";

class App extends Component {
  

  render() {
    


  const userList = users.map(user => {
     const {id, firstName, lastName, campus, role, linkedin} = user;
     return(
    <tr key={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{campus}</td>
      <td>{role}</td>
      {linkedin ? (
        <td>
          <img src="/linkedin.png" alt="linkedin logo" />
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  )});
  

      return (
      
      <div>
      <h1>IronBook</h1>
      
      <div className = "table">
      
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
        {userList}
        </tbody>
      </table>
    
      </div>
      </div>
      );
  }
      
}

export default App;
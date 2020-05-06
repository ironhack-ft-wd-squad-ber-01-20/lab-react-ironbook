import React, { Component } from 'react';
import './App.css';
import users from "./users";
import Students from './Students';

class App extends Component {
  state={
    users:users,
   search:'',
   teacher:false,
   student:false,
   campus:''
  };

  handleSearchField=(event)=>{
   this.setState({
     search:event.target.value,
     users:this.state.users.filter((user)=>{
       return (
         user.firstName.toLowerCase()
         .includes(event.target.value)||user.lastName.toLowerCase().includes(event.target.value)
       );
     }),
   });
  };

  handleTeacherChange=(event)=>{
    this.setState({
      teacher:event.target.value,
      users:this.state.users.filter((user)=>{
        return(
          user.role==="teacher"
        );
      }),
    });
  };
 
handleStudentChange=(event)=>{
  this.setState({
    student:event.target.value,
    users:this.state.users.filter((user)=>{
      return(
        user.role==='student'
      );
    }),
  });
};

handleSubmit=event=>{
  this.setState({
campus:event.target.value,
users:this.state.users.filter((user)=>{
  return(
    user.campus===event.target.value
  );
}),
  });
};
    
  
  render(){
   
  return (
    <div >
    <label>search by name</label>
    <input
    type='text'
    name='search'
    id='search'
    value={this.state.search}
    onChange={this.handleSearchField}
    />
    <label>all teachers</label>
    <input
      type="checkbox"
      name="teacher"
      id="teacher"
      value={this.state.teacher}
      onChange={this.handleTeacherChange}
    />
    <label>all students</label>
    <input
      type="checkbox"
      name="student"
      id="student"
      value={this.state.student}
      onChange={this.handleStudentChange}
    />

  
    <select onChange={this.handleSubmit}>
      <option value="Paris">Paris</option>
      <option value="Lisbon">Lisbon</option>
      <option value="Berlin">Berlin</option>
    </select>
  

<table className="App">
<thead>
<tr>
    <td> <strong>First Name</strong></td>
    <td><strong>Last Name</strong></td>
    <td><strong>Campus</strong></td>
    <td><strong>Role</strong></td>
    <td><strong>Links</strong></td>
  </tr>
</thead>

<Students users={this.state.users}/>

 
</table>
</div>
  );
}
}

export default App;

import React, { Component } from 'react';
import users from './users.json';

class UsersList extends Component {
    state = {
        search : "",
        users : users,
        student: true,
        teacher : true,
        selectInputValue : ""
    }
    handleSearchInput = (event) => {
        this.setState({
          search: event.target.value,
          users: users.filter((user) => {
            return (
              user.firstName.toLowerCase()
              .includes(event.target.value) ||
              user.lastName.toLowerCase()
              .includes(event.target.value)
            );
          }),
        });
      };
      handleStudentCheck = (event) => {
        this.setState({
          student: event.target.checked,
          users: users.filter((user) => {
            return (
              (user.role === "student" && event.target.checked) ||
              (user.role === "teacher" && this.state.teacher)
            );
          }),
        });
      };
      handleTeacherCheck = (event) => {
        this.setState({
          teacher: event.target.checked,
          users: users.filter((user) => {
            return (
              (user.role === "student" && this.state.student) ||
              (user.role === "teacher" && event.target.checked)
            );
          }),
        });
      };
      handleChange = (event) => {
        this.setState({
            users:users.filter((user) =>{
                return user.campus === event.target.value
            })
        }
        );
      }
    render() {
        const users = this.state.users.map(user => {
            return (
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                       <td>{user.lastName}</td>
                       <td>{user.campus}</td>
                       <td>{user.role}</td>
                       <td>{user.linkedin && <img style= {{width : "1rem"}}src="./linkedin.png" alt="linkedin" />}</td>
                    </tr>
            )}
        )
        return (  
            <div>
             <form >
               <label>Title:</label>
               <input type="text" name="search" value={this.state.search} onChange={this.handleSearchInput} />     
               <input type="checkbox" name="student" checked={this.state.student} onChange = {this.handleStudentCheck} /><label>Student</label>
               <input type="checkbox" name="teacher" checked={this.state.teacher}  onChange = {this.handleTeacherCheck}/><label>Profesor</label>
               <label>Campus</label>
             <select name="selectInputValue" value={this.state.selectInputValue} onChange={e => this.handleChange(e)} >
             <option value={this.state.selectInputValue}>{this.state.selectInputValue}</option>
            <option value="Berlin">Berlin</option>
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisboa</option>
            </select>
           </form>
        <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Campus</th>
                <th>Role</th>
                <th>Link</th>
            </tr>
            {users}
        </tbody>
        </table>
        </div>
        )
    }
}
  
  export default UsersList;



    
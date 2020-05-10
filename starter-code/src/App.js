import React, { Component } from "react";
import "./App.css";
import users from "./users.json";
import IronBook from "./components/IronBook.js"
import linkedin from "./linkedin.png";

const usersData = [...users];

class App extends Component {
  state = {
    users: usersData,
    search: "",
    student: true,
    teacher: true,
    campus: "",
  };

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleStudent = (event) => {
    this.setState({
      student: event.target.true,
    });
  };

  handleTeacher = (event) => {
    this.setState({
      teacher: event.target.true,
    });
  };

  handleCampus = (event) => {
    this.setState({
      campus: event.target.value,
    });
  };




  render() {
 
    const searchFilter = (user) =>
    user.firstName
      .toLowerCase()
      .includes(this.state.search.toLowerCase()) ||
    user.lastName.toLowerCase().includes(this.state.search.toLowerCase());

    const student = (user) => {
      if (this.state.student) {
        return user.role === "student";
      } else return false;
    };

    const teacher = (user) => {
      if (this.state.teacher) {
        return user.role === "teacher";
      } else return false;
    };

    const campus = (city) => {
      return city.campus.includes(this.state.campus);
    };


    const filtered = users.filter(
      (user) =>
        searchFilter(user) &&
        campus(user) &&
        (student(user) || teacher(user))
    );

    





    return (
      <div>
       <h1>IronBook</h1>
       <form>
         <input type="text"
          name="search"
           id="search" 
           value = {this.state.search}
           onChange={this.handleSearch}
          />
         </form>
         <form>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.handleStudent}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.handleTeacher}
          />
          <label htmlFor="teacher">Teacher</label>
          
        <select id="campus">
        <option value="volvo">Berlin</option>
        <option value="saab">Lisbon</option>
        <option value="opel">Paris</option>
        </select>
        </form>
      
       
          <IronBook users ={this.state.users}/>
         



      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import logo from "./logo.svg";
import linkedin from "./linkedin.png";
import "./App.css";
import users from "./users";
import User from "./Component/User";
import Search from "./Component/Search";

// function App() {
//   return <User />;
// }
class App extends Component {
  state = {
    users: users,
    search: "",
    teacher: false,
    student: false,
    campus: "All",
  };

  // handleChange = (event) => {
  //   this.setState({
  //     search: event.target.value,
  //   });
  // };
  searchQuery = (search) => {
    this.setState({
      search: search,
    });
  };

  searchTeacher = (teacher) => {
    console.log(teacher);
    this.setState({
      teacher: teacher,
    });
  };

  searchStudent = (student) => {
    console.log(student);
    this.setState({
      student: student,
    });
  };

  searchCampus = (campus) => {
    console.log(campus);
    this.setState({
      campus: campus,
    });
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          searchQuery={this.searchQuery}
          searchTeacher={this.searchTeacher}
          searchStudent={this.searchStudent}
          teacher={this.state.teacher}
          student={this.state.student}
          campus={this.state.campus}
          searchCampus={this.searchCampus}
        />
        <User
          users={this.state.users}
          search={this.state.search}
          teacher={this.state.teacher}
          campus={this.state.campus}
          student={this.state.student}
        />
      </div>
    );
  }
}

export default App;

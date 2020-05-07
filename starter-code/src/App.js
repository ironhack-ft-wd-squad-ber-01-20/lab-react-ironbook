import React, { Component } from "react";
import "./App.css";
import users from "./users.json";

class App extends Component {
  state = {
    search: "",
    userBase: users,
    studentCheck: true,
    teacherCheck: true,
    campi: [...users].map((item) => item.campus),
  };

  filterSearch = (event) => {
    this.setState({
      search: event.target.value,
      userBase: users.filter(
        (item) =>
          item.firstName.toLowerCase().includes(event.target.value) ||
          item.lastName.toLowerCase().includes(event.target.value)
      ),
    });
  };

  toggleStudentCheck = (event) => {
    this.setState({
      studentCheck: event.target.checked,
      userBase: users.filter((item) => {
        return (
          (item.role === "student" && event.target.checked) ||
          (item.role === "teacher" && this.state.teacherCheck)
        );
      }),
    });
  };

  toggleTeacherCheck = (event) => {
    this.setState({
      teacherCheck: event.target.checked,
      userBase: users.filter((item) => {
        return (
          (item.role === "teacher" && event.target.checked) ||
          (item.role === "student" && this.state.studentCheck)
        );
      }),
    });
  };

  campusCheck = (event) => {
    //console.log(event.target.value);
    if (event.target.value === "all") {
      this.setState({
        userBase: users,
      });
    } else {
      this.setState({
        userBase: users.filter((item) => item.campus === event.target.value),
      });
    }
  };

  render() {
    let campooses = [...new Set(this.state.campi)].map((campus) => {
      return (
        <option value={campus} key={campus}>
          {campus}
        </option>
      );
    });

    return (
      <div className="App">
        <h1>IronBook</h1>

        <input
          type="text"
          value={this.state.search}
          onChange={this.filterSearch}
        />
        <div className="controlPanel">
          <label>Show students</label>
          <input
            type="checkbox"
            checked={this.state.studentCheck}
            onChange={this.toggleStudentCheck}
          />
          <label>Show teachers</label>
          <input
            type="checkbox"
            checked={this.state.teacherCheck}
            onChange={this.toggleTeacherCheck}
          />
          <select onChange={this.campusCheck}>
            <option value="all" key="all">
              all campi
            </option>
            {campooses}
          </select>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Campus</td>
                <td>Role</td>
                <td>Links</td>
              </tr>
            </thead>
            <tbody>
              {this.state.userBase.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.campus}</td>
                    <td>{item.role}</td>
                    <td>
                      <a href={item.linkedin}>
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import users from "./users";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";
import User from "./Components/User.js";
import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Select from "react-select";

export default class App extends Component {
  state = {
    filter: "",
    isStudent: false,
    isTeacher: false,
    campus: "",
  };
  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onCampusChange = (p) => {
    this.setState({
      campus: p.label,
    });
  };
  render() {
    const campus = [...new Set(users.map((item) => item.campus))].map(
      (x, i) => ({
        label: x,
        value: i,
      })
    );
    let filtredUsers = users.filter((item) => {
      return item.firstName
        .toLowerCase()
        .startsWith(this.state.filter.toLowerCase());
    });
    if (this.state.isStudent) {
      filtredUsers = filtredUsers.filter((item) => {
        return item.role === "student";
      });
    }
    if (this.state.isTeacher) {
      filtredUsers = filtredUsers.filter((item) => {
        return item.role === "teacher";
      });
    }
    if (this.state.campus) {
      filtredUsers = filtredUsers.filter((item) => {
        return item.campus === this.state.campus;
      });
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Iron Books</p>
        </header>
        <main>
          <FormGroup style={{ width: "50%", margin: "2rem 15rem" }}>
            <Label for="exampleSearch">Search</Label>
            <Input
              type="text"
              name="filter"
              id="exampleSearch"
              onChange={this.onChange}
              placeholder="search placeholder"
            />
            <Label check style={{ marginRight: "50px" }}>
              <Input
                type="checkbox"
                name="isStudent"
                onChange={this.onChange}
              />
              Student
            </Label>
            <Label check style={{ marginRight: "50px" }}>
              <Input
                type="checkbox"
                name="isTeacher"
                onChange={this.onChange}
              />
              Teacher
            </Label>

            <Select
              options={campus}
              onChange={(values) => this.onCampusChange(values)}
            />
          </FormGroup>
          <Table dark hover>
            <thead>
              <tr>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Compus</th>
                <th>Role</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {filtredUsers.map((x) => (
                <User key={x.id} {...x} />
              ))}
            </tbody>
          </Table>
        </main>
      </div>
    );
  }
}

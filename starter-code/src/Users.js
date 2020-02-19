import React, { Component } from "react";
import users from "./users.json";

const User = props => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <p>{props.data.firstName}</p>
        </td>
        <td>
          <p>{props.data.lastName}</p>
        </td>
        <td>
          <p>{props.data.campus}</p>
        </td>
        <td>
          <p>{props.data.role}</p>
        </td>
        <td>
          <p>
            {props.data.linkedin ? (
              <img width="20px" src="./linkedin.png" alt="" />
            ) : null}
          </p>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default class Users extends Component {
  state = {
    users: users,
    firstName: "",
    lastName: "",
    campus: "",
    linkedin: "",
    teacher: true,
    student: true
  };

  handleChange = event => {
    console.log(event.target.value);
    let filteredUser = users.filter(elem => {
      if (
        elem.firstName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        elem.firstName.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return true;
      }
    });
    this.setState({
      users: filteredUser
    });
  };

  handleCheckboxChange = event => {
    const name = event.target.name;
    const checked = event.target.checked;
    this.setState(
      {
        [name]: checked
      },
      () => console.log(this.state)
    );
  };

  render() {
    const filteredList = this.state.users.filter(user => {
      return this.state[user.role];
    });
    return (
      <div>
        <h1>IronBook</h1>
        <div>
          <div>
            <label htmlFor="">Search by Name</label>
            <input onChange={this.handleChange}></input>
            <label htmlFor="role">{this.state.role}?</label>
            <input
              type="checkbox"
              name="teacher"
              checked={this.state.teacher}
              onChange={this.handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="student"
              checked={this.state.student}
              onChange={this.handleCheckboxChange}
            />
          </div>
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
              {filteredList.map(user => {
                return <User key={user.id} data={user} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

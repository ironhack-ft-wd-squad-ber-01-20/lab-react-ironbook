import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";

const User = props => {
  const user = props.user;
  return (
    // {props.users.map(user => {
    // return (
    <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.campus}</td>
      <td>{user.role}</td>
      <td>{user.linkedin}</td>
    </tr>

    // })}
  );
};

class App extends React.Component {
  state = {
    userList: users,
    search: "",
    checked: false
  };
  //デフォルト

  //Iteration 2
  searchedName = event => {
    const { name, value } = event.target;
    //event.target.name（inputのname）とevent.target.value(=サーチフィールドの中)
    this.setState({
      [name]: value,
      userList: users.filter(user => {
        return (
          user.firstName.toUpperCase().startsWith(value.toUpperCase()) ||
          user.lastName.toUpperCase().startsWith(value.toUpperCase())
        );
      })
    });
  };

  //Iteration 3 for students
  filteredStudent = event => {
    //console.log(event.target.checked);

    if (event.target.checked) {
      let students = users.filter(user => {
        return user.role === "student";
      });
      this.setState({
        userList: students
      });
    } else {
      this.setState({
        userList: users
      });
    }
  };

  //Iteration 3 for teachers
  filteredTeacher = event => {
    //console.log(event.target.checked);

    if (event.target.checked) {
      let teachers = users.filter(user => {
        return user.role === "teacher";
      });
      this.setState({
        userList: teachers
      });
    } else {
      this.setState({
        userList: users
      });
    }
  };

  /* this.setState({
    [event.target.name]: event.target.checked
  }); */

  render() {
    const filteredList = this.state.userList.map(user => <User user={user} />);
    return (
      <div className="App">
        <h1>IronBook</h1>
        <input
          onChange={this.searchedName}
          name="search"
          value={this.state.search}
        />
        <input type="checkbox" name="checked" onChange={this.filteredStudent} />
        <label htmlFor="">Student</label>
        <input type="checkbox" name="checked" onChange={this.filteredTeacher} />
        <label htmlFor="">Teacher</label>
        <label htmlFor="">Campus:</label>
        <select name="" id="">
          <option value="">Berlin</option>
          <option value="">Paris</option>
          <option value="">Lisbon</option>
        </select>

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
          <tbody>{filteredList}</tbody>
        </table>
      </div>
    );
  }
}

export default App;

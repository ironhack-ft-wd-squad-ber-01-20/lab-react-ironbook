import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import usersJSON from "./users";

class Users extends React.Component {
  state = {
    userList: [...usersJSON]
  };
  searchUsers = event => {
    event.preventDefault();

    let filteredList = usersJSON.filter(user => {
      return (
        user.firstName
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1 ||
        user.lastName.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
      );
    });

    this.setState({
      userList: filteredList
    });
  };

  searchTeachers = event => {
    let userList;
    if (event.target.checked) {
      userList = usersJSON.filter(user => {
        return user.role === "teacher";
      });
    } else {
      userList = usersJSON;
    }

    this.setState({
      userList: userList
    });
  };

  searchStudents = event => {
    let userList;
    if (event.target.checked) {
      userList = usersJSON.filter(user => {
        return user.role === "student";
      });
    } else {
      userList = usersJSON;
    }

    this.setState({
      userList: userList
    });
  };

  searchCountry = event => {
    let userList = usersJSON.filter(user => {
      return user.campus === event.target.value;
    });

    this.setState({
      userList: userList
    });
  };

  render() {
    const users = this.state.userList.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.campus}</td>
          <td>{user.role}</td>
          <td>
            {user.linkedin ? (
              <a href={user.linkedin}>
                <img src="img/linkedin.png" alt="linkedin" width="20px" />
              </a>
            ) : (
              ""
            )}
          </td>
        </tr>
      );
    });
    const campuses = [];
    for (let i = 0; i < usersJSON.length; i++) {
      if (campuses.indexOf(usersJSON[i].campus) === -1) {
        campuses.push(usersJSON[i].campus);
      }
    }

    const countries = campuses.map(campus => {
      return (
        <option key={campus} value={campus}>
          {campus}
        </option>
      );
    });

    return (
      <div>
        <form onChange={this.searchUsers}>
          <input type="text" name="search" value={this.value}></input>
        </form>
        <div>
          <input
            type="checkbox"
            name="teacher"
            onChange={this.searchTeachers}
          />
          <label>Teacher</label>
          <input
            type="checkbox"
            name="student"
            onChange={this.searchStudents}
          />
          <label>Student</label>
          <select id="countries" onChange={this.searchCountry}>
            {countries}
          </select>
        </div>

        <table className="ironTable">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>IronBook</h1>
      <Users />
    </div>
  );
}

export default App;

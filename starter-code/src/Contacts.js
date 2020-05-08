import React, { Component } from "react";
import users from "./users";

class Contacts extends Component {
  state = {
    search: "",
    studentCheck: true,
    teacherCheck: true,
    campusSelect: "",
  };

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleStudentCheck = (event) => {
    this.setState({
      studentCheck: event.target.checked,
    });
  };

  handleTeacherCheck = (event) => {
    this.setState({
      teacherCheck: event.target.checked,
    });
  };

  handleCampusSelect = (event) => {
    this.setState({
      campusSelect: event.target.value,
    });
  };

  render() {
    const searchFilter = (contact) =>
      contact.firstName
        .toLowerCase()
        .includes(this.state.search.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(this.state.search.toLowerCase());

    const isStudent = (contact) => {
      if (this.state.studentCheck) {
        return contact.role === "student";
      } else return false;
    };

    const isTeacher = (contact) => {
      if (this.state.teacherCheck) {
        return contact.role === "teacher";
      } else return false;
    };

    const campusSelect = (contact) => {
      return contact.campus.includes(this.state.campusSelect);
    };

    const filtered = users.filter(
      (contact) =>
        searchFilter(contact) &&
        campusSelect(contact) &&
        (isStudent(contact) || isTeacher(contact))
    );

    const campusList = [];
    const selectList = users.map((user) => {
      if (!campusList.includes(user.campus)) {
        campusList.push(user.campus);

        return <option value={user.campus}>{user.campus}</option>;
      } else return false;
    });

    const userList = filtered.map((user) => {
      let { firstName, lastName, campus, id, role, linkedin } = user;
      return (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{campus}</td>
          <td>{role}</td>
          <td>
            {user.linkedin ? (
              <a href={linkedin}>
                <img src="/linkedin.png" alt="linkedin" />
              </a>
            ) : null}
          </td>
        </tr>
      );
    });

    return (
      <>
        <div className="App">
          <h1>IronBook</h1>
          <form>
            <input
              type="text"
              name="search"
              id="search"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </form>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.studentCheck}
            onChange={this.handleStudentCheck}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacherCheck}
            onChange={this.handleTeacherCheck}
          />
          <label htmlFor="teacher">Teacher</label>

          <select id="campus" onChange={this.handleCampusSelect}>
            <option value="">All</option>
            {/*    <option value="Berlin">Berlin</option>
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisbon</option> */}

            {selectList}
          </select>

          <label htmlFor="campus">Campus</label>

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
            <tbody>{userList}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Contacts;

import React, { Component } from "react";
import users from "./users";

class Contacts extends Component {
  state = {
    contactList: users,
    search: "",
  };

  handleSearchChange = (event) => {


    this.setState({
      contactList: users.filter(
        contact =>
          contact.firstName
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          contact.lastName
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      ),
      search: event.target.value,
    });
    console.log(event.target.value)
    console.log(this.state.search) //Question: why is this line delayed by one event from the one above it?

  };

  render() {
    const userList = this.state.contactList.map((user) => {
      const { firstName, lastName, campus, id, role, linkedin } = user;
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

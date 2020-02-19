import React, { Component } from "react";

class Users extends Component {
  state = {
    search: ""
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value
    });
  };
  render() {
    console.log(this.state.search);

    let allUsers = this.props.users
      .filter(user => {
        if (this.state.search === "") {
          return true;
        } else if (user.firstName.includes(this.state.search)) {
          return true;
        } else if (user.lastName.includes(this.state.search)) {
          return true;
        }
      })
      .map(user => {
        return (
          <tr key={user.id}>
            <td>
              <p>{user.firstName}</p>
            </td>
            <td>
              <p> {user.lastName}</p>
            </td>
            <td>
              <p> {user.campus}</p>
            </td>
            <td>
              <p> {user.role}</p>
            </td>
            <td>
              {user.linkedin ? (
                <a href={user.linkedin}>
                  {" "}
                  <img
                    className="linkedin"
                    style={{ width: "30px" }}
                    src="/linkedin.png"
                  />
                </a>
              ) : (
                ""
              )}
            </td>
          </tr>
        );
      });
    return (
      <div>
        <h1>IronContacts</h1>
        <div>
          <form>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              onChange={this.handleSearch}
              value={this.state.search}
            />
          </form>
        </div>
        <div className="users">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Campus</th>
                <th>Role</th>
                <th>Linkedin</th>
              </tr>
            </thead>
            <tbody>{allUsers}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;

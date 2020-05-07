import React, { Component, Fragment } from "react";
import users from "../users";
import linkedin from "../linkedin.png";

class User extends Component {
  state = {
    users: users,
    search: "",
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     const { search } = this.state;
  //     console.log(search);

  //     const users = [...this.state.users];

  //     this.setState({
  //       users: [...filteredUsers],
  //     });
  //   };

  render() {
    console.log(this.state.users);

    const usersMap = this.state.users
      .filter((user) => {
        return user.lastName
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      })
      .map((user) => (
        <ul key={user.id} className="user-list">
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.campus}</li>
          <li>{user.role}</li>
          <li>
            <a href={user.linkedin}>
              <img src={linkedin} style={{ width: "20px" }} alt="" />
            </a>
          </li>
        </ul>
      ));
    return (
      <Fragment>
        <form>
          <label htmlFor="search"></label>
        </form>
        <input
          type="text"
          id="search"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <ul style={{ fontWeight: "900" }} className="user-list">
          <li>First Name</li>
          <li>Last Name</li>
          <li>Campus</li>
          <li>Role</li>
          <li>Links</li>
        </ul>
        {usersMap}
      </Fragment>
    );
  }
}

export default User;

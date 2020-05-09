import React, { Component, Fragment } from "react";
import users from "../users";
import linkedin from "../linkedin.png";

class User extends Component {
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
    const usersMap = this.props.users
      //   .filter((user) => {
      //     return user.campus === this.props.campus;
      //   })
      .filter((user) => {
        if (this.props.teacher && this.props.student) {
          return true;
        } else if (this.props.teacher) {
          return user.role === "teacher";
          //return (user.role ===teacher
        } else if (this.props.student) {
          return user.role === "student";
        }

        return true;
      })
      .filter((user) => {
        console.log(this.props.campus);

        if (this.props.campus === "All") return true;
        return user.campus === this.props.campus;
      })

      .filter((user) => {
        return (
          user.lastName
            .toLowerCase()
            .includes(this.props.search.toLowerCase()) ||
          user.firstName.toLowerCase().includes(this.props.search.toLowerCase())
        );
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

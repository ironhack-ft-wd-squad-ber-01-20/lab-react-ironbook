import React from "react";
import "./Page.css";
import logo from "../../linkedin.png";

export default function Page(props) {
  const filteredUsers = props.users
    .filter((user) =>
      `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`.includes(
        props.search.toLowerCase()
      )
    )
    .filter((contact) =>
      props.teacher && props.student
        ? true
        : props.teacher
        ? contact.role === "teacher"
        : props.student
        ? contact.role === "student"
        : true
    )

    .map((user) => {
      return (
        <li key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.campus}</p>
          <p>{user.role}</p>
          <img src={user.linkedin && logo} height="20" />
        </li>
      );
    });
  return <ul className="list">{filteredUsers}</ul>;
}

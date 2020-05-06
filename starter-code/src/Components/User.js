import React from "react";

export default function User(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.campus}</td>
      <td>{props.role}</td>
      <td>
        {props.linkedin && (
          <a href={props.linkedin}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1024px-Linkedin_icon.svg.png"
              alt=""
              style={{ width: "10px" }}
            />
          </a>
        )}
      </td>
    </tr>
  );
}

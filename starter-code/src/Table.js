import React from "react";
import logo from "./linkedin.png";

const Table = props => {
  return (
    <div className="table-container">
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
          {props.users.map((user, index) => {
            const { firstName, lastName, campus, role, id, linkedin } = user;
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{campus}</td>
                <td>{role}</td>
                <td>
                  {linkedin ? (
                    <img
                      className="linkedIn-icon"
                      src={logo}
                      alt="LinkedId Icon"
                    ></img>
                  ) : (
                    ""
                  )}{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

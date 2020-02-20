import React, { Component } from "react";

const LinkedIn = props => {
  return (
    <td>
      <a href={props.url}>
        <img src="linkedin.png" alt="" style={{ height: "15px" }} />
      </a>
    </td>
  );
};

export default class IronBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [...this.props.users],
      studentSearch: false,
      teacherSearch: false,
      query: ""
    };
  }

  handleChange = event => {
    console.log(event.type);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1>IronBooks</h1>
        <form action="/" onSubmit={this.searchNow}>
          <div>
            <input
              type="text"
              name="query"
              onChange={this.handleChange}
              value={this.state.query}
              placeholder="Seach here..."
            />
          </div>
          <input
            type="checkbox"
            onChange={this.handleChange}
            name="studentSearch"
            checked={this.state.studentSearch.value}
            id="student-select"
          />
          <label htmlFor="student-select"> Student</label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            name="teacherSearch"
            checked={this.state.studentSearch.value}
            id="teacher-select"
          />
          <label htmlFor="teacher-select"> Teacher</label>
        </form>
        <table style={{ textAlign: "left" }}>
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
            {this.state.users.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.campus}</td>
                  <td>{element.role}</td>
                  {element.linkedin ? (
                    <LinkedIn url={element.linkedin} />
                  ) : (
                    false
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from 'react';

const LinkedIn = (props) => {
  return (
    <td>
      <a href={props.url}>
        <img src='linkedin.png' alt='' style={{ height: '15px' }} />
      </a>
    </td>
  );
};

export default class IronBooks extends Component {
  constructor(props) {
    super(props);
      this.INIT_USERS = [...this.props.users];
      this.state = {
        users: [...this.props.users],
        filter: {
          student: false,
          teacher: false,
        },
        query: '',
      };
  }

  handleChange = (event) => {
    console.log(event.type);

    this.setState({
      filter: { [event.target.name]: !this.state.filter[event.target.name] },
    });
  };

  handleInput = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  setUsers(input) {
    this.setState({
      users: input,
    });
  }

  handleSubmit = (event) => {
    console.log('submit');
    console.log(this.state.query);
    event.preventDefault();
    if (this.state.query.trim().length !== 0) {
      this.filterUsers(this.state.query);
    } else {
      this.setUsers(this.INIT_USERS);
    }
  };

  filterUsers = (filter) => {
    let filteredUsers = this.state.users;
    console.log(filter);

    if (filter) {
      //
      if (this.state.filter.student) {
        filteredUsers = this.state.users.filter((element) => {
          return (
            element.role === 'student' &&
            (element.firstName.toLowerCase() === filter ||
              element.lastName.toLowerCase() === filter)
          );
        });
      } else if (this.state.filter.teacher) {
        filteredUsers = this.state.users.filter((element) => {
          return (
            element.role === 'teacher' &&
            (element.firstName.toLowerCase() === filter ||
              element.lastName.toLowerCase() === filter)
          );
        });
      } else {
        filteredUsers = this.state.users.filter((element) => {
          return (
            element.firstName.toLowerCase() === filter ||
            element.lastName.toLowerCase() === filter
          );
        });
      }
    }

    this.setUsers(filteredUsers);
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1>IronBooks</h1>
        <form action='/' onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='query'
              onChange={this.handleInput}
              value={this.state.query}
              placeholder='Seach here...'
            />
          </div>
          <input
            type='checkbox'
            onChange={this.handleChange}
            name='student'
            checked={this.state.filter.student}
            id='student-select'
          />
          <label htmlFor='student-select'> Student</label>
          <input
            type='checkbox'
            onChange={this.handleChange}
            name='teacher'
            checked={this.state.filter.teacher}
            id='teacher-select'
          />
          <label htmlFor='teacher-select'> Teacher</label>
        </form>
        <table style={{ textAlign: 'left' }}>
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
            {this.state.users.map((element) => {
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

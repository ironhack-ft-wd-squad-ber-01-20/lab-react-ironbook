import React from 'react';
import logo from './logo.svg';
import './App.css';
import ironhackers from './users';

class App extends React.Component {
  state = {
    users: ironhackers.slice(),
    search: '',
    sheStudent: true,
    sheTeacher: true,
    campus: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  render() {
    let searchedUser = this.state.users.filter(user => {
      // console.log(searchedUser);
      const nameMatch =
        user.firstName.toLowerCase().includes(this.state.search) ||
        user.lastName.toLowerCase().includes(this.state.search);
      // return nameMatch;
      // console.log(user.firstName);

      if (this.state.sheStudent) {
        // console.log('haahaaaaaa');
        return user.role.includes('student') && nameMatch;
      }

      if (this.state.sheTeacher) {
        // console.log('hahahahahaha');
        return user.role.includes('teacher') && nameMatch;
      }

      // if (user.campus === this.state.campus) {     // I didn't manage to make this work :(
      //   console.log('HIIIIIII');
      // return user.campus && nameMatch;
      // }

      // if (this.state.campus) {
      //   console.log(this.states);
      //   return this.state.campus && nameMatch;
      // }
    });

    return (
      <div className="App">
        <h1>IronBook</h1>
        <form>
          <input
            type="text"
            className="input"
            placeholder="search by name"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />

          <label htmlFor="sheTeacher">Teacher</label>
          <input
            type="checkbox"
            name="sheTeacher"
            checked={this.state.sheTeacher}
            onChange={this.handleCheckChange}
          />
          <label htmlFor="sheStudent">student</label>
          <input
            type="checkbox"
            name="sheStudent"
            checked={this.state.sheStudent}
            onChange={this.handleCheckChange}
          />
          <label>
            Campus:
            <select
              defaultValue="All-Campuses"
              name="campus"
              value={this.state.campus}
              onChange={this.handleChange}
            >
              <option value="miami">All Campuses</option>
              <option value="berlin">Berlin</option>
              <option value="paris">Paris</option>
              <option value="miami">Lisbon</option>
            </select>
          </label>
        </form>

        <table className="table">
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
            {searchedUser.map(ironMan => {
              return (
                <tr key={ironMan.id}>
                  <td>{ironMan.firstName}</td>
                  <td>{ironMan.lastName}</td>
                  <td>{ironMan.campus}</td>
                  <td>{ironMan.role}</td>
                  <td>{ironMan.linkedin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

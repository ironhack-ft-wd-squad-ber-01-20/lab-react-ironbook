import React, { Component, Fragment } from "react";

export default class Search extends Component {
  //   handleSearch = (event) => {
  //     this.props.searchQuery(event.target.value);
  //   };
  handleSearch = (event) => {
    this.props.searchQuery(event.target.value);
  };
  handleTeacher = (event) => {
    this.props.searchTeacher(event.target.checked);
  };
  handleStudent = (event) => {
    this.props.searchStudent(event.target.checked);
  };

  handleCampus = (event) => {
    this.props.searchCampus(event.target.value);
  };
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          value={this.props.search}
          onChange={this.handleSearch}
        />
        <label htmlFor="search">Teacher</label>
        <input
          type="checkbox"
          id="teacher"
          name="teacher"
          checked={this.props.teacher}
          onChange={this.handleTeacher}
        />
        <label htmlFor="search">student</label>
        <input
          type="checkbox"
          id="student"
          name="student"
          checked={this.props.student}
          onChange={this.handleStudent}
        />
        <select onChange={this.handleCampus} name="campus" id="campus">
          <option value="All" selected>
            All
          </option>
          <option value="Paris">Paris</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
        </select>
      </div>
    );
  }
}

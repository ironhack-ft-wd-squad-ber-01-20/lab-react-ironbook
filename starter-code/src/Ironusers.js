import React, { Component } from 'react';
import linkedinlogo from './linkedin.png' 

class Ironusers extends Component {
  render(){
    return(
    <tr>
      <td>{this.props.user.firstName}</td>
      <td>{this.props.user.lastName}</td>
      <td>{this.props.user.campus}</td>
      <td>{this.props.user.role}</td>
      <td>{this.props.user.linkedin ? <a href = {this.props.user.linkedin}><img src ={linkedinlogo} width = "20px"/></a> : ""}</td>
    </tr>
    )
  }
};

export default Ironusers;

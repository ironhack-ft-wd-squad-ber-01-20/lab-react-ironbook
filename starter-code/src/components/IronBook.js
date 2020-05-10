import React from "react";
import linkedin from "../linkedin.png"
import "../App.css"


export default function IronBook(props){

    const users = props.users.map(user => {
        return (
            <table  key= {user.id}>
            <thead >
              <tr >
                <th >First Name</th>
                <th >Last Name</th>
                <th >Campus</th>
                <th >Role</th>
                <th >Links</th>
              </tr>
            </thead>
            <tbody >
                <tr >
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td> {user.campus}</td>
                <td>{user.linkedin &&(
                <img className = "linkedlogo" src={linkedin} alt="logo" />)} </td>
                </tr>
            </tbody>
            </table>
                
                   
                

        )
    })

    return (
        <div>
            {users}
        </div>
    )


}
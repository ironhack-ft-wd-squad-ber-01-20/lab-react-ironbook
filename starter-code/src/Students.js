import React, { Component } from 'react'


    const Students=(props)=>{
      const users=  props.users.map(student=>{
    return(
       
<tr key={student.id}>
    <td>{student.firstName}</td>
    <td>{student.lastName}</td>
    <td>{student.campus}</td>
    <td>{student.role}</td>
    <td>{student.linkedin}</td>
</tr>
    )
    })
    return <tbody>{users}</tbody>
}



export default Students;
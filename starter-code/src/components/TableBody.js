import React, { Component } from 'react';

class TableBody extends Component {

    render() {
        const filterUser = this.props.users.filter((name) => {
            console.log(name)
            if (this.props.handleNameChange) {
                if (this.props.student && !this.props.teacher) {
                    return (name.firstName.toLowerCase().includes(this.props.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.props.search.toLowerCase())) && name.role === 'student'
                } else if (this.props.teacher && !this.props.student) {
                    return (name.firstName.toLowerCase().includes(this.props.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.props.search.toLowerCase())) && name.role === 'teacher'
                } else {
                    return name.firstName.toLowerCase().includes(this.props.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.props.search.toLowerCase())
                }
                // return (
                //   (name.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || name.lastName.toLowerCase().includes(this.state.search.toLowerCase()))  
                // );
            }
        })
        return (
            <>
                <tbody>
                    {filterUser.map(e =>
                        <tr key={e.id}>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.campus}</td>
                            <td>{e.role}</td>
                            <td><a href={e.linkedin}>{e.linkedin}</a></td>
                        </tr>
                    )}
                </tbody>
            </>
        )
    }
}

export default TableBody
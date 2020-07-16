import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return (
            <div>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Campus</td>
                        <td>Role</td>
                        <td>Links</td>
                    </tr>
                </thead>
            </div>
        )
    }
}

export default TableHead;
import React from 'react'
import User from '../User'
import './style.css'

export default function index({ users }) {
    return (
        <table className="books-table">
            <thead>
                <tr className="books-table-header" >
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Campus</th>
                    <th>Role</th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user) =>
                    <User key={user.id} user={user} />
                )}
            </tbody>
        </table>
    )
}

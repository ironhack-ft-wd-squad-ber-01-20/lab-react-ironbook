import React from 'react'
import logoLinkedin from '../../assets/linkedin.png'
import './style.css'

export default function index({ user }) {
    const { firstName, lastName, campus, role, linkedin } = user
    return (
        <tr>
            <td className='table-info'>{firstName}</td>
            <td className='table-info'>{lastName}</td>
            <td className='table-info'>{campus}</td>
            <td className='table-info'>{role}</td>
            <td className='table-info'>{linkedin &&
                <a href={linkedin}>
                    <img className='table-logo' src={logoLinkedin} alt='Logo' />
                </a>}
            </td>

        </tr>
    )
}

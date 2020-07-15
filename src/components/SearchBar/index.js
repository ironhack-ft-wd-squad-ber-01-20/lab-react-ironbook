import React from 'react'
import './style.css'

export default function index({ handlerOnchange }) {
    return (
        <div className="find-bar">
            <input type="text" className="find-input" placeholder="Find Book" onChange={handlerOnchange} />
        </div>
    )
}

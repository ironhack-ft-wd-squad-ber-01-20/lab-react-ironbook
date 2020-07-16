import React from 'react';
import './style.css'

export default function index({ options, title = "", handlerOnchange, }) {

    return (
        <div className="filters-bar">
            <label htmlFor="campus">
                <select name="campus" id="campus" onChange={handlerOnchange} >
                    <option value='all'>All</option>
                    {options && options.map((option) => <option value={option} >{option}</option>)}
                </select>
                {title}
            </label>
        </div>
    )
}

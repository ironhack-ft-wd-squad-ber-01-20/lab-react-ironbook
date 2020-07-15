import React from 'react';
import './style.css'

export default function index({ fnClick, fnChange, title = "", checked = false }) {
    return (
        <div className="filters-bar">
            <label>
                <input
                    onChange={e => fnClick(e.target.checked)}
                    type="checkbox"
                    checked={checked}
                />
                {title}
            </label>
        </div>
    )
}

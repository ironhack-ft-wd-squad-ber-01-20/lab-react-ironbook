import React from 'react';
import './style.css'

export default function index({ fnChange, title = "", checked = false }) {
    return (
        <div className="filters-bar">
            <label>
                <input
                    onChange={e => fnChange(e.target.checked)}
                    type="checkbox"
                    checked={checked}
                />
                {title}
            </label>
        </div>
    )
}

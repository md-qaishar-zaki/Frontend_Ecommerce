import React from 'react'
import '../App.css'

export default function Button({ Name, onClick }) {
    return (
        <button className="buttons" onClick={onClick}>
            <div className="backdrop">
                <span>{Name}</span>
            </div>
            <div className="overlay">
                <span>{Name}</span>
            </div>
        </button>
    )
}

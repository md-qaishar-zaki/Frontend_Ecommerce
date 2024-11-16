import React from 'react'
import '../App.css'

export default function Button({ Name }) {
    return (
        <button className="buttons">
            <div className="backdrop">
                <span>{Name}</span>
            </div>
            <div className="overlay">
                <span>{Name}</span>
            </div>
        </button>
    )
}

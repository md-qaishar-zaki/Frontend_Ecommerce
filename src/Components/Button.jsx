import React from 'react'
import '../App.css'

export default function Button({ Name }) {
    return (
        <button class="buttons">
            <div class="backdrop">
                <span>{Name}</span>
            </div>
            <div class="overlay">
                <span>{Name}</span>
            </div>
        </button>
    )
}

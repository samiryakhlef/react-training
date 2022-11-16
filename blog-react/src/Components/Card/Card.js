import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <h2>titre de la card</h2>
            {props.children}
        </div>
    )
}

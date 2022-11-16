import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card.js'

export default function Home() {
    return (
        <>
            <h1 className='home-title'>Tous les articles</h1>

            <div className="container-card">
                <Card />
            </div>
        </>
    )
}

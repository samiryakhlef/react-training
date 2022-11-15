import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>cette page est inconnu</h1>
            <button onClick={() =>navigate("/")}> retour à l'accueil</button>
        </div>
    )
}

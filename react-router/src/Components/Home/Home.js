import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Bienvenue</h1>
            <Link
                to="/contact"
                state={"test-state"}>
                Contact

            </Link>
        </div>
    )
}

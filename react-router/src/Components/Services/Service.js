import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Service() {
    return (
        <div>
            <h1> Section Services</h1>
                <nav>
                    <Link to="/services/developpement">Développement</Link>

                    <Link to="/services/cybersecurite">Cyber-Sécurité</Link>
                </nav>
            <Outlet />
        </div>
    )
}

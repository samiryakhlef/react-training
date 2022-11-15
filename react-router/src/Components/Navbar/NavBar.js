import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <NavLink 
            to="/"
            // style={({isActive})=>{
            //     return isActive ? {color:"green"} : {color:"red"}
            // }}
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Accueil</NavLink>

            <NavLink 
            to="/services"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Service</NavLink>

            <NavLink 
            to="/contact"
            className={({isActive}) =>isActive ? "activeLink" : ""}
            >Contact</NavLink>
        </nav>
    )
}

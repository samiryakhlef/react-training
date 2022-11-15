import React, { useState, useEffect } from 'react'
import './navbar.css'

export default function Navbar() {
    // création du state toggle à false car ne veus pas l'afficher
    const [toggleMenu, setToggleMenu] = useState(false);

    // creation du state pour utiliser la largeur de base de l'écran
    const [largeur, setLargeur] = useState(window.innerWidth);

    //création de la fonction toggleNav pour le onClick
    const toggleNav = () => {

        //on set le state en passant en paramètre l'inverse du state toggleMenu
        setToggleMenu(!toggleMenu)
    }
    // useEffect sur la fenêtre window
    useEffect(() => {
        //création de la fonction changeWidth
        const changeWidth = () => {
            //on set la largeur en utilisant la méthode innerWidth
            setLargeur(window.innerWidth);
        }
        //on créer un eventListenner qu'on nomme resize et on lui passe la fonction changeWidth()
        window.addEventListener('resize', changeWidth);
        // on créer un return pour remove son cycle de vie avec la methode removeEventListener
        //on définis le nom et la fonction a supprimmer
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])


    return (
        <nav>
            {/* shortcircuit pour afficher la liste et la largeur */}
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Services</li>
                    <li className="items">Contact</li>
                </ul>
            )}
            {/* on rappelle la fonction toggleNav onClick */}
            <button
                onClick={toggleNav}
                className="btn"> Ouvrir</button>
        </nav>
    )
}

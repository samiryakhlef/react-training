import React, { useState, useRef, useEffect } from 'react'
import './accord.css'
import Chevron from './chevron.png'

export default function Accord() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState(); 
    const toggleState = () => {
        setToggle(!toggle);
    }


    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)//ajouter le .scrollHeight
    }, [])


    return (
        <div className='accord'>
            <div 
            onClick={toggleState}
            className="accord-visible">
                <h2>lorem ipsum</h2>
                <img src={Chevron} alt="chevron-down" />
            </div>
            
            
            <div
            ref = {refHeight}
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}`: "0px"}}>
                <p
                aria-hidden= {toggle ? "true" : "false"}
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae soluta atque odit repudiandae autem molestias rerum
                    tempore animi repellendus vel dolores,
                    praesentium vitae sed at illum aliquam, qui quibusdam nesciunt.</p>
            </div>
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import "./modal.css"

export default function Modal() {
// création du state Modal
    const [Modal, setModal] = useState(false);
// fonction onclick modal
    const toggleModal = () => {
        setModal(!Modal)
    }

    return (
        <>
            <button
                onClick={toggleModal}
                className="btn-modal"> Open </button>

            {Modal &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello modal</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Autem similique accusamus consequatur modi minima odio,
                                dolorem deleniti itaque dignissimos, minus velit rem.
                                Explicabo sed doloribus odio sint vel, officiis eius.</p>
                        </div>
                        <button
                            onClick={toggleModal}
                            className="close-modal">Close</button>
                    </div>
                </div>
            }
        </>
    )
}

import React from 'react'
import { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
    //state pour afficher les cards
    const [dataArr, setdataArr] = useState([
        { txt: "test des cards", id: uuidv4() }
    ])
    //effacer la card liste a faire
    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setdataArr(filteredState)
    }
    //state input data value
    const [stateInput, setStateInput] = useState();
    
    //linkedInput récupère la value de l'input
    const linkedInput = e => {
        setStateInput(e);
        console.log(e);
    }
    // event onSubmit
    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr];
        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setdataArr(newArr);
        setStateInput('')

    }
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor='todo' className="form-label mt-3">Chose à faire:</label>
                <input
                    value={stateInput}
                    onInput={e => linkedInput(e.target.value)}
                    type="text"
                    className="form-control"
                    id="todo"
                />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste des choses à faire:</h2>
            <ul className="list-group">
                {dataArr.map((item) => {
                    return (
                        <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    );


}
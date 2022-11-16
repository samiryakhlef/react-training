import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {

    const count = useSelector(state => state.count)

    const dispatch = useDispatch();

    const incrFunc = () =>{
        dispatch({
            type:"INCR"
        })
    }

    const decrFunc = () =>{
        dispatch({
            type:"DECR"
        })
    }

    

    return (
        <div>
            <h1>Données: {count} </h1>
            <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button>
        </div>
    )
}

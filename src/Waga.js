import React, { useContext } from 'react'
import { ColorContext } from "./ColorContext";
import { UserContext } from './UserContext';

const Waga = () => {
    const {userName, setuserName} = useContext(UserContext)
    const { color, setcolor } = useContext(ColorContext);
    return (
        <div>
            <h1>aaaaaaaaa{userName}bbbbbbbbbb</h1>
            <hr />
            <h1 style={{ color: color }}>Waga <br></br>{color}</h1>
            <hr />
        </div>

    )
}

export default Waga
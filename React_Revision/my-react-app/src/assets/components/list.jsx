
import React from 'react'


const ln = 7;
const name = "Susheel"
const List = ()=>{
return (
    <div>
        <ul >
            <li>One piece</li>
            <li>Jujutsu Kaisen</li>
            <li>Ninja Kamui</li>
        </ul>
        <h1>Hello {name}</h1>
        <p>your lucky number is {ln}</p>
    </div>
)
}

export default List;
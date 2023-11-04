import React, { useState } from 'react'
import { Card } from './Card'

export const Users = () => {

    const username = "Shekhar";  // Immutable state
    const [count , setCount] = useState(0) // Mutable state - Hook useState

    // const [name , setName] = useState("shekhar") // Mutable state - Hook useState
    // const [age , setAge] = useState(20) // Mutable state - Hook useState
    // const [city , setCity] = useState("Indore") // Mutable state - Hook useState

    const [info , setInfo] = useState({
        name : "Shekhar",
        age :  20,
        city: "Indore"
    })




    console.log("reder");
    return (
        <div className='m-3'>
           <h2>Hello World !</h2>
           <Card title={username} content="this is demo text"
            count={count} setCount={setCount}/>
            {/* <h3> User Name :{name}</h3>
            <h3> User Age :{age}</h3> 
            <h3> User city :{city}</h3> */}

            <h6> User Name :{info.name}</h6>
            <h6> User Age :{info.age}</h6>
            <h6> User City :{info.city}</h6>

            {/* <button className='btn btn-info' 
            onClick={()=>setName("Shashank")} >Change Name</button>
             <button className='btn-outline-dark btn mx-2' 
            onClick={()=>setAge(22)} >Change Age</button>  
            <button className='btn-outline-dark btn mx-2' 
            onClick={()=>setCity("Pune")} >Change City</button> */}

             <button className='btn btn-outline-info my-2' 
            onClick={()=>setInfo({...info, name : "Shashank"})} >Change Name</button>

             <button className='btn-outline-dark btn mx-2' 
            onClick={()=>setInfo({...info, age: 24})} >Change Age</button>

            <button className='btn-outline-primary btn mx-2' 
            onClick={()=>setInfo({...info, city: "Pune"})} >Change City</button>
        </div>
    )
}

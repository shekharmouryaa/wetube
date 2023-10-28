import React, { useState , useEffect } from 'react'

export const Users = () => {
    const [username, setUsername] = useState("Shekhar")
    const [count, setCount] = useState(1)

useEffect(
()=>{
    setCount(10)
    setUsername("Shashank")

return ()=>{
    setUsername("Shekhar")
}

},[])

    
    const changeName = () => {
        setUsername("Himanshu")
    }

    return (
        <>
            <div>User Name : {username}</div>
            <div>Count : {count}</div>
            <button className='btn btn-outline-dark' onClick={changeName} >Change Name</button>
            <button className='btn btn-outline-success'
                onClick={() => setCount(count + 1)} >Change Count</button>
        </>
    )
}

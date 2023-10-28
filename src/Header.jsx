import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


 const MyHeader = (props) =>{

    const navigate = useNavigate()
    const changePage = () =>{
        navigate('/list')
    }




    return (
        <>
        {/* <div>My Header Title is : {props.title}</div> */}
        {/* <div>My Header decription is : {props.desc}</div> */}
        {/* <div>{props.user ? "this is user value" : "this is normal text"}</div> */}

<ul>
    <li>
        <Link to={"/list"}> Week Days </Link>
    </li>
    <li>
    <Link to={"/footer"}> Footer </Link>
    </li>

    <button onClick={changePage}>
        Show me week List
    </button>
</ul>

        </>
    )
}

export default MyHeader

MyHeader.defaultProps ={
    title : 'Default Wetube',
    desc : " Default Hello Web"
}
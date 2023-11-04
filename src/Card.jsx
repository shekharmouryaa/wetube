import React from 'react'

export const Card = (props) => {
    const {title, content, setCount, count} = props
    return (
        <div className='m-4'>
            <div className="card" style={{width: "300px"}} >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <p>
                    <strong>{count}</strong>
                    </p>
                    <button className="btn btn-primary" 
                    onClick={()=> count + 1}>Increase</button>
                    <button className="btn btn-success mx-2" 
                    onClick={()=> setCount(count - 1)}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';

const ListContainer = () => {


    let weekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div>
            {/* {weekName.map(val => {
                return <ul>
                    <li>{val}</li>
                </ul>
            })} */}


       {weekName.map(val => {
                return <ul>
                    <li>
                        <Link to={`/weekday/${val}`} >{val}</Link>
                    </li>
                </ul>
            })}



        </div>
    )
}

export default ListContainer
import React from 'react'
import { useParams } from 'react-router-dom'


const Weekday = () => {

    const param = useParams()

    console.log(param.dayname);

  return (
    <div>Weekday : {param.dayname}</div>
  )
}

export default Weekday
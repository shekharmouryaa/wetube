import React, { useEffect, useRef, useState } from 'react'

const RegistrationForm = () => {

  const [formData , SetFormData] = useState({
    name:"",
    email:"",
    age:""
  })

  const handleChange = (event) => {
    SetFormData({...formData, [event.target.name] : event.target.value})
    // console.log("event", event.target.value)
  }

  const keyPress = (event)=>{
    console.log("event", event)
    alert(`You Pressed Key ${event.key}`)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("formData", formData)
  }


  // const myref = useRef();

  // useEffect(()=>{
  //   myref.current.focus()

  // },[])


  return (
    <div className='m-3' style={{ width: "350px" }}>
      <h4>RegistrationForm</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input  className="form-control" type='text' name="name" 
          value={formData.name} placeholder='Enter Name' onChange={(event)=>handleChange(event)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type='email' name="email" 
          value={formData.email} placeholder='Enter email' onChange={(event)=>handleChange(event)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input className="form-control" type='number' name="age" 
          value={formData.age} placeholder='Enter Age' onChange={(event)=>handleChange(event)} />
        </div>
        
        <button className='btn btn-primary my-2' type='submit'>Submit </button>
      </form>

      <div className="form-group">
          <label htmlFor="age">Key Press Demo</label>
          <input className="form-control" type='text' name="demo" 
          value={""} placeholder='Press Any key' onKeyDown={(event)=>keyPress(event)} />
        </div>
    </div>
  )
}

export default RegistrationForm
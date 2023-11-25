import React from 'react'
import { AppTheme, Counter } from './CounterAppProvider'

const ChildOne = () => {
    
  const {count , changeCount} = Counter()
  const {dark , changeTheme} = AppTheme()

  return (
    <div>
        <h4 style={{color: dark ? "white" : "black" , background: dark ? "black" : "white"}}>ChildOne : {count}</h4>
        <button onClick={changeCount} >Click</button>
        <button onClick={changeTheme} >change theme</button>
    </div>
  )

}

export default ChildOne
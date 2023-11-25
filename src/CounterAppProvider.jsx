import React, { createContext, useContext, useState } from 'react'


const CounterContext = createContext()
const ThemeContext = createContext()

export const Counter = () => {
    return useContext(CounterContext)
}

export const AppTheme = () => {
    return useContext(ThemeContext)
}

export const CounterAppProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [dark, setDarkTheme] = useState(false)

    const changeCount = ()=> {
        setCount(count + 1)
    }
    const changeTheme = ()=> {
        debugger
        setDarkTheme(!dark)
    }



  return (
    <ThemeContext.Provider value={{dark, changeTheme}}>
    <CounterContext.Provider value={{count, changeCount}}>
        {children}
    </CounterContext.Provider>
    </ThemeContext.Provider>
  )
}

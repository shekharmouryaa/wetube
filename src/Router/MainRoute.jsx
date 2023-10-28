import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import MyHeader from '../Header'
import ListContainer from '../ListContainer'
import { Footer } from '../Footer'
import Weekday from '../Weekday'

const MainRoute = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyHeader/>} />
            <Route path="/list" element={<ListContainer/>} />
            <Route path="/footer" element={<Footer/>} />
            <Route path="/weekday/:dayname" element={<Weekday/>} />
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default MainRoute
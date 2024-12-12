import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/register' element ={<Register/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App


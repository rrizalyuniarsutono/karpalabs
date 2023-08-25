import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import './assets/css/sb-admin-2.css'
import Login from './Pages/Auth/Login'
import Home from './Pages/Home/Home'
import Threat from './Pages/Threat/Threat'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/threat" element={<Threat />} />
    </Routes>
  )
}

export default App

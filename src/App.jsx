import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import CoursesPage from './pages/CoursesPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path='/login' element={<><Navbar/> <LoginPage/></>} />
          <Route path='/signup' element={<><Navbar/> <Signup/></>} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App

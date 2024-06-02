import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Users from './components/Users'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/users' />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
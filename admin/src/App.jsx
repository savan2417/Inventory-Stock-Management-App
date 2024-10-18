import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Admin from './Pages/Admin/Admin'


const App = () => {
  return (
    <>
      <Navbar />
      <Admin />
    </>


  )
}

export default App
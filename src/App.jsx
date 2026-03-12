import React from 'react'
import { reactDom } from 'react-dom/client'
import Header from "/components/Header.jsx"
import Login from "/components/Login.jsx"

function App() {


  return (
    <>
        <Header />
      
        <div>
        <Login isLogin = {false} />
          
        </div>
    </>
  )
}

export default App

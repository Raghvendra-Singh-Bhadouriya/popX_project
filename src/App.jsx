import { useState } from 'react'
import './App.css'
import AllRoutes from './navigation/AllRoutes'

function App() {

  return (
    <>
      <div className='m-auto w-[20%] min-h-screen rounded bg-blue-50'>
        <AllRoutes />
      </div>
    </>
  )
}

export default App

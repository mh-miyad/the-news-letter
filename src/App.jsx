import React from 'react'
import { Outlet } from 'react-router-dom'
import NabarCom from './Component/NabarCom'

const App = () => {
  return (
    <div className='container mx-auto '>
      <NabarCom/>
      <Outlet/>
    </div>
  )
}

export default App
import React from 'react'

import { createPortal } from 'react-dom'

import Clock from './components/Clock'

import './assets/styles/index.sass'


const App = () => {

  return (
    <div className='App'>
      <Clock />
    </div>
  )
}


export default App

import { useState } from 'react'
import './App.css'
import NavbarSide from './components/NavbarSide'
import DataBigTile from './components/DataBigTile'



// #121212 - background color
// #b300ff - tint color

function App() {

  return (
    <div className='body'>
      <NavbarSide />
      <div>
        <DataBigTile />
      </div>
    </div>
  )
}

export default App

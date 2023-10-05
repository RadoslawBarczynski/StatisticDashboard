import React from 'react'
import '../styles/NavbarSide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faChartPie, faChartLine, faGear, faBars } from '@fortawesome/free-solid-svg-icons'

function NavbarSide() {
  return (
    <div className='navbar-comp'>
      <div className='logo-wrapper'>
        <h1>*</h1>
      </div>
      <div className='buttons-wrapper'>
        <button className='sidebar-btn'><FontAwesomeIcon icon={faChartSimple} /></button>
        <button className='sidebar-btn'><FontAwesomeIcon icon={faChartLine} /></button>
        <button className='sidebar-btn'><FontAwesomeIcon icon={faChartPie} /></button>
        <button className='sidebar-btn'><FontAwesomeIcon icon={faGear} /></button>
      </div>
      <div className='avatar-wrapper'>
        <div></div>
      </div>
    </div>
  )
}

export default  NavbarSide

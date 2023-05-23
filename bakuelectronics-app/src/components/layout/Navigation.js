import React from 'react'
import logo from '../../assets/image/logo.svg';
function Navigation() {
  return (
    <div className='nav'>
      <div className="col-lg-3">
        <div className="logoimg">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="col-lg-9">
        <div className='navright'>
        <input type='search' placeholder='Axtarış' /><i class="fa-solid fa-magnifying-glass search"></i>
        <div className='magazininfo'>
          <a href='#'>Kampaniyalar</a> <a href='#'>Mağazalar</a> <a href='#'>Digər<i class="fa-regular fa-chevron-down"></i></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
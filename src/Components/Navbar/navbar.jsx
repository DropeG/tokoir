import React from 'react';
import './navbar.css';


function Navbar() {
  return (
    <header>
      <div>
        <h1 className='name'>TOKO-IR</h1>
      </div>
      <input type="checkbox" id='nav_check' hidden/>
      <nav>
        <div>
          <h1 className='name'>TOKO-IR</h1>
        </div>
        <ul>
          <li>
            <a className='active' href="">Home</a>
          </li>
          <li>
            <a href="">¿Quienes Somos?</a>
          </li>
          <li>
            <a href="">Eventos</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a className="active" href="">Login</a>
          </li>

        </ul>
      </nav>
      <label htmlFor="nav_check" className='hamburger'>
        <div></div>
        <div></div>
        <div></div>
      </label>
    

    </header>
  );
}

export default Navbar;
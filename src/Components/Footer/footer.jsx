import React from 'react'
import './footer.css'
import logoImage from '../../logo.png'

function Footer(){
    return(
    <footer className='pie-pagina'>
        <div className='grupo-1'>
            <div className="box">
                <figure>
                    <a href="#">
                    <img src={logoImage} alt="Toko-Ir Logo" />
                    </a>
                    
                </figure>
            </div>
            <div className="box">
                <h1 className='navegation-title'>Navegacion</h1>
                <div className='navegation'>
                <a href="#">Home</a>
                <a href="#">¿Quienes Somos?</a>
                <a href="#">Eventos </a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
                </div>
            </div>
            <div className="box">
                <h1 className='contacto-title'>Contacto</h1>
                <div className='red-social'>
                    <a  href="#"><span className='fa fa-whatsapp icon'></span>+569 5936 5527</a>
                    <a href="#"><span className='fa-regular fa-envelope icon'></span>Pedrogh9@gmail.com</a>
                </div>
                <div>
                <div style={{textAlign: 'center', fontSize: '30px', marginTop: '40px'}}>
                    <a style={{marginRight: '30px'}}href="" className='below fa fa-facebook'></a>
                    <a style={{marginRight: '30px'}}href="" className='below fa fa-instagram'></a>
                    <a style={{marginRight: '30px'}}href="" className='below fa fa-twitter'></a>
                    <a style={{marginRight: '30px'}}href="" className='below fa fa-youtube'></a>
                </div>
                </div>               
               
                
            </div>

        </div>
        <div className='grupo-2'>
            <small>&copy; 2023 <b>Pedro Gonzalez H.</b> -  Todos los Derechos Reservados.</small>
        </div>

    </footer>
    )
}

export default Footer;

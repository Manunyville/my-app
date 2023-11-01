import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown, } from "react-bootstrap";
import "./navbar.css"
import Logo from "../../assets/zonamates.png"

const NavegacionBar = () => {

  
    const [menuAbierto, setMenuAbierto] = useState(false);

   
    const abrirMenu = () => {
      setMenuAbierto(!menuAbierto);
    };
  
  return (
    <>
      <Container id="Navflex">
      <button id="iconHamb" onClick={abrirMenu}>
          <i className={`bi bi-list ${menuAbierto ? 'abierto' : ''}`} />
        </button>
        <div className="marca">
          <img src={Logo} alt="logoDeZonamates" className="logozonamates"/>
        </div>
        
        <div className={`Navbar ${menuAbierto ? 'abierto' : ''}`}>
          <a href="Incio" className="pathname">Inicio</a>
          <a href="Productos" className="pathname">Productos</a>
          <a href="Seguimiento" className="pathname">Seguimiento</a>
          <a href="Redes" className="pathname">Redes</a>
        </div>
        
      </Container>
    </>
  )
}
export default NavegacionBar
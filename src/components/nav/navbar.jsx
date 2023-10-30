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
          <a href="">Inicio</a>
          <a href="">Productos</a>
          <a href="">Seguimiento</a>
          <a href="">Redes</a>
        </div>
        
      </Container>
    </>
  )
}
export default NavegacionBar
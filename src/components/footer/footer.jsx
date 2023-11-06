import React from "react";
import './footer.css'
import american from '../../assets/american-express.png'
import visa from '../../assets/visa.png'
import cabal from '../../assets/cabal.png'
import maestro from '../../assets/maestro.png'
import diners from '../../assets/diners-club.png'
import naranja from '../../assets/naranja.png'
import nativa from '../../assets/nativa.png'
import master from '../../assets/mastercard.png'
import pagofacil from '../../assets/pagofacil.png'
import rapipago from '../../assets/rapipago.png'
import retiro from '../../assets/retiro-local.png'
import correoar from '../../assets/correo-argentino.png'
import acuerdo from '../../assets/acordar.png'


const Footer = () => {

    return (
        <>
            <div className="divfooter">
                <div className="pagosyenvios">
                    <span>MEDIOS DE PAGO</span>
                    <div id="divimg">
                        <img src={visa} alt="" className="imagenes" />
                        <img src={naranja} alt="" className="imagenes" />
                        <img src={nativa} alt="" className="imagenes" />
                        <img src={maestro} alt="" className="imagenes" />
                        <img src={master} alt="" className="imagenes" />
                        <img src={cabal} alt="" className="imagenes" />
                        <img src={diners} alt="" className="imagenes" />
                        <img src={rapipago} alt="" className="imagenes" />
                        <img src={pagofacil} alt="" className="imagenes" />
                        <img src={american} alt="" className="imagenes" />
                    </div>
                </div>

                <div className="pagosyenvios">
                    <span>METODOS DE ENVIO</span>
                    <div id="divimg">

                    <img src={correoar} alt="" className="imagenes" />
                    <img src={acuerdo} alt="" className="imagenes" />
                    <img src={retiro} alt="" className="imagenes" />
                    </div>
                </div>
                <div className="redcon">
                    <span>NUESTRAS REDES SOCIALES</span>
                    <div className="icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                    </div>

                </div>
                <div className="redcon">
                    <span>COMO CONTACTAR</span>
                    <div className="icons">

                    <i class="bi bi-envelope-fill"></i>
                    <i class="bi bi-geo-alt-fill"></i>
                    <i class="bi bi-telephone-fill"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
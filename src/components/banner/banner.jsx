import React from "react";
import './banner.css'

const Banner = () => {

    return (
        <>
            <div className="containerbanner">
                <div className="divbanner">
                    <i class="bi bi-truck"></i>
                    <h3>Envios a cada rincon del mundo.</h3>
                </div>
                <div className="divbanner">
                    <i class="bi bi-credit-card-fill"></i>
                    <h3>3 Cuotas sin interes con todas las tarjetas.</h3>
                </div>
                <div className="divbanner">
                    <i class="bi bi-cash"></i>
                    <h3>25% off en transferencia bancaria.</h3>
                </div>
            </div>
        </>
    )
}
export default Banner;
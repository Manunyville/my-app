import React from "react";
import './banner.css'

const Banner = () => {

    return (
        <>
            <div className="containerbanner">
                <div className="divbanner">
                    <i class="bi bi-truck"></i>
                    <span>ENVIOS A TODO EL MUNDO.</span>            
                </div>
                <div className="divbanner">
                    <i class="bi bi-credit-card-fill"></i>
                    <span>3 CUOTAS SIN INTERES.</span>
                </div>
                <div className="divbanner">
                    <i class="bi bi-cash"></i>
                    <span>25% OFF EN TRANSFERENCIA BANCARIA.</span>
                </div>
            </div>
        </>
    )
}
export default Banner;
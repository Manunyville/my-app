import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./header.css"

const header = () => {
    return (
        <>
            <Container id="ContainerHeader">
                <Col className="rowHeader">
                    <div>
                        <h3>25% off efectivo/transferencia</h3>
                    </div>

                    <div className="datosHeader">
                        <i class="bi bi-telephone-fill">1123294554</i>
                        <i class="bi bi-envelope-fill">zonamates01@gmail.com</i>
                        <i class="bi bi-geo-alt-fill">Carlos casares 971 CASTELAR</i>
                    </div>
                </Col>

            </Container>
        </>
    )
}
export default header;
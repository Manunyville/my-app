import React from "react";
import './landing.css'
import { Button, Card } from 'react-bootstrap/';
import impeAlgarrobo from '../../assets/Imperialalgarrobo.jpg'
import torpedoImperial from '../../assets/Torpedoimperial.jpg'
import camioAlgarrobo from '../../assets/camioneroalgarrobo.jpg'
import camioMarron from '../../assets/camioneromarron.jpg'
import casco from '../../assets/casquito.jpg'
import termo10 from '../../assets/termo10.jpg'
import messi from '../../assets/termomessi.jpg'
import laser from '../../assets/termolaser.jpg'
import combo from '../../assets/combouruguayo.jpg'
import picoloro from '../../assets/picoloro.jpg'
import picorey from '../../assets/picorey.jpg'
import anillada from '../../assets/anillada.jpg'
import bombillarey from '../../assets/bombillarey.jpg'
import picoloro2 from '../../assets/picoloro2.jpg'

const CardProducts = () => {

    return (
        <>
            <div className="cardcontainer">
            <Card className="card" >
                <Card.Img variant="top" src={torpedoImperial} className="imgCards" />
                <Card.Body>
                    <Card.Title>Mate Torpedo Imperial</Card.Title>
                    <Card.Text>
                        <span><h4>$51.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={impeAlgarrobo} className="imgCards" />
                <Card.Body>
                    <Card.Title>Mate Imperial de algarrobo</Card.Title>
                    <Card.Text>
                        <span><h4>$25000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={camioAlgarrobo} className="imgCards" />
                <Card.Body>
                    <Card.Title>Camionero de algarrobo</Card.Title>
                    <Card.Text>
                        <span><h4>$19.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={camioMarron} className="imgCards" />
                <Card.Body>
                    <Card.Title>Mate camionero marron</Card.Title>
                    <Card.Text>
                        <span><h4>$27.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={casco} className="imgCards" />
                <Card.Body>
                    <Card.Title>Mate casquito</Card.Title>
                    <Card.Text>
                        <span><h4>$7500</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={termo10} className="imgCards" />
                <Card.Body>
                    <Card.Title>Termo full color 10</Card.Title>
                    <Card.Text>
                        <span><h4>$23.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={messi} className="imgCards" />
                <Card.Body>
                    <Card.Title>Termo full color Messi</Card.Title>
                    <Card.Text>
                        <span><h4>$23.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={combo} className="imgCards" />
                <Card.Body>
                    <Card.Title>Combo uruguayo</Card.Title>
                    <Card.Text>
                        <span><h4>$43.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={laser} className="imgCards" />
                <Card.Body>
                    <Card.Title>Termo grabado a laser</Card.Title>
                    <Card.Text>
                        <span><h4>$17.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={picoloro} className="imgCards" />
                <Card.Body>
                    <Card.Title>Bombillon Pico de loro</Card.Title>
                    <Card.Text>
                        <span><h4>$22.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={picorey} className="imgCards" />
                <Card.Body>
                    <Card.Title>Bombillon pico de rey</Card.Title>
                    <Card.Text>
                        <span><h4>$22.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={anillada} className="imgCards" />
                <Card.Body>
                    <Card.Title>Bombilla anillada</Card.Title>
                    <Card.Text>
                        <span><h4>$21.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={bombillarey} className="imgCards" />
                <Card.Body>
                    <Card.Title>Bombilla pico de rey</Card.Title>
                    <Card.Text>
                        <span><h4>$18.000</h4>
                        25% off transferencia/efectivo
                        </span>
                    </Card.Text>
                    <Button variant="primary">Compre aqui!</Button>
                </Card.Body>
            </Card>
            </div>
        </>
    )
}
export default CardProducts;
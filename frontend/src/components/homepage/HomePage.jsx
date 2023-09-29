import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import SimpleTable from "../generic/SimpleTable";
import TopBar from "../generic/TopBar";
import SideBar from "../generic/SideBar";


function HomePage() {
    
    const [payments, setPayments] = React.useState(null);

    React.useEffect(() => {
        fetch("/payments")
            .then((res) => res.json())
            .then((res) => setPayments(res.payments))
    })

    const headerItems = [
        { id: 1, text: 'Num. de Tarjeta'},
        { id: 2, text: 'Cliente'},
        { id: 3, text: 'Monto'},
        { id: 3, text: 'Estado'}
    ];    


    return (
        <div className="App">
            <TopBar />

            <Row>
                <Col xs={2} id="sidebar-wrapper">
                    <SideBar />
                </Col>
                <Col>
                    <Container id="page-content-wrapper">
                        <h1>Lista de Pagos</h1>
                        {!payments ?
                            <p>Loading...</p> :
                            <SimpleTable headers={headerItems} data={payments} />         
                        }
                        <Row>
                            <Col md={4}>
                                <Button variant="light">Back</Button>
                                <Button variant="light" className="mx-2">Next</Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="light">Salir</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;

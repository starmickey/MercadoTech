import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import SimpleTable from "../generic/SimpleTable";
import TopBar from "../generic/TopBar";
import SideBar from "../generic/SideBar";

import { headerItems, dataSample } from "../../mockdata";

function HomePage() {
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
                        <SimpleTable headers={headerItems} data={dataSample} />
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

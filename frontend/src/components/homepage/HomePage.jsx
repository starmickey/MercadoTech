import { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import SimpleTable from "../generic/SimpleTable";
import TopBar from "../generic/TopBar";
import SideBar from "../generic/SideBar";

function HomePage() {

    const [payments, setPayments] = useState(null);

    const [tablePage, setTablePage] = useState(0);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        try {
            fetch(`/payments?page=${tablePage}`)
            .then((res) => res.json())
            .then((res) => {
                setPayments(res.payments);
                setIsFirstPage(res.isFirstPage);
                setIsLastPage(res.isLastPage);
            })
        } catch (error) {
            console.log(error);
        }
    }, [tablePage]);

    const headers = [
        { id: 1, text: 'Num. de Tarjeta' },
        { id: 2, text: 'Cliente' },
        { id: 3, text: 'Monto' },
        { id: 3, text: 'Estado' }
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
                            <SimpleTable headers={headers} data={payments} />
                        }
                        <Row>
                            <Col md={4}>
                                <Button
                                    variant="light"
                                    disabled={isFirstPage}
                                    onClick={() => setTablePage(tablePage - 1)}>
                                    Back
                                </Button>
                                <Button
                                    variant="light" className="mx-2"
                                    disabled={isLastPage}
                                    onClick={() => setTablePage(tablePage + 1)}>
                                    Next
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="light"> Salir</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;

import { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import PaymentsTable from "./PaymentsTable";
import ContentHeader from "./ContentHeader";
import SideBar from "./SideBar";

export default function HomePage() {
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

    return (
        <>
            <Row className="p-0">
                <Col xs={2} className="sidebar-wrapper">
                    <SideBar />
                </Col>
                <Col className="page-content-wrapper">
                    <Container>
                        <ContentHeader />
                        <Container className="material-box">
                            <h1>Lista de Pagos</h1>

                            {!payments ?
                                <p>Loading...</p> :
                                <PaymentsTable data={payments} />
                            }
                        </Container>

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
        </>
    )
}
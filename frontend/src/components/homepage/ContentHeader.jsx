import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

export default function ContentHeader() {
    return (
        <Navbar expand="lg" className='bg-outline-dark topbar'>
            <Navbar.Brand href="#home">Lista de Pagos</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Form className="d-flex" action="/search" method="POST">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 bg-light"
                        aria-label="Search"
                    />
                    <Button type="submit" variant="outline-secondary">Search</Button>
                </Form>
        </Navbar>
    )
}
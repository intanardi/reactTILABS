import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap'
import Hasil from "./Hasil";
import Order from "./Order";

const NavbarComponents = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Ocommerce</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/Hasil">Hasil</Nav.Link>
                    <Nav.Link href="/Order">Order</Nav.Link>
                    <Nav.Link href="#link">Payments</Nav.Link>
                    <Nav.Link href="#link">Info</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponents;

import React, { Component } from 'react'
import {Payment, Order} from "./components";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import {Nav, Navbar, Container} from 'react-bootstrap'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Ocommerce</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/order">Order</Nav.Link>
                    <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Switch>
            <Route path="/order" exact component={Order} />
            <Route path="/payment" exact component={Payment} />
        </Switch>
    </BrowserRouter>
    )
  }
}
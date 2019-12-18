import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import Icon from '../../assets/img/br.png';

export default function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img src={Icon} alt="" className="brand-icon"/>Bitcoin-React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#signin">Sign In</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#trade">Trade</NavDropdown.Item>
                        <NavDropdown.Item href="#change">Change</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

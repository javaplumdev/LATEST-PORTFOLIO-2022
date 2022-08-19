import React from 'react';
import { logo, NavLinks } from '../data/Data';
import { styles } from '../constant/index';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
	return (
		<Navbar expand="lg" variant="dark" className="nav my-4">
			<Container>
				<Navbar.Brand href="/">
					<img alt="" src={logo} className="me-3" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto"></Nav>
					<Nav>
						<Nav.Link href="/" className="me-3">
							Home
						</Nav.Link>
						<Nav.Link href="/about" className="me-3">
							About
						</Nav.Link>
						<Nav.Link href="/projects" className="me-3">
							Projects
						</Nav.Link>
						<Nav.Link href="/contacts" className="me-3">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;

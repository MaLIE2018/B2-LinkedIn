import React from 'react';
import {
	Navbar,
	Nav,
	Form,
	Button,
	NavDropdown,
	FormControl,
	Container,
	Row,
	Col,
	Image,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import mainLogo from '../assets/img/Logo.png';
import styles from '../css/StylesNavbar.css';

class MyNavbar extends React.Component {
	state = {};
	render() {
		return (
			<Container>
				<Navbar bg="white" expand="lg">
					<Navbar.Brand>
						<Image src={mainLogo} roundedCircle className="try" />
					</Navbar.Brand>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Form>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">My Networks</Nav.Link>
							<Nav.Link href="#link">MyNetworks</Nav.Link>
							<Nav.Link href="#link">Messaging</Nav.Link>
							<Nav.Link href="#link">Notifications</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		);
	}
}

export default MyNavbar;

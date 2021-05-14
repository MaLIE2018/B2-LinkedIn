import React from "react";
import { Home } from "react-ionicons";
import { People } from "react-ionicons";
import { Briefcase } from "react-ionicons";
import { ChatboxEllipses } from "react-ionicons";
import { Notifications } from "react-ionicons";
import { PersonCircle } from "react-ionicons";
import { Keypad } from "react-ionicons";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Image,
  Container,
} from "react-bootstrap";
import mainLogo from "../assets/img/Logo.png";
import "../css/MyNavbar.css";

class MyNavbar extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <Container sm='fluid'>
          <Navbar className='nav-styles' bg='white' expand='lg'>
            <Navbar.Brand>
              <Image src={mainLogo} rounded className='linkedin_logo' />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Form className='searchBar'>
                  <FormControl type='text' placeholder='Search'></FormControl>
                </Form>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to='/feed'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Home
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />{" "}
                  </div>
                  <span>Home</span>
                </Nav.Link>
                <Nav.Link href='#link'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <People
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />
                  </div>
                  <span>My Networks</span>
                </Nav.Link>
                <Nav.Link href='#link'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Briefcase
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />
                  </div>
                  <span>Jobs</span>
                </Nav.Link>
                <Nav.Link href='#link'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <ChatboxEllipses
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />
                  </div>
                  <span>Messaging</span>
                </Nav.Link>
                <Nav.Link href='#link'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Notifications
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />
                  </div>
                  <span>Notifications</span>
                </Nav.Link>
                <div className='d-flex flex-column justify-content-center align-items-center ml-3'>
                  <span>
                    <PersonCircle
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />
                  </span>
                  <NavDropdown title='Me' id='basic-nav-dropdown'>
                    <NavDropdown.Item as={Link} to='/profile'>
                      {this.props.name}
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className='vr'></div>
                <div className='mt-2 ml-3'>
                  <span>
                    <Keypad
                      className='user-icon'
                      color={"#00000"}
                      title={""}
                      height='20px'
                      width='20px'
                    />
                  </span>
                  <NavDropdown title='Work' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#action/3.1'>
                      Ankit Kumar
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link className='premium'>
                  <span className='d-flex justify-content-center text-center'>
                    Retry Premium <br></br> Free
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}

export default MyNavbar;

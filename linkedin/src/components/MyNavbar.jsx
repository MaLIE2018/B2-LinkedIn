import React from "react";
import Search from "./SearchIcon";
import { Home } from "react-ionicons";
import { People } from "react-ionicons";
import { Briefcase } from "react-ionicons";
import { ChatboxEllipses } from "react-ionicons";
import { Notifications } from "react-ionicons";
import { PersonCircle } from "react-ionicons";
import { Keypad } from "react-ionicons";

import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Image,
} from "react-bootstrap";
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import mainLogo from "../assets/img/Logo.png";
import "../css/StylesNavbar.css";

class MyNavbar extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <Navbar className='nav-styles' bg='white' expand='lg'>
          <Navbar.Brand>
            <Image src={mainLogo} rounded className='linkedin_logo' />
          </Navbar.Brand>

          <Form className='searchBar' inline>
            <FormControl type='text' placeholder='Search'></FormControl>
          </Form>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link href='#home'>
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
              <div>
                <span>
                  <PersonCircle
                    color={"#00000"}
                    title={""}
                    height='20px'
                    width='20px'
                  />
                </span>

                <NavDropdown title='Me' id='basic-nav-dropdown'>
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
              <div className='vr'></div>
              <div>
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

              <Nav.Link className='premium d-flex justify-content-center align-items-center'></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default MyNavbar;

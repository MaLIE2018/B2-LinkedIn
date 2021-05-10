import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Box from "../components/Box";
import About from "../components/About";
class Profile extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
          <Box title='Title' children={<About />} />
          <Box />
        </Col>
        <Col md={4}>
          <Box />
        </Col>
      </Row>
    );
  }
}

export default Profile;

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Box from "../components/Box";
class Profile extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
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

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Profile extends Component {
  render() {
    return (
      <Container sm='fluid'>
        <Row>
          <Col md={8} className='bg-primary'></Col>
          <Col md={4} className='bg-light'>
            Test
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;

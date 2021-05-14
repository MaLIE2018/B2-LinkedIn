import React, { Component } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

class FilterBar extends Component {
  render() {
    return (
      <div style={{ maxHeight: "56px", borderTop: "1px solid #E5E5E5" }}>
        <Container sm='fluid'>
          <Row>
            <Col>
              <Button variant='outline-secondary rounded-pill m-1 p-1 px-2'>
                People
              </Button>{" "}
              <Button variant='outline-secondary rounded-pill m-1 p-1 px-2'>
                Companies
              </Button>{" "}
              <Button variant='outline-secondary rounded-pill m-1 p-1 px-2'>
                Posts
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FilterBar;

import React, { Component } from "react";
import Box from "./../components/parts/Box";
import AddToYourFeed from "./../components/AddToYourFeed";
import { Row, Col } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <Row className='mt-5'>
        <Col md={8}>
          <Box render={(state) => <div>sometext</div>} />
        </Col>
        <Col md={4}>
          <AddToYourFeed />
        </Col>
      </Row>
    );
  }
}

export default Search;

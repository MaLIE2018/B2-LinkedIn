import { Card } from "react-bootstrap";
import React, { Component } from "react";
import "../css/Box.css";

class Box extends Component {
  render() {
    const title = this.props.title;
    return (
      <Card className='mt-3'>
        {console.log(this.props)}
        <Card.Body>
          <Card.Title style={{ color: "#777777" }}>{title}</Card.Title>
          {this.props.children}
        </Card.Body>
      </Card>
    );
  }
}

export default Box;

import { Card } from "react-bootstrap";
import React, { Component } from "react";
import "../css/Box.css";
import { PencilOutline } from "react-ionicons";

class Box extends Component {
  state = {
    edit: true,
  };

  render() {
    const title = this.props.title;
    const color = this.props?.color;
    console.log("color:", color);
    return (
      <Card
        className='mt-3'
        style={{ backgroundColor: color !== undefined ? color : "none" }}>
        {console.log(this.props)}
        <Card.Body>
          <Card.Title style={{ color: "#777777" }}>
            <div className='d-flex'>
              <div>{title}</div>
              {this.props.edit && (
                <div className='edit-button'>
                  <PencilOutline
                    color={"#5E5E5E"}
                    title={"test"}
                    height='20px'
                    width='20px'
                  />
                </div>
              )}
            </div>
          </Card.Title>
          {this.props?.subtitle && <span>{this.props.subtitle}</span>}
          {this.props.children}
        </Card.Body>
      </Card>
    );
  }
}

export default Box;

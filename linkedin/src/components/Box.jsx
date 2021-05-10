import { Card } from "react-bootstrap";
import React, { Component } from "react";
import "../css/Box.css";
import EditButton from "../components/EditButton";
import AddButton from "../components/AddButton";
import BoxFooter from "../components/BoxFooter";
class Box extends Component {
  state = {
    edit: true,
  };

  render() {
    const title = this.props.title;
    const color = this.props?.color;
    const footerText = this.props?.footerText;
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
              {this.props.edit && <EditButton />}
            </div>
          </Card.Title>
          {this.props?.subtitle && <span>{this.props.subtitle}</span>}
          {this.props.children}
        </Card.Body>
        {footerText !== undefined && <BoxFooter footerText={footerText} />}
      </Card>
    );
  }
}

export default Box;

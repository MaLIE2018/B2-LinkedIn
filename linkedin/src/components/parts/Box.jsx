import { Card } from "react-bootstrap";
import React, { Component } from "react";
import "../../css/Box.css";
import EditButton from "./EditButton";
import AddButton from "./AddButton";
import BoxFooter from "./BoxFooter";

class Box extends Component {
  state = {
    edit: true,
  };

  render() {
    const title = this.props?.title;
    const color = this.props?.color;
    const padding = this.props?.padding;
    const footerText = this.props?.footerText;
    return (
      <Card
        className='mt-3'
        style={{
          backgroundColor: color !== undefined ? color : "none",
          overflow: "hidden",
        }}>
        <Card.Body style={{ padding: padding === false ? 0 : null }}>
          {title && (
            <Card.Title style={{ color: "#777777" }}>
              <div className='d-flex'>
                <div>{title}</div>
                {this.props.edit && <EditButton />}
              </div>
            </Card.Title>
          )}
          {this.props?.subtitle && <span>{this.props.subtitle}</span>}
          {this.props.children}
        </Card.Body>
        {footerText !== undefined && <BoxFooter footerText={footerText} />}
      </Card>
    );
  }
}

export default Box;
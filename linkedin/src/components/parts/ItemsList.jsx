import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";
import "../../css/ItemList.css";

class ItemsList extends Component {
  render() {
    const items = this.props?.items;
    return (
      <ListGroup variant='flush'>
        {items.map((item) => (
          <ListItem rounded={this.props.rounded} item={item} connect={true} />
        ))}
      </ListGroup>
    );
  }
}

export default ItemsList;

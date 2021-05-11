import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";
import "../../css/ItemList.css";

class ItemsList extends Component {
  render() {
    const items = this.props?.items;
    let chunks = [];
    let k = 0;
    // while (k < items.)
    return (
      <ListGroup variant='flush'>
        {items.map((item, i) => (
          <>
            <ListItem
              rounded={this.props.rounded}
              item={item}
              edit={item}
              onEditButtonClick={this.props.onEditButtonClick}
              connect={this.props.connect}
            />
          </>
        ))}
      </ListGroup>
    );
  }
}

export default ItemsList;

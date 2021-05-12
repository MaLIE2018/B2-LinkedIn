import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";
import "../../css/ItemsList.css";

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
              key={item._id}
              rounded={this.props.rounded}
              item={item}
              edit={true}
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

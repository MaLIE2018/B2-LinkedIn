import React, { Component } from "react";
import { ListGroup, Col, Row, Button } from "react-bootstrap";
import EditButton from "./EditButton";
class ListItem extends Component {
  render() {
    const edit = this.props?.edit;
    return (
      <ListGroup.Item>
        <Row className='d-flex flex-nowrap'>
          <Col md={2} className='pl-0'>
            <img
              src={this.props.item.image}
              alt=''
              srcset=''
              className='rounded-circle'
              style={{ height: "50px" }}
            />
          </Col>
          <Col md={10} className='ml-2'>
            <div className='font-weight-bold d-flex flex-row'>
              {this.props.item.name} ·
              <span className='text-muted font-weight-light'> 2nd</span>
              {edit && <EditButton />}
            </div>
            <span className='font-weight-light'>{this.props.item.title}</span>
           {this.props.connect && <Button
              style={{ borderRadius: "50px", marginRight: "10px" }}
              variant='outline-dark'>
              Connect
            </Button>}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}

export default ListItem;

import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AddButton from "./parts/AddButton";
import Box from "./parts/Box";

class Groups extends Component {
  render() {
    return (
      <Box
        footerText={"Discover more"}
        padding={false}
        render={(state) => (
          <Card className='mt-2' style={{ border: "none" }}>
            <ListGroup variant='flush' className='underline'>
              <ListGroup.Item>
                <Card.Link className='text-primary' href='#'>
                  <strong>Groups</strong>
                </Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link className='text-primary mb-1 pb-1' href='#'>
                  <strong>Events</strong>
                </Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link className='text-primary mb-1 pb-1' href='#'>
                  <strong>Followed Hashtags</strong>
                </Card.Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        )}
      />
    );
  }
}

export default Groups;

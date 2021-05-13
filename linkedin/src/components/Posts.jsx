import React, { Component } from "react";
import Box from "./parts/Box";
import { Row } from "react-bootstrap";
import { Col, Form, FormControl, Button } from "react-bootstrap";

class Posts extends Component {
  state = {
    post: {
      text: "",
    },
  };

  createPost = async (e) => {
    e.preventDefault();
    if (this.state.post.text.length > 10) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + this.props.bearerToken,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.post),
          }
        );

        if (response.ok) {
          console.log("You created");
          this.props.onHandleUpdate(e, true);
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log(`Something went wrong! ${error}`);
      }
    }
  };
  handleChange = (e) => {
    this.setState((state) => {
      return {
        post: { text: e.target.value },
      };
    });
  };

  render() {
    return (
      <Box
        padding={true}
        render={(state) => (
          <>
            <Row className='d-flex flex-nowrap mx-1'>
              <Col md={1} className='pl-0'>
                <img
                  src={this.props.profile.image}
                  alt=''
                  className={this.props.rounded && "rounded-circle"}
                  style={{ height: "50px" }}
                />
              </Col>
              <Col md={11} className='ml-2'>
                <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Start a post'
                    className='mr-sm-2 rounded-pill flex-grow-1'
                    onChange={this.handleChange}
                    style={{ height: "50px" }}
                  />
                  <Button variant='outline-success' onClick={this.createPost}>
                    Post
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className='mx-1 mt-1'>
              <Button variant='outline-info' onClick={this.props.onPostsClick}>
                Posts
              </Button>
            </Row>
          </>
        )}
      />
    );
  }
}

export default Posts;

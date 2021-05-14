import React, { Component } from "react";
import Box from "./parts/Box";
import { Row } from "react-bootstrap";
import { Col, Form, FormControl, Button } from "react-bootstrap";
import PostsModal from "./PostsModal";

class Posts extends Component {
  state = {
    post: {
      text: "",
    },
    formData: undefined,
    showModal: false,
  };

  createPost = async (e) => {
    e.preventDefault();
    if (this.state.post.text.length >= 10) {
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
          if (this.state.formData !== undefined) {
            const data = await response.json();
            const id = data._id;
            let newRes = await fetch(
              "https://striveschool-api.herokuapp.com/api/posts/" + id,
              {
                method: "POST",
                headers: {
                  Authorization: "Bearer " + this.props.bearerToken,
                },
                body: this.state.formData,
              }
            );
            if (newRes.ok) {
              console.log("FileUploaded");
            }
          }
          this.props.onHandleUpdate(e, true);
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log(`Something went wrong! ${error}`);
      }
    }
  };

  handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    let form_data = new FormData();
    form_data.append("post", file);
    this.setState((state) => {
      return {
        formData: form_data,
      };
    });
  };

  handleChange = (e) => {
    this.setState((state) => {
      return {
        post: { text: e.target.value },
      };
    });
  };

  handleShowModal = () => {
    this.setState((state) => {
      return {
        showModal: !this.state.showModal,
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
                    type='button'
                    placeholder='Start a post'
                    className='mr-sm-2 rounded-pill flex-grow-1 text-left'
                    onClick={this.handleShowModal}
                    style={{ height: "50px" }}
                    value='Start a post'
                  />
                </Form>
              </Col>
            </Row>
            <Row className='mx-1 mt-1'>
              <Button variant='outline-info' onClick={this.props.onPostsClick}>
                Posts
              </Button>
            </Row>
            <PostsModal
              onCreatePost={this.createPost}
              onHandleFileUpload={this.handleFileUpload}
              open={this.state.showModal}
              onHandleShowModal={this.handleShowModal}
              onHandleChange={this.handleChange}
              rounded={this.props.rounded}
              profile={this.props.profile}
              text={this.state.post.text}
            />
          </>
        )}
      />
    );
  }
}

export default Posts;

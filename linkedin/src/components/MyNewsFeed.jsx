import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import {
  ThumbsUpOutline,
  ChatbubblesOutline,
  ArrowRedoOutline,
  SendOutline,
  EllipsisHorizontalOutline,
} from "react-ionicons";

import Box from "./parts/Box";
import comments from "../assets/img/comments.PNG";
import "../css/MyNewsFeed.css";
import dateDiff, { checkImg } from "../helper/datediff";
class MyNewsFeed extends React.Component {
  render() {
    const now = new Date();
    return (
      <>
        {this.props.posts.length > 0 &&
          this.props.posts.map((post) => (
            <Box
              key={post._id}
              render={(state) => (
                <>
                  <ListGroup>
                    <ListGroup.Item
                      style={{ paddingLeft: "0", paddingRight: "0" }}>
                      <div className='d-flex flex-row'>
                        <Col className='pl-0'>
                          <span className='font-weight-bolder'>
                            {post.user?.name}{" "}
                          </span>
                          <span
                            className='font-weight-lighter'
                            style={{ fontSize: "0.8rem" }}>
                            like this.
                          </span>
                          <EllipsisHorizontalOutline
                            color={"#808080"}
                            title={"thumb"}
                            height='25px'
                            width='25px'
                            className='float-right btn'
                          />
                        </Col>
                      </div>
                      <hr></hr>
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ paddingLeft: "0", paddingBottom: "0" }}>
                      <div className='d-flex flex-row'>
                        <Col md={1} className='pl-0'>
                          <img
                            src={post.user?.image}
                            alt=''
                            className={"rounded-circle"}
                            style={{ height: "50px" }}
                          />
                        </Col>
                        <Col md={11} className='ml-2'>
                          <div>
                            <span className='font-weight-bolder'>
                              {post.user?.name}
                            </span>
                            {" · "}
                            <span className='text-muted font-weight-light'>
                              2nd
                            </span>
                          </div>
                          <div
                            className='text-muted'
                            style={{ fontSize: "0.8rem" }}>
                            <span>{dateDiff(post.createdAt, now)}</span>
                            {post.user?.title}
                          </div>
                        </Col>
                      </div>
                      <div>{post.text}</div>
                      <div>
                        {" "}
                        {post?.image && <img src={post.image} alt='post' />}
                      </div>
                      <div style={{ fontSize: "0.8rem" }} className='mt-5'>
                        <img src={comments} alt='comment' /> <a href='/'>35 </a>
                        <a href='/'>23 comments</a>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ paddingLeft: "0", paddingTop: "0" }}
                      className=''>
                      <hr></hr>
                      <div className='d-flex flex-row'>
                        <Col md={2} className=' d-flex flex-row'>
                          <ThumbsUpOutline
                            color={"#808080"}
                            title={"thumb"}
                            height='25px'
                            width='25px'
                          />
                          Like
                        </Col>
                        <Col md={2} className='d-flex flex-row'>
                          <ChatbubblesOutline
                            color={"#808080"}
                            title={"thumb"}
                            height='25px'
                            width='25px'
                          />
                          Comment
                        </Col>
                        <Col md={2} className='d-flex flex-row ml-5'>
                          <ArrowRedoOutline
                            color={"#808080"}
                            title={"thumb"}
                            height='25px'
                            width='25px'
                          />
                          Share
                        </Col>
                        <Col md={2} className='d-flex flex-row ml-3'>
                          <SendOutline
                            color={"#808080"}
                            title={"thumb"}
                            height='25px'
                            width='25px'
                          />
                          Send
                        </Col>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </>
              )}
            />
          ))}
      </>
    );
  }
}

export default MyNewsFeed;

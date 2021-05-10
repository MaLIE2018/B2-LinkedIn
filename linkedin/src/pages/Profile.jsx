import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Box from "../components/Box";
import About from "../components/About";
import ProfileTop from "../components/ProfileTop";
import Dashboard from "../components/Dashboard";

class Profile extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
          <Box children={<ProfileTop />} />
          <Box
            edit={true}
            title={<span className='font-weight-bold'>About</span>}
            children={<About />}
          />
          <Box
            edit={false}
            subtitle={
              <span style={{ fontStyle: "italic", color: "#71767C" }}>
                Private for you
              </span>
            }
            color={"#DCE6F1"}
            title={"Dashboard"}
            children={<Dashboard />}
          />
        </Col>
        <Col md={4}>
          <Box />
        </Col>
      </Row>
    );
  }
}

export default Profile;

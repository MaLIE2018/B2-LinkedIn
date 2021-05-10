import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Box from "../components/Box";
import About from "../components/About";
import ProfileTop from "../components/ProfileTop";
import Dashboard from "../components/Dashboard";
import Activity from "../components/Activity";
class Profile extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
          {/* About */}
          <Box children={<ProfileTop />} />
          <Box
            edit={true}
            title={<span className='font-weight-bold'>About</span>}
            children={<About />}
          />
          {/* Dashboard */}
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
          {/* Activity */}
          <Box
            edit={false}
            subtitle={
              <button
                className='btn p-0'
                style={{
                  color: "#67A0D9",
                  fontWeight: "bold",
                }}
                href='#'>
                296 followers
              </button>
            }
            title={"Activity"}
            footerText={"See all Activity"}
            children={<Activity />}
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

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import About from "../components/About";
import ProfileTop from "../components/ProfileTop";
import Dashboard from "../components/Dashboard";
import Activity from "../components/Activity";
import Experience from "../components/Experience";
import PeopleAlsoViewed from "../components/PeopleAlsoViewed";

class Profile extends Component {
  componentDidMount() {}
  render() {
    return (
      <Row>
        <Col md={8}>
          <ProfileTop />
          <About />
          <Dashboard />
          <Activity />
          <Experience />
        </Col>
        <Col md={4}>
          <PeopleAlsoViewed />
        </Col>
      </Row>
    );
  }
}

export default Profile;

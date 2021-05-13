import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import About from "../components/About";
import ProfileTop from "../components/ProfileTop";
import Dashboard from "../components/Dashboard";
import Activity from "../components/Activity";
import Experience from "../components/Experience";
import PeopleAlsoViewed from "../components/PeopleAlsoViewed";

class Profile extends Component {
  render() {
    const profileId = this.props.profile._id;
    return (
      <Row>
        <Col md={8}>
          {profileId && (
            <>
              <ProfileTop
                profile={this.props.profile}
                bearerToken={this.props.bearerToken}
                onDidUpdate={this.props.onDidUpdate}
              />
              <About />
              <Dashboard />
              <Activity />
              <Experience
                profileId={profileId}
                bearerToken={this.props.bearerToken}
              />
            </>
          )}
        </Col>
        <Col md={4}>
          <PeopleAlsoViewed />
        </Col>
      </Row>
    );
  }
}

export default Profile;

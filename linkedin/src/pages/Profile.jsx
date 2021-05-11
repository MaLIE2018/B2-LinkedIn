import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Box from "../components/Box";
import About from "../components/About";
import ProfileTop from "../components/ProfileTop";
import Dashboard from "../components/Dashboard";
import Activity from "../components/Activity";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

  getProfile = async () => {
    try {
      const requestProfile = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZmE0MTYxOWU1ZDAwMTUxZjhmN2YiLCJpYXQiOjE2MjA2MzgyNzMsImV4cCI6MTYyMTg0Nzg3M30.D-RniP4L8eJ8XOdOjRXswq8LsRnPVK-QYiUr8h9fPhk",
          },
        }
      );
      if (requestProfile.ok) {
        const response = await requestProfile.json();
        this.setState({ profile: response });
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getProfile();
  }

  render() {
    const profileId = this.state.profile._id;
    return (
      <Row>
        <Col md={8}>
          {profileId && (
            <>
              <ProfileTop profile={this.state.profile} />
              <About />
              <Dashboard />
              <Activity />
              <Experience profileId={this.state.profile._Id} />
            </>
          )}
        </Col>
        <Col md={4}>
          <Box />
        </Col>
      </Row>
    );
  }
}

export default Profile;

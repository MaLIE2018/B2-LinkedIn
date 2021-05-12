import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import About from "../components/About";
import ProfileTop from "../components/ProfileTop";
import Dashboard from "../components/Dashboard";
import Activity from "../components/Activity";
import Experience from "../components/Experience";
import PeopleAlsoViewed from "../components/PeopleAlsoViewed";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      bearerToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZjEwNzYxOWU1ZDAwMTUxZjhmN2UiLCJpYXQiOjE2MjA2MzU5MTEsImV4cCI6MTYyMTg0NTUxMX0.U8l7p7PoVQQdWQWKZJviwS7_FVcCIEb4ytol9_fZkyM",
    };
  }
  // 609a5eb3dfccc50015a6bbba Ankit
  // Hasib eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZmE0MTYxOWU1ZDAwMTUxZjhmN2YiLCJpYXQiOjE2MjA2MzgyNzMsImV4cCI6MTYyMTg0Nzg3M30.D-RniP4L8eJ8XOdOjRXswq8LsRnPVK-QYiUr8h9fPhk
  getProfile = async () => {
    try {
      const requestProfile = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + this.state.bearerToken,
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
              <Experience
                profileId={profileId}
                bearerToken={this.state.bearerToken}
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

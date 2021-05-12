import React, { Component } from "react";
import Box from "../components/parts/Box";
import ItemsList from "../components/parts/ItemsList";
import ModalExperience from "./ModelExperience";
class Experience extends Component {
  state = {
    experiences: [],
    currentExperience: {},
    showModal: false,
    updated: false,
  };

  postExp = async () => {
    try {
      // const requestProfile = await fetch(
      //   "https://striveschool-api.herokuapp.com/api/profile/me",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization:
      //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNWViM2RmY2NjNTAwMTVhNmJiYmEiLCJpYXQiOjE2MjA3Mjk1MjQsImV4cCI6MTYyMTkzOTEyNH0.boEO9mTiItNdEDrhQcw1KIvBKIGJ0dCkRW7d3cNzv0M",
      //     },
      //   }
      // );
      // if (requestProfile.ok) {
      //   const response = await requestProfile.json();
      const identity = this.props.profileId;
      const newUrl =
        "https://striveschool-api.herokuapp.com/api/profile/" +
        identity +
        "/experiences";
      const response = await fetch(newUrl, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.props.bearerToken,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState((state) => {
          return { experiences: data, updated: false };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.postExp();
  }
  handleClick = (e, item) => {
    e.preventDefault();
    this.setState((state) => {
      return { currentExperience: item, showModal: true };
    });
  };

  handleUpdate = (e) => {
    console.log("Updating...");
    e.preventDefault();
    this.setState((state) => {
      return { updated: true };
    });
  };
  render() {
    return this.state.experiences.length !== 0 ? (
      <Box
        add={true}
        title='Experience'
        children={
          <>
            <ItemsList
              rounded={true}
              edit={true}
              onEditButtonClick={this.handleClick}
              items={this.state.experiences}
            />
            <ModalExperience
              bearerToken={this.props.bearerToken}
              showModal={this.state.showModal}
              onUpdate={this.handleUpdate}
              item={this.state.currentExperience}
            />
          </>
        }
      />
    ) : null;
  }
}

export default Experience;

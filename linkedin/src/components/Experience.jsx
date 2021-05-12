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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.updated !== this.state.updated) {
      this.postExp();
    }
  }

  postExp = async () => {
    try {
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

  handleUpdate = (e, bool) => {
    console.log("Updating...");
    e.preventDefault();
    this.setState((state) => {
      return { updated: bool };
    });
  };
  render() {
    return this.state.experiences.length !== 0 ? (
      <Box
        add={true}
        title='Experience'
        render={(state) => (
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
        )}
      />
    ) : null;
  }
}

export default Experience;

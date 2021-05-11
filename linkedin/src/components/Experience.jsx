import React, { Component } from "react";
import Box from "../components/parts/Box";
import ItemsList from "../components/parts/ItemsList";
class Experience extends Component {
  componentDidUpdate() {}

  handleClick = (e) => {
    e.preventDefault();
    console.log("hallo");
  };
  render() {
    return (
      <Box
        add={true}
        title='Experience'
        children={
          <ItemsList
            rounded={true}
            edit={true}
            onEditButtonClick={this.handleClick}
            items={[
              {
                role: "CTO",
                company: "Strive School",
                startDate: "2019-06-16",
                endDate: "2019-06-16",
                description: "Doing stuff here and there",
                area: "Berlin",
              },
            ]}
          />
        }
      />
    );
  }
}

Experience.propTypes = {};

export default Experience;

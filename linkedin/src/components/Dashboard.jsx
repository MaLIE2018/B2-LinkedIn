import React, { Component } from "react";
import Box from "./parts/Box";
class Dashboard extends Component {
  render() {
    return (
      <Box
        edit={false}
        subtitle={
          <span style={{ fontStyle: "italic", color: "#71767C" }}>
            Private for you
          </span>
        }
        color={"#DCE6F1"}
        title={"Dashboard"}
        render={(state) => <div>"Test"</div>}
      />
    );
  }
}

export default Dashboard;

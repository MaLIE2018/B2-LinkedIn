import React, { Component } from "react";
import Box from "./parts/Box";
import ItemsList from "./parts/ItemsList";
class PeopleAlsoViewed extends Component {
  render() {
    return (
      <Box
        title={
          <span className='font-weight-bold' style={{ color: "black" }}>
            People also viewed
          </span>
        }
        footerText={"Show more"}
        children={
          <ItemsList
            rounded={true}
            items={[
              {
                _id: "5fc4ae95b708c200175de88d",
                name: "Ari",
                surname: "Razab",
                email: "arianrazab@yahoo.com",
                username: "AriiMe",
                title: "Software Developer",
                bio: "yeeeeet",
                area: "Frankfurt am main",
                image:
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                createdAt: "2020-11-30T08:34:29.820Z",
                updatedAt: "2020-11-30T08:34:29.820Z",
                __v: 0,
              },
            ]}
          />
        }
      />
    );
  }
}

export default PeopleAlsoViewed;

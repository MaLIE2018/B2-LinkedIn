import React, { Component } from "react";
import { EllipsisHorizontalOutline } from "react-ionicons";
import LinkButton from "./parts/LinkButton";

class Ad extends Component {
  render() {
    return (
      <div className='text-center mt-2'>
        <LinkButton
          title='Need Developers ASAP? Hire the top 3% of 
        developers in 48 hours. $0
          Recruiting fee. Start now.'
          color='black'
        />
        <span className='text-muted ml-4' style={{ cursor: "pointer" }}>
          Ad
          <EllipsisHorizontalOutline
            color={"black"}
            title={"thumb"}
            height='25px'
            width='25px'
            className='btn m-0 p-0 pl-1'
          />
        </span>
      </div>
    );
  }
}

export default Ad;

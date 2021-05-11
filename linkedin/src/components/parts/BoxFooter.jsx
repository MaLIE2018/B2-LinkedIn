import React from "react";
import { Card } from "react-bootstrap";
const BoxFooter = (props) => {
  return (
    <Card.Footer
      className='text-muted text-center btn'
      onClick={() => {
        console.log("showmore");
      }}>
      {props.footerText}
    </Card.Footer>
  );
};

export default BoxFooter;

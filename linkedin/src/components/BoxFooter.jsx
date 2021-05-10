import React from "react";
import { Card } from "react-bootstrap";
const BoxFooter = (props) => {
  return (
    <Card.Footer className='text-muted text-center'>
      {props.footerText}
    </Card.Footer>
  );
};

export default BoxFooter;

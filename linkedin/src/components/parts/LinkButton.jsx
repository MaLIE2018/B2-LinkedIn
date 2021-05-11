import React from "react";

const LinkButton = (props) => {
  return (
    <button
      className='btn p-0'
      style={{
        color: "#67A0D9",
        fontWeight: "bold",
      }}
      href='#'>
      {props.title}
    </button>
  );
};

export default LinkButton;

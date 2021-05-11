import "../css/Buttons.css";
import { PencilOutline } from "react-ionicons";

import React from "react";

const EditButton = (props) => {
  return (
    <div className='edit-button btn' onClick={props.onClick}>
      <PencilOutline
        color={"#5E5E5E"}
        title={"test"}
        height='20px'
        width='20px'
      />
    </div>
  );
};

export default EditButton;

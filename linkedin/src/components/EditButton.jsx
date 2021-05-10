import "../css/Buttons.css";
import { PencilOutline } from "react-ionicons";

import React from "react";

const EditButton = () => {
  return (
    <div className='edit-button'>
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

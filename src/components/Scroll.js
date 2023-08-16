import React from "react";
const Scroll = (props) => {
  return (
    <div
      id="Scroll"
      style={{
        overflow: "scroll",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;

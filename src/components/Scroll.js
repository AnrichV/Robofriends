import React from "react";
const Scroll = (props) => {
  return (
    <div
      id="Scroll"
      style={{
        overflow: "scroll",
        // border: "top 5px solid black",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;

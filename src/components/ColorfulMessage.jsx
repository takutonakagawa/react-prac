import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;

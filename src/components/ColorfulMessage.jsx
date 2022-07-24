import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // jsではキーと値が全く同じなら　「:値」を省略できる
    color,
    fontSize: "18px",
    opacity: "1"
  };
  return <p style={contentStyle}>{children}</p>;
};

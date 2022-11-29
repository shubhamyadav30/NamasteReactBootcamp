import React from "react";

const HeaderWithCreateReactElement = () => {
  return React.createElement("div", { className: "title" }, [
    React.createElement("h1", null, "h1 with React.createElement"),
    React.createElement("h2", null, "h2 with React.createElement"),
    React.createElement("h3", null, "h3 with React.createElement"),
    React.createElement("h4", null, "h4 with React.createElement"),
  ]);
};
export default HeaderWithCreateReactElement;

import React from "react";
import { createRoot } from "react-dom/client";

const createSecondElm = React.createElement(
  "h2",
  { id: "testtwo", xyz: "xyz" },
  "Hellow Second Div",
);

const createseconfEle = React.createElement(
  "h3",
  { className: "testtwo" },
  "Hello from createseconfEle",
);

const samplejsx = <h1 className="testtwo">Hello from React Element</h1>;

const ReactAnotherComponent = () => {
  return (
    <>
      <h1 className="testtwo">Hello from React ReactAnotherComponent</h1>
      {/* {samplejsx} */}
    </>
  );
};

const ReactComponent = () => {
  return (
    <>
      <h1 className="testtwo">Hello from React Component</h1>
      <ReactAnotherComponent />
      {samplejsx}
    </>
  );
};

const createNested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "Helddlo"),
    React.createElement("h1", { key: 2 }, "Test"),
  ]),
);

const createh1 = React.createElement("h1", {}, "Hellow React Component");
const root = createRoot(document.getElementById("root"));

root.render(<ReactComponent />);

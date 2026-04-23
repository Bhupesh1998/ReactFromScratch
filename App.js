const createSecondElm = React.createElement(
  "h2",
  { id: "testtwo", xyz: "xyz" },
  "Hellow Second Div",
);

//<div id="patent">
//    <div id="child">
//       <h1>Hello</h1>
//       <h1>Test</h1>
//    </div>
// </div>

const createNested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h1", {}, "Test"),
  ]),
);

const createh1 = React.createElement("h1", {}, "Hellow React Component");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(createNested);

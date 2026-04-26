import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/Components/Header.js";
import Body from "./src/Components/Body.js";
import Contact from "./src/Components/Contact.js";
import Error from "./src/Components/Error.js";
import RestaurantMenu from "./src/Components/RestourentMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Grocery = lazy(() => import("./src/Components/Grocery.js"));
const About = lazy(() => import("./src/Components/About.js"));

const MainApp = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Suspense is Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Suspense is Loading.....</h1>}>
            <Grocery />,
          </Suspense>
        ),
      },
      {
        path: "/RestaurantMenu/:menuId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const getRoot = document.getElementById("root");
const createroot = createRoot(getRoot);
createroot.render(<RouterProvider router={routers} />);
// createroot.render(<MainApp />);

// Headers
//   Logo, Links
// Content
//   Cards
// Footer

// import React from "react";
// import { createRoot } from "react-dom/client";

// const createSecondElm = React.createElement(
//   "h2",
//   { id: "testtwo", xyz: "xyz" },
//   "Hellow Second Div",
// );

// const createseconfEle = React.createElement(
//   "h3",
//   { class: "testtwo" },
//   "Hello from createseconfEle",
// );

// const samplejsx = <h1 className="testtwo">Hello from React Element</h1>;

// const ReactAnotherComponent = () => {
//   return (
//     <>
//       <h1 className="testtwo">Hello from React ReactAnotherComponent</h1>
//       {/* {samplejsx} */}
//     </>
//   );
// };

// const ReactComponent = () => {
//   return (
//     <>
//       <h1 className="testtwo">Hello from React Component</h1>
//       <ReactAnotherComponent />
//       {samplejsx}
//     </>
//   );
// };

// const createNested = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { key: 1 }, "Helddlo"),
//     React.createElement("h1", { key: 2 }, "Test"),
//   ]),
// );

// const createh1 = React.createElement("h1", {}, "Hellow React Component");
// const root = createRoot(document.getElementById("root"));

// root.render(<ReactComponent />);

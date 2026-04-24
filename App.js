import React from "react";
import { createRoot } from "react-dom/client";
import { SwiggyResData } from "./DummyData";
import { cloudinaryImageId } from "./constants.js";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between bg-amber-600 p-3">
        <img
          className="h-16 rounded-2xl"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-app-icon-logo-by-klaudia-mondek-dribbble.jpg"
        />

        <ul className="flex gap-6 font-bold text-white mt-2 sm:mt-0">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

const RestroCard = (props) => {
  const { item, index } = props;
  console.log("item", index);

  return (
    <div className="bg-amber-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        className="w-full h-40 object-cover"
        src={cloudinaryImageId + item.info.cloudinaryImageId}
        alt={item.info.cloudinaryImageId}
      />

      <div className="p-3 text-white">
        <h1 className="font-bold text-lg">{item.info.name}</h1>
        <p>{item.info.cuisines.join(", ")}</p>
        <p>{item.info.costForTwo}</p>
        <p>{item.info.avgRating}</p>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="bg-amber-200 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SwiggyResData.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
          (data, index) => (
            <RestroCard item={data} key={index} />
          ),
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className="bg-amber-900 text-amber-200 p-5 
                       grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left"
    >
      <div>
        <h2 className="font-bold mb-2">Contact</h2>
        <p>contact us</p>
        <p>call whatsapp</p>
        <p>malibhupesh58@gmail.com</p>
      </div>

      <div>
        <h2 className="font-bold mb-2">Support</h2>
        <p>help</p>
        <p>privacy</p>
        <p>terms</p>
      </div>

      <div>
        <h2 className="font-bold mb-2">More</h2>
        <p>about</p>
        <p>services</p>
        <p>info</p>
      </div>
    </footer>
  );
};

const MainApp = () => {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
};

const getRoot = document.getElementById("root");
const createroot = createRoot(getRoot);
createroot.render(<MainApp />);

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

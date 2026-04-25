import { IMG_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [text, setText] = useState("LOG IN");

  const handleClick = () => {
    text == "LOG IN" ? setText("LOG OUT") : setText("LOG IN");
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between bg-amber-600 p-3">
        <img className="h-16 rounded-2xl" src={IMG_URL} />

        <ul className="flex gap-6 font-bold text-white mt-2 sm:mt-0">
          <Link to={"/"}>
            <li>Home</li>{" "}
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"/About"}>
            <li>About</li>
          </Link>
          <div
            onClick={handleClick}
            className="p-2 bg-amber-900 rounded-2xl text-zinc-50 cursor-pointer "
          >
            <button className="cursor-pointer">{text}</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;

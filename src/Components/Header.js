import { IMG_URL } from "../../utils/constants";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between bg-amber-600 p-3">
        <img
          className="h-16 rounded-2xl"
          src={IMG_URL}
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

export default Header;
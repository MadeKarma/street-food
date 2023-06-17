import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <nav className="bg-white fixed w-full shadow py-3 z-50">
      <div className="fs-container flex items-center justify-between">
        <h1 className="font-bold text-3xl text-second">FoodieSpot</h1>
        <ul className="font-semibold flex items-center text-xl">
          <li
            className={`py-2 px-4 rounded-lg ${
              splitLocation[1] === "" ? "bg-red-400 py-2 px-4 rounded-lg" : ""
            }`}
          >
            <Link className="outline-none" to={"/"}>
              Home
            </Link>
          </li>
          <li
            className={`py-2 px-4 rounded-lg ${
              splitLocation[1] === "about" ? "bg-red-400" : ""
            }`}
          >
            <Link className="outline-none" to={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

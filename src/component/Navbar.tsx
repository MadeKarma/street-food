import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <nav className="bg-slate-100 fixed w-full shadow py-3 z-50">
      <div className="container flex items-center justify-between">
        <h1 className="font-black font-mono text-3xl">Street Food</h1>
        <ul className="font-semibold flex items-center text-xl">
          <li
            className={`py-2 px-4 rounded-lg ${
              splitLocation[1] === "" ? "bg-red-400 py-2 px-4 rounded-lg" : ""
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`py-2 px-4 rounded-lg ${
              splitLocation[1] === "about" ? "bg-red-400" : ""
            }`}
          >
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

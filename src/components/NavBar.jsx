import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logoPNG.png";
import { useState } from "react";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "service",
  },
  {
    label: "Accessories",
    path: "accessories",
  },
  {
    label: "About",
    path: "about",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="logo" />
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <ul className={isOpen ? "nav-lists active" : "nav-lists"}>
        {links.map(({ label, path }) => (
          <li onClick={() => setIsOpen(false)} key={label} className="nav-link">
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

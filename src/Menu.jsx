import React from "react";
import { NavLink} from "../node_modules/react-router-dom/index";

const items = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/request",
    text: "Request",
  },
  {
    path: "/audit",
    text: "Audit",
  },
  {
    path: "/sql",
    text: "Sql",
  },
  {
    path: "/error",
    text: "Error",
  },
];

function Menu() {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.path}>
          <NavLink className={({isActive}) => (isActive ? "active" : "")} to={item.path}>
            {item.text}{" "}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;

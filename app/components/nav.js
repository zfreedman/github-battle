import React from "react";
// import { Link, NavLink } from "react-router-dom";
import {NavLink} from "react-router-dom";
// link allows you to render an anchor tag
// ...if you want to change style for the current link, use navlink

export default function Nav() {
  return (
    <ul className="nav">
      <NavLi isExact={true} to="/" text="Home" />
      <NavLi isExact={false} to="/battle" text="Battle" />
      <NavLi isExact={false} to="/popular" text="Popular" />
    </ul>
  );
}

function NavLi(props) {
  return (
    <li>
      {
        props.isExact
          ? (
              <NavLink exact activeClassName="activeLink" to={props.to}>
                {props.text}
              </NavLink>
            )
          : (
              <NavLink activeClassName="activeLink" to={props.to}>
                {props.text}
              </NavLink>
            )
      }
    </li>
  );
}

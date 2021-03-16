import React from "react";
import logo from "../images/awesome-1.svg";
import "../stylesheets/layout/_header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            src={logo}
            alt="Logo Awesome Profile Cards"
            title="Awesome Profile Cards"
            className="header__logo"
          />
        </Link>
      </header>
    );
  }
}

export default Header;

import React from "react";
import logoFooter from "../images/logo-surrender.png";
import "../stylesheets/layout/_footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer role="contentinfo" className="footer">
        <small className="footer__small">Awesome profile-cards @2020</small>
        <img
          src={logoFooter}
          alt="Logo de Adalab"
          title="Adalab, escuela digital especializada para mujeres"
          className="footer__logo"
        />
      </footer>
    );
  }
}

export default Footer;

import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    document.title = `${this.props.number}: ${this.props.title}`;
  }
  render() {
    return (
      <header className="header">
        {this.props.subtitle ? (
          <>
            <h1 className="header__title">
              {this.props.number} {this.props.lesson}: {this.props.title}
            </h1>
            <h2 className="header__subtitle header__underline">{this.props.subtitle}</h2>
          </>
        ) : (
          <h1 className="header__title header__underline">
            {this.props.number} {this.props.lesson}: {this.props.title}
          </h1>
        )}
        <a
          className="header__logo"
          href="https://github.com/Adalab/ejercicios-en-clase-k/"
          title="Ir al repo del ejercicio"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
            alt="Adalab logo"
          />
          <span className="hidden">Ir al repo</span>
        </a>
      </header>
    );
  }
}

Header.propTypes = {
  number: PropTypes.string.isRequired,
  lesson: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Header;

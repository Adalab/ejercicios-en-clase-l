import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/pages/_landing.scss";
import logoLanding from "../images/awesome-1.svg";
import iconDesign from "../images/design.svg";
import iconKeyboard from "../images/keyboard.svg";
import iconShare from "../images/share.svg";
import Footer from "./Footer";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <main role="main" class="main">
          <img
            src={logoLanding}
            alt="Logo Awesome Profile Cards"
            title="Awesome Profile Cards"
            class="main__logo"
          />
          <div class="main__title-container">
            <h1 class="main__title">Crea tu tarjeta de visita</h1>
            <h2 class="main__text">
              Crea mejores contactos profesionales de forma fácil y cómoda
            </h2>
          </div>
          <section className="main__benefits">
            <article className="main__benefits-item main__benefits-item1">
              <img
                src={iconDesign}
                alt="Logo diseña"
                title="Diseña"
                className="main__benefits-itemimg"
              />
              <h2 className="main__benefits-itemtitle">Diseña</h2>
            </article>
            <article className="main__benefits-item main__benefits-item2">
              <img
                src={iconKeyboard}
                alt="Logo rellena"
                title="Rellena"
                className="main__benefits-itemimg"
              />
              <h2 className="main__benefits-itemtitle">Rellena</h2>
            </article>
            <article className="main__benefits-item main__benefits-item3">
              <img
                src={iconShare}
                alt="Logo comparte"
                title="Comparte"
                className="main__benefits-itemimg main__benefits-itemimg2"
              />
              <h2 className="main__benefits-itemtitle">Comparte</h2>
            </article>
          </section>

          <Link
            to="/card-generator"
            className="main__button"
            title="Ir a crear la página"
            tabindex="1"
          >
            Comenzar
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;

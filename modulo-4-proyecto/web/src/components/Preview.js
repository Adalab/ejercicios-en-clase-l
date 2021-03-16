import React from "react";
import Profile from "./Profile";
import "../stylesheets/pages/_main.scss";
import Reset from "./Reset";

const Preview = (props) => {
  let selectedPalette;

  if (props.data.palette === 1) {
    selectedPalette = "palette-1";
  } else if (props.data.palette === 2) {
    selectedPalette = "palette-2";
  } else if (props.data.palette === 3) {
    selectedPalette = "palette-3";
  }

  return (
    <section className="gen-main__container">
      <div className="gen-main__container-inner">
        <Reset handleReset={props.handleReset} />
        <div className="gen-main__card">
          <h2
            className={`card__name-surname js-nameSurname ${selectedPalette}`}
          >
            {props.data.name || "Nombre Apellido"}
          </h2>
          <h2 className={`card__occupation js-occupation ${selectedPalette}`}>
            {props.data.job || "Front-end developer"}
          </h2>
          <Profile photo={props.data.photo} />
          <nav className="card__contact">
            <div className={`card__contact-container ${selectedPalette}`}>
              <a
                className={`card__contact-call js-icons js-phone ${selectedPalette}`}
                href={`tel:${props.data.phone}`}
                target="_blank" rel="noreferrer"
                alt="Call me"
                title="Enlace al número de teléfono"
              >
                <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
              </a>
            </div>
            <div className={`card__contact-container ${selectedPalette}`}>
              <a
                className={`card__contact-email js-icons js-email ${selectedPalette}`}
                href={`mailto:${props.data.email}`}
                target="_blank" rel="noreferrer"
                alt="Email me"
                title="Enlace al e-mail"
              >
                <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
              </a>
            </div>
            <div className={`card__contact-container ${selectedPalette}`}>
              <a
                className={`card__contact-linkedin js-icons js-linkedin ${selectedPalette}`}
                href={`https://linkedin.com/in/${props.data.linkedin}`}
                target="_blank" rel="noreferrer"
                alt="Find me on linkedIn"
                title="Enlace a Linkedin"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
            </div>
            <div className={`card__contact-container ${selectedPalette}`}>
              <a
                className={`card__contact-github js-icons js-github ${selectedPalette}`}
                href={`https://github.com/${props.data.github}`}
                target="_blank" rel="noreferrer"
                alt="I'm on GitHub!"
                title="Enlace a Github"
              >
                <i className="fa fa-github-alt fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Preview;

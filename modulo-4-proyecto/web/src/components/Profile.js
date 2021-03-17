import React, { Component } from "react";
import cardImg1 from "../images/pin-long-brown-hair.png";
import cardImg2 from "../images/pin-glasses.png";
import cardImg3 from "../images/pin-dark-hair.png";
import cardImg4 from "../images/pin-lights.png";
import cardImg5 from "../images/pin-long-hair.png";

class Profile extends Component {
  render() {
    let card1 = cardImg1;
    let card2 = cardImg2;
    let card3 = cardImg3;
    let card4 = cardImg4;
    let card5 = cardImg5;
    let photo = this.props.photo;
    if (photo !== "") {
      card1 = photo;
      card2 = photo;
      card3 = photo;
      card4 = photo;
      card5 = photo;
    }

    return (
      <div className="card__photo js-image js__profile-image">
        <div className="js-div">
          <img
            className="card__img-1"
            src={card1}
            alt="Card Carrousel 1"
            title="Imagen por defecto 1"
          />
          <img
            className="card__img-2"
            src={card2}
            alt="Card Carrousel 2"
            title="Imagen por defecto 2"
          />
          <img
            className="card__img-3"
            src={card3}
            alt="Card Carrousel 3"
            title="Imagen por defecto 3"
          />
          <img
            className="card__img-4"
            src={card4}
            alt="Card Carrousel 4"
            title="Imagen por defecto 4"
          />
          <img
            className="card__img-5"
            src={card5}
            alt="Card Carrousel 5"
            title="Imagen por defecto 5"
          />
        </div>
      </div>
    );
  }
}

export default Profile;

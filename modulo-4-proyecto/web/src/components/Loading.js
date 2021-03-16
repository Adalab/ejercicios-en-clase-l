import React from "react";
import logoLoading from "../images/25.svg";

const Loading = () => {
  return (
    <div className="loading__container">
      <img
        className="loading__container--image"
        src={logoLoading}
        alt="loading"
        title="loading"
      />
      <p className="loading__container--text">Cargando...</p>
    </div>
  );
};

export default Loading;

import React from "react";

function Arriba(props) {
  console.log("Arriba props",props);

  const handleChangeInput = (ev) => {
    const nuevoTexto = ev.target.value;
    console.log("nuevoTexto", nuevoTexto);
    props.cambiarTexto(nuevoTexto);
  }

  const compStyle = {
    border: "solid 5px white"
  };

  return (<div style={compStyle}>
    <h2>Arriba</h2>
    <input type="text" value={props.texto} onChange={handleChangeInput}/>
  </div>);
}

export default Arriba;
import React, {useState} from "react";
import "./App.scss";
import Header from "./Header";
import Arriba from "./Arriba";
import Preview from "./Preview";
import Form from './Form';

function App() {
  //const texto = "Lo que quiero escribir";
  const [texto, setTexto] = useState("Lo que quiero escribir");

  const cambiarTexto = (texto) => {
    setTexto( texto );
  };

  

  return (
    <div className="App">
      <Header number="3" lesson="Resol. de dudas" title="Lifting" subtitle="...ahora con Children!" />
      <main className="container">

{/* <Form>

  <input type="text" value="Contenido 3"/>

</Form> */}

<Form>
  <Arriba
    texto={texto}
    cambiarTexto={cambiarTexto}>
  </Arriba>
</Form>

<Preview texto={texto}></Preview>



      </main>
    </div>
  );
}

export default App;

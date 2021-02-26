import React, {useState} from "react";
import "./App.scss";
import Header from "./Header";
import Arriba from "./Arriba";
import Preview from "./Preview";

function App() {
  //const texto = "Lo que quiero escribir";
  const [texto, setTexto] = useState("Lo que quiero escribir");

  const [claseAbajo, setClaseAbajo] = useState("blue");

  const cambiarTexto = (texto) => {
    setTexto( texto );
  };

  const toggleColorAbajo = () => {
    if( claseAbajo === "blue" ) {
      setClaseAbajo("red");
    }
    else {
      setClaseAbajo("blue");
    }
    setClaseAbajo( claseAbajo === "blue" ? "red" : "blue" );

    //const estado =  bebido > 6 ? "Borracho" : "Sobrio";
  }
  

  return (
    <div className="App">
      <Header number="3" lesson="Resol. de dudas" title="Lifting" subtitle="...para cambiar clase CSS" />
      <main className="container">
<Arriba
toggleColorAbajo={toggleColorAbajo}
texto={texto}
cambiarTexto={cambiarTexto}>
</Arriba>
<Preview
  texto={texto}
  claseAbajo={claseAbajo}>
</Preview>
      </main>
    </div>
  );
}

export default App;

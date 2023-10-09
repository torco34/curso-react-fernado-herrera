import { useState } from "react";

import "./App.css";
import { Index } from "./component/repasoDeJs/Index";
import { Ejercicio } from "./component/ejercicio/Ejercicio";
import { PegesProyecto } from "./component/proyecto-01/PegesProyecto";

function App() {
  return (
    <>
      <div className="container">
        <PegesProyecto />
      </div>
    </>
  );
}

export default App;

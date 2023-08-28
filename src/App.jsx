import { useState } from "react";

import "./App.css";
import { Index } from "./component/repasoDeJs/Index";
import { Ejercicio } from "./component/ejercicio/Ejercicio";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Index /> */}
      <div className="container">
        <Ejercicio
          title="este es un prosp y suma tambien es una prosp"
          suma={7 + 3}
        />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import {  } from "./component/tes/Tes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tes />
      Hero
    </>
  );
}

export default App;

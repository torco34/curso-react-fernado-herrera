import React, { useState } from "react";
import Button from "react-bootstrap/Button";
export const Ejercicio2 = ({ value }) => {
  const [conten, setContes] = useState(0);
  const sumar = () => {
    setContes(conten + 1);
  };
  const resta = () => {
    setContes(conten - 1);
  };
  const resed = () => {
    setContes(value)
  };
  return (
    <>
      <p>{conten}</p>
      <Button variant="outline-success" onClick={sumar}>
        +
      </Button>{" "}
      <Button variant="outline-warning" onClick={resta}>
        -
      </Button>{" "}
      <Button variant="outline-danger" onClick={resed}>
        resed
      </Button>{" "}
    </>
  );
};

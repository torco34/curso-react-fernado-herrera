import React, { useState } from 'react'

const PegesProyecto = () => {
  const [array, setArray] = useState(["hola mundo", "este es mi "])

  //calmekey
  const hendleAgregar = () => {
    setArray([...array, "mundo"])
    setArray(cat => [...cat, "sergio"])
  }
  return (
    <div>PegesProyecto

      <button onClick={hendleAgregar}>Agregar</button>
      {array.map((arr) => <p>{arr}</p>)}
      {array}
    </div>
  )
}

export default PegesProyecto
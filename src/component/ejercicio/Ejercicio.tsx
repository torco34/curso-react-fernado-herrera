import React from 'react'
import { Ejercicio2 } from './Ejercicio2'

export const Ejercicio = ({ title, suma }) => {
    return (
        <>
            este es un ejercicio
            <p>{title}</p> suma:{suma}
            <Ejercicio2 value={0} />
        </>
    )
}

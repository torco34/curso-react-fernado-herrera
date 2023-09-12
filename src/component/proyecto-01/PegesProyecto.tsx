import React, { useState } from 'react'
import { Categoris } from './categori/Categoris'
interface Props {
  
}
export const PegesProyecto = ({ }: Props) => {
  const [categories, setCategories] = useState<string[]>(["titulo 1", "titulo2", "titulo 3"])

  //calmekey
  const hendleAgregar = (onNewCategory) => {
    setCategories([onNewCategory, ...categories])
  
console.log()
  }
  return (
    <div className='p-5 '>
      <Categoris onNewCategory={(event: any) => hendleAgregar(event)} />

      {/* // setCategories={setCategories}  */}
      

      {categories.map((arr) => <p key={arr}>{arr}</p>)}

    </div>
  )
}


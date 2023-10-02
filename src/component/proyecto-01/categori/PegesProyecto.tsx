import React, { useState } from 'react'
import { Category } from './Category'
import { GifGrid } from './GifGrid'

import { Menu } from '../Menu'
interface Props {
  category: any;
}

export const PegesProyecto = ({ category }: Props) => {
  const [categories, setCategories] = useState<string[]>(["titulo 1", "titulo2", "titulo 3"])

  //calmekey
  const handleAgregar = (onNewCategory: any) => {
    //  si la categoría existe no haga nada
    if (categories.includes(onNewCategory)) return
    setCategories([onNewCategory, ...categories])

    console.log()
  }

  return (
    <div className='p-5 '>
      <Category onNewCategory={(event: any) => handleAgregar(event)} />

      {categories.map((category) => <GifGrid key={category} category={category} />)}
      
    </div>
  )
}







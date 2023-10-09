import React, { useEffect, useState } from 'react'
import { GifGrids } from './GifGrids'
import { GifItem } from './GifItem'
import "../css/Project.css"
import { useFetchGifs } from '../hooks/useFetchGifs'
export const GifGrid = ({ category }: any) => {

    const { images, isLoading } = useFetchGifs(category)

    console.log(isLoading);

    return (
        <>
            <h2>{category}</h2>

            {isLoading && (<h5>cargando...</h5>)}

            <div className='card-grid'>

                {images.map((image: any) =>

                (
                    <GifItem key={image.id}{...image} />
                )


                )}
            </div>
        </>
    )
}

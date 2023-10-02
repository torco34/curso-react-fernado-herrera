import React, { useEffect, useState } from 'react'
import { GifGrids } from './GifGrids'

export const GifGrid = ({ category }: any) => {
    const [images, setImages] = useState([])
    const getImages = async () => {
        const neverImage = await GifGrids(category)
        setImages(neverImage)
        console.log(neverImage, 'hola')
    }

    useEffect(() => {
        getImages()
    }, [])
    return (
        <>
            <h2>{category}</h2>
            <ol>
                {images.map(({id, title}) =>

                (
                    <li key={id}>{title}</li>
                )


                )}
            </ol>
        </>
    )
}

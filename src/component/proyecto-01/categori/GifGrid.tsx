import React, { useEffect, useState } from 'react'
import { GifGrids } from './GifGrids'
import { GifItem } from './GifItem'
import "../css/Project.css"
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
            <div className='card-grid'>
                {images.map((image: any) =>

                (
                    <GifItem key={image.id}{...image} />
                    // <li key={id}>{title}</li>
                )


                )}
            </div>
        </>
    )
}

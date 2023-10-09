import { useState, useEffect } from "react";
import { GifGrids } from "../categori/GifGrids";
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const neverImage = await GifGrids(category);
    setImages(neverImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
  };
};

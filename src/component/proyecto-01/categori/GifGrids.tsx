export const GifGrids = async ({ category }) => {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=ydE32MTfJ6gf4uKenR8VSuyoruqanyKu&q&=valoran=${category}&limit=20`
    const resp = await fetch(URL)
    const { data } = await resp.json()
   
    const gibs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gibs

}
export const getGifs = async ( category ) => {
    const URL = //Ponga su API key aqui
    const resp = await fetch(URL)
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return(gifs)
}

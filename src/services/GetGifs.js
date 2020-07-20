export const getGifs = async( category ) => {

    const api_key = '56DbjY2UNy36CgisExKyqNAEV5LsMd4X';
    const URL_BASE_GIFS = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=${ api_key }`;
    // const URL_BASE_STICKERS = `https://api.giphy.com/v1/stickers/search?q=${ tmp }&limit=10&api_key=${ api_key }`;

    const resp = await fetch( URL_BASE_GIFS );
    const { data } = await resp.json();

    // const gifs = data.map( img => {
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images?.downsized_medium.url
    //     }
    // });

    // Desestructuración
    const gifs = data.map(({ id, title, images }) => {

        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }

    });

    return gifs;
}
import { API_URL, STRAPI_URL } from "./config";

export async function getImages(){
    const resp = await fetch(`${API_URL}/carousels?populate[image][fields][0]=url`, { cache: 'no-store' });

    if (!resp.ok) {
        throw new Error ('Something went wrong');
    }

    const {data} = await resp.json();

    return data.map(({attributes, id})=>{
        const {title, description, url} = attributes;
        const {url:image} = attributes.image.data[0].attributes;
        const urlimage= getUrlImage(image)
        return {title, description, url, urlimage, id}
    });
}

function getUrlImage( url ){
    return `${STRAPI_URL}${url}`;
}
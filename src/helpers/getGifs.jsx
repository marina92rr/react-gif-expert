

//Funcion de 
export const getGifs = async( category ) =>{

    const url =`https://api.giphy.com/v1/gifs/search?api_key=oGErfcVlhMcE6uwYSt7ohg1DY74S9LeR&q=${category}&limit=5`    //API de gifs

    const resp = await fetch(url);      //Solicitud HTTP
    const {data} = await resp.json();   //devuelve la respuesta data en un objeto
    

    //recoge cada objeto data y devuelve un nuevo objeto con los valores que queremos(id,title....)
    const gifs= data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
}


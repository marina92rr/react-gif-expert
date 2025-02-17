

import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';


export const GifGrid = ({ category }) => {

const {images,isLoading} = useFetchGifs(category);      //HOOKS

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)        //Si isLoading es true entonces aparece cargando
                
            }
           
            <div className='card-grid'>
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            {...image}     />
                    
                    ))
                }
            </div>
        </>
    )
}
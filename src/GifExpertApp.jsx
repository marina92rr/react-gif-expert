import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

//Componente principal, llama a los demas componentes
export const GifExpertApp = () =>{

    //almacenar Array. HOOKS- UsestateSnipe
    const [categories, setCategories] = useState(['Naruto','Dragon ball']);

    const onAddCategory = (newCategory) =>{
      
        //si existe el nombre en categories  se resetea el input
        if(categories.includes(newCategory)) return;

        //añadir valor del input
        setCategories(categories => [newCategory,...categories])  //...cat = desestructuracion de categorias
        //Otra manera = setCategories([...categories,newCategory])
    }

    return(
        <>
            {/*Titulo */}
            <h1>GifExpertApp</h1>

            {/*Input */}
            <AddCategory 
            
                onNewCategory= {onAddCategory}                   //on....esque emite algo. es un evento
            />
        
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category = { category} />
                ))
            }
        </>
    )
}
import { useState } from "react";


export const AddCategory = ({onNewCategory}) =>{

    //Valor por defecto
    const [inputValue, setInputValue] = useState('');

    //Funcion recoge lo que escribo del input en el objeto ->target->value
    const onInputChange = ({target}) => {
        //console.log(target.value);
        setInputValue(target.value);    //Valor del input
    }

    //envio de formulario
    const onSubmit = (event) =>{
       event.preventDefault();  //detiene el onSubmit automatico

       if(inputValue.trim().length <=1){   //Si el input que mandamos es <=1 no se añade a la lista
        return;
       }
        onNewCategory(inputValue.trim());  //llamo a la funcion de GifExpertAdd
        setInputValue('');  //Se resetea el input al enviarlo
    }
    return (
        <form onSubmit={onSubmit}>      
            <input 
            type="text"
            placeholder="Buscar Giff"
            value={inputValue}
            onChange={onInputChange} />
        </form>
        
    )
}
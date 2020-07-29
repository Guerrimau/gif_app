import React, {useState} from 'react';
import propTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    //? afnf snippet para crear una arrow function
    const handleSubmit = ( e ) => {
        //Esta funcion sirve para que no haga los comportamientos por defecto
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    
    

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder = 'Mucho Texto'
            />

        </form>
    )
}

//Forma de forzar el prop de la funcion
AddCategory.propTypes = {
    setCategories:propTypes.func.isRequired
}
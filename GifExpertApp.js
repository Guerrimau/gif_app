import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ])

    // const handleAdd = () => {
    //     ? Los puntos suspensivos son para referirce a lo que ya esta establecido
    //     ? en este caso la lista anterior
    //     categories en este caso es el valor del estado anterior
    //     setCategories( categories => [...categories, 'HunterXHunter'] );
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={category}
                        />
                    ))
                    
                }
            </ol>
        </div>
    )
}

import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Dragon Ball', 'Paw Patrol', 'Samurai X'];

    const [categories, setCategories] = useState( ['Dragon Ball'] );
    
    // const handleAdd = () => {

    //     // setCategories([ ...categories, 'Charly' ]);
    //     setCategories( cats => [ ...cats, 'Charly' ] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr/>

            <ol>
                {
                    // categories.map(category => {

                    //     return <li key = { category } >{ category }</li> 

                    // })

                    categories.map(category => (

                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                        
                    ))
                }
            </ol>
        </>
    )
}


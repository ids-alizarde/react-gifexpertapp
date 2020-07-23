import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['Dragon Ball', 'Paw Patrol', 'Samurai X'];

    // const [categories, setCategories] = useState( ['Dragon Ball'] );
    const [categories, setCategories] = useState( defaultCategories );
    
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


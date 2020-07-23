import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../services/GetGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]);

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInTopLeft">{ category }</h3>

            { loading && <p>Loading.........</p> }

            <div className="card-grid">

                { images.map( img => (

                    <GifGridItem 
                        key={img.id}
                        { ...img }>

                    </GifGridItem>

                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

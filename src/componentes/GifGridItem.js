import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="card animate__animated animate__rubberBand">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

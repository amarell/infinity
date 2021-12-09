import React from 'react'
import './Image.css'

export default function Image({imageUrl, imageDescription, imageName}) {
    return (
        <div className='image-container'>
            
            <img className="image"
                src={imageUrl}
                alt={imageDescription}
            />
            <div className='image-name'>{imageName}</div>
            <div className='image-description'> Caption: {imageDescription} </div>
        </div>
    )
}

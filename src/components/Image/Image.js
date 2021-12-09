import React from 'react'
import './Image.css'

export default function Image({imageUrl, imageDescription, imageName}) {
    return (
        <div className='image-container'>
            <div>{imageName}</div>
            <img className="image"
                src='https://firebasestorage.googleapis.com/v0/b/slon-6085d.appspot.com/o/images%2Fhimalayas.jpg?alt=media&token=7a3b0417-eb52-4167-be6d-90ed93b7a00d'
                alt="stunning mountain"
            />
            <div> <hr/> {imageDescription} </div>
        </div>
    )
}

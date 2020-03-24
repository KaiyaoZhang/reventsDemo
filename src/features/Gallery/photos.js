import React from 'react';
import Gallery from "react-photo-gallery";
import photos from '../../data/photos';

const Photos = () => {
    return (
        <div>
            <Gallery photos={photos}/>
        </div>
    )
}

export default Photos;
import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const Gallery = (props) => {
    const photoData = props.data;
    let photoResults

    //conditional that displays photo grid if results exist
    if (photoData.length > 0) {
     photoResults = photoData.map(photo => (
        <Photo 
            id={photo.id}
            key={photo.id}
            title={photo.title}
            server={photo.server}
            secret={photo.secret}
            />
    ))
    } else {
        //if not results, NotFound component is called
        photoResults = <NotFound />
    };

    return (
        <div className='photo-container'>
            <h1>Gallery</h1>
            <ul>{photoResults}</ul>
        </div>
    );
};

export default Gallery;
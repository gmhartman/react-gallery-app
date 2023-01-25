import React from 'react';
import NotFound from './NotFound';
// import { useParams } from 'react-router-dom';
// import {Route, Routes, Navigate} from 'react-router-dom';
import Photo from './Photo';
// import NotFound from './NotFound';

const Gallery = (props) => {
    const photoData = props.data;
    let photoResults

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
        photoResults = <NotFound />
    };

    // const {topic} = useParams();
    // let searchTopic = topic ? topic : defaultSearch;
    // searchTopic = searchTopic ? searchTopic : "cats%2Cdogs%2Ccomputers";

    // useEffect(() => {
    //     getPhotos(searchTopic)
    // }, [searchTopic]);
    // photos = photos.map(photo => {
    //     return <Photo
    //         url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
    //         key={photo.id}
    //     />
    // })
    return (
        <div className='photo-container'>
            <h1>Gallery</h1>
            <ul>{photoResults}</ul>
        </div>
    );
};

export default Gallery;
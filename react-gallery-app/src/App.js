// react hooks
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';

//components & API key
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import apiKey from './Config';
import Nav from './components/Nav';
import NotFoundError from './components/NotFoundError';

import './App.css';

const App = (props) => {
  //setting states for the links/loading page
  const [photos, setPhotos] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState([true]);


  const searchForPhoto = (topic = 'cats') => {
    setLoading(true);
    //begin API fetch via axios
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        setLoading(false);
        //sets the photos to display based on criteria
        if (topic === 'cats') {
          setCats(response.data.photos.photo);
        } else if (topic === 'dogs') {
          setDogs(response.data.photos.photo);
        } else if (topic === 'computers') {
          setComputers(response.data.photos.photo);
        } else {
          setPhotos(response.data.photos.photo);
        }
      })
      .catch((error) => {
        console.log('Fetching/Parsing Error', error);
      });
  };

  useEffect(() => {
    searchForPhoto();
    searchForPhoto('cats');
    searchForPhoto('dogs')
    searchForPhoto('computers')
  }, []);

  return (
    <div className="container">
      <SearchForm
        onSearch={searchForPhoto} setLoading={setLoading}
      />
      <div className='main-nav'>
        <Nav />
        {
          //displays "loading"
          (loading)
          ? <p>Loading...</p>
          : <Routes>
            <Route path="/" element={<Navigate to="/cats" />} />
            <Route path="/cats" element={<Gallery data={cats} />} />
            <Route path="/dogs" element={<Gallery data={dogs} />} />
            <Route path="/computers" element={<Gallery data={computers} />} />
            <Route path="/search/:keyword" element={<Gallery data={photos} />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        }
      </div>
    </div>
  );
}


export default App;

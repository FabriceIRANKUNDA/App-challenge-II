import React, { useState } from 'react';

import SearchForm from './components/SearchForm/SearchForm';
import AlbumItems from './components/AlbumItems/AlbumItems';

const App = () => {
  const [id, setId] = useState('');
  const loadAlbumHandler = (albumId) => {
    setId(albumId);
  };
  return (
    <React.Fragment>
      <SearchForm onLoadAlbum={loadAlbumHandler} />
      <AlbumItems albumId={id} />
    </React.Fragment>
  );
};

export default App;

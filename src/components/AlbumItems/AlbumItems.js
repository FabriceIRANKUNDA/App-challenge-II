import AlbumItem from './AlbumItem/AlbumItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './AlbumItems.module.css';

const AlbulmItems = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!props.albumId) return;
    const fetchData = async () => {
      const res = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/albums/${props.albumId}/photos`,
      });
      const cleanData = res.data.map((data) => ({
        id: data.id,
        title: data.title,
        thumbnailUrl: data.thumbnailUrl,
      }));
      setData(cleanData);
    };
    fetchData();
  }, [props.albumId]);

  return (
    <div className={styles['album-container']}>
      {data.map((album) => {
        return (
          <AlbumItem
            key={album.id}
            title={album.title}
            url={album.thumbnailUrl}
          />
        );
      })}
    </div>
  );
};

export default AlbulmItems;

import ReactPaginate from 'react-paginate';

import ErrorModal from '../UI/ErrorModal/ErrorModal';
import Spinner from '../UI/Spinner/Spinner';
import AlbumItem from './AlbumItem/AlbumItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './AlbumItems.module.css';

const AlbulmItems = (props) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

  const albumPerPage = 9;
  const pagesVisited = pageNumber * albumPerPage;
  const pageCount = Math.ceil(data.length / albumPerPage);

  const displayAlbums = data
    .slice(pagesVisited, pagesVisited + albumPerPage)
    .map((album) => {
      return (
        <AlbumItem
          key={album.id}
          title={album.title}
          url={album.thumbnailUrl}
        />
      );
    });

  const removeError = () => {
    setIsDataAvailable(true);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (!props.albumId) return;
    setShowSpinner(true);
    const fetchData = async () => {
      const res = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/albums/${props.albumId}/photos`,
      });
      setShowSpinner(false);
      if (!res.data.length) {
        setIsDataAvailable(false);
      }
      const cleanData = res.data.map((data) => ({
        id: data.id,
        title: data.title,
        thumbnailUrl: data.thumbnailUrl,
      }));
      setData(cleanData);
    };
    fetchData();
  }, [props.albumId]);

  return [
    showSpinner && <Spinner />,
    data.length ? (
      <React.Fragment>
        <div className={styles['album-container']}>{displayAlbums}</div>
        <div className={styles.paginationContainer}>
          <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            activeClassName={styles.paginationActive}
          />
        </div>
      </React.Fragment>
    ) : (
      !isDataAvailable && (
        <ErrorModal
          onRemoveErrorModal={removeError}
          title="Invalid ID"
          message="No photos of given album ID, use 0< IDs <100"
        />
      )
    ),
  ];
};

export default AlbulmItems;

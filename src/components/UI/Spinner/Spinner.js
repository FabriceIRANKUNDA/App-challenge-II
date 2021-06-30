import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Spinner.module.css';

const Spinner = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
      <div class={styles.spinner}>
        Loading
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default Spinner;

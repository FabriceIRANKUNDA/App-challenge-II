import React from 'react';

import styles from './Spinner.module.css';

const Spinner = (props) => {
  return (
    <React.Fragment>
      <div className={styles['spin-wrapper']}>
        <div className={styles.spinner} />
      </div>
    </React.Fragment>
  );
};

export default Spinner;

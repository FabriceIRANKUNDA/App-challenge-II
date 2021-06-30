import Card from '../../UI/Card/Card';

import styles from './AlbumItem.module.css';

const AlbumItem = (props) => {
  return (
    <Card>
      <div className={styles['our-team']}>
        <div className={styles.picture}>
          <img
            className={styles['img-fluid']}
            src={props.url}
            alt="Album"
          />
        </div>
        <div className={styles['team-content']}>
          <h4 className={styles.title}>
            {props.title}
          </h4>
        </div>
      </div>
    </Card>
  );
};

export default AlbumItem;

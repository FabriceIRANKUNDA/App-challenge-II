import Backdrop from '../Backdrop/Backdrop';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onRemoveModal={props.onRemoveErrorModal} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;

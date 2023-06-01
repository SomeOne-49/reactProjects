import styles from './Alert.module.css'
const Alert = (props) => {
  return (
    <div className={styles.alert}>
      <p>Are you sure to logout!</p>
      <button type="button" className={styles.confirm} onClick={props.logout}>
        Ofcourse
      </button>
    </div>
  );
};

export default Alert;

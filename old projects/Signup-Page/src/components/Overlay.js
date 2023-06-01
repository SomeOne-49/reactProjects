import styles from './Overlay.module.css'
const Overlay = (props) => {
  return (
    <div className={styles.overlay} onClick={props.setShowAlert}></div>
  );
};
export default Overlay;

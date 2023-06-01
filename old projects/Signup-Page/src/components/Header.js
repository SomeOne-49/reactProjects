import { useState } from "react";
import ReactDOM from "react-dom";
import Alert from "./Alert";
import Overlay from "./Overlay";
import styles from "./Header.module.css";
const Header = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const confirmHandler = () => {
    props.onLogout();
    setShowAlert(false);
    props.setLocalStorage("0")
  };

  const nav = (
    <nav className={styles.nav}>
      <ul>
        <li>Users</li>
        <li>Admin</li>
        <li className={styles.logout} onClick={() => setShowAlert(true)}>
          Logout
        </li>
      </ul>
    </nav>
  );

  const overlayHandler = () => {
    setShowAlert(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Signup</h1>
      {showAlert &&
        ReactDOM.createPortal(
          <Alert logout={confirmHandler} />,
          document.getElementById("alert-root")
        )}
      {showAlert &&
        ReactDOM.createPortal(
          <Overlay setShowAlert={overlayHandler} />,
          document.getElementById("overlay-root")
        )}
      {props.isLogged && nav}
    </header>
  );
};

export default Header;

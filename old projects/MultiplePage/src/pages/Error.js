import { Link } from "react-router-dom";
import styles from "./Error.module.css";
export default function Error() {
  return (
    <main>
      <h1 className={styles.error}>Oops, there is an error somewhere...</h1>
      <span>
        Go To <Link to="/">Home</Link> Page.
      </span>
    </main>
  );
}

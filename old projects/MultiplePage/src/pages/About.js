import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <h1>Hello, About.</h1>
      <span>
        Go To <Link to="/services">Services</Link> Page.
      </span>
    </>
  );
}

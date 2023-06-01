import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <>
      <h1>Hello, Home.</h1>
      <span> Go To <Link to="/about">About</Link> Page.</span>
    </>
  );
}

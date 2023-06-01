import { useParams, Link } from "react-router-dom";
export default function ServicesDetails() {
  const params = useParams();
  return (
    <>
      <h1>Hello, Services Details.</h1>
      <h2>{params.serviceId}</h2>
      <span>
        Go To <Link to=".."  relative="path">Services</Link> Page.
      </span>
    </>
  );
}
//
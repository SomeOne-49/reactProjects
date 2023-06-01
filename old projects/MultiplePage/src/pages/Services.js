import { Link } from "react-router-dom";
const servicesArr = [
  { id: "p-1", title: "Service 1" },
  { id: "p-2", title: "Service 2" },
  { id: "p-3", title: "Service 3" },
];
export default function Services() {
  return (
    <>
      <h1>Hello, Services.</h1>
      <h2>Services List:</h2>
      <ul>
        {servicesArr.map((service) => {
          return (
            <li>
              <Link to={service.id}>{service.title}</Link>
            </li>
          );
        })}
      </ul>
      <br />
      <span>
        Go To <Link to="..">Home</Link> Page.
      </span>
    </>
  );
}

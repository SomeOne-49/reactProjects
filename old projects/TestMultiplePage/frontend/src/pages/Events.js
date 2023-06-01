import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events.events} />;
}

export default EventsPage;

export const eventLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response("No Data For Fetching", {
    //   status: 500,
    // });
    //~ Other Way To Throw An Error ==>
    throw json("No Data For Fetching" , { status: 500 });
  } else {
    return response;
  }
};

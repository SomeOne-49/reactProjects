import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
  const data = useRouteLoaderData("event-id");
  return <EventItem event={data.event} />;
}

export async function EventDetailLoader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json("Can not find event Details.");
  } else {
    return response;
  }
}

export async function EventDetailAction({ params, request }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) throw json("can not delete event.", { status: 500 });
  return redirect('/events');
}
